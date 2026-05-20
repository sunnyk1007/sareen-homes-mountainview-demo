/**
 * Google Apps Script backend for the Sareen Homes static site.
 *
 * Setup:
 * 1. Create a Google Sheet and copy its ID from the URL.
 * 2. Create a new Apps Script project attached to that sheet OR standalone.
 * 3. Paste this file into Apps Script.
 * 4. Update SHEET_ID and optionally DEFAULT_SHEET_NAME / NOTIFICATION_EMAIL.
 * 5. Deploy as a Web App:
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 6. Copy the /exec URL and paste it into site-data.js as integrations.appsScriptUrl
 */

const SHEET_ID = 'PASTE_YOUR_GOOGLE_SHEET_ID_HERE';
const DEFAULT_SHEET_NAME = 'Leads';
const SEND_EMAIL_NOTIFICATIONS = true;
const NOTIFICATION_EMAIL = 'sales@example.com';

function doPost(e) {
  try {
    const sheetName = getParam_(e, 'sheetName') || DEFAULT_SHEET_NAME;
    const sheet = getOrCreateSheet_(SHEET_ID, sheetName);

    const row = {
      timestamp: new Date(),
      firstName: getParam_(e, 'firstName'),
      lastName: getParam_(e, 'lastName'),
      email: getParam_(e, 'email'),
      phone: getParam_(e, 'phone'),
      interest: getParam_(e, 'interest'),
      timeline: getParam_(e, 'timeline'),
      notes: getParam_(e, 'notes'),
      community: getParam_(e, 'community'),
      sourcePage: getParam_(e, 'sourcePage'),
      leadStage: 'New'
    };

    ensureHeaderRow_(sheet, Object.keys(row));
    sheet.appendRow(Object.values(row));

    if (SEND_EMAIL_NOTIFICATIONS && NOTIFICATION_EMAIL) {
      MailApp.sendEmail({
        to: NOTIFICATION_EMAIL,
        subject: `New website lead: ${row.firstName || ''} ${row.lastName || ''}`.trim(),
        htmlBody: buildEmailBody_(row)
      });
    }

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: String(error) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function getParam_(e, key) {
  return (e && e.parameter && e.parameter[key]) ? e.parameter[key] : '';
}

function getOrCreateSheet_(sheetId, sheetName) {
  const spreadsheet = SpreadsheetApp.openById(sheetId);
  let sheet = spreadsheet.getSheetByName(sheetName);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(sheetName);
  }
  return sheet;
}

function ensureHeaderRow_(sheet, headers) {
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
    sheet.setFrozenRows(1);
  }
}

function buildEmailBody_(row) {
  return `
    <h2>New website lead</h2>
    <p><strong>Timestamp:</strong> ${row.timestamp}</p>
    <p><strong>Name:</strong> ${row.firstName} ${row.lastName}</p>
    <p><strong>Email:</strong> ${row.email}</p>
    <p><strong>Phone:</strong> ${row.phone}</p>
    <p><strong>Interest:</strong> ${row.interest}</p>
    <p><strong>Timeline:</strong> ${row.timeline}</p>
    <p><strong>Notes:</strong> ${row.notes}</p>
    <p><strong>Community:</strong> ${row.community}</p>
    <p><strong>Source page:</strong> ${row.sourcePage}</p>
    <p><strong>Lead stage:</strong> ${row.leadStage}</p>
  `;
}
