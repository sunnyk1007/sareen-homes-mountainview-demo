# Free lead capture to Google Sheets

This demo site is already wired so the website form can send leads into a Google Sheet using Google Apps Script.

## What gets stored
Each submission can store:
- timestamp
- first name
- last name
- email
- phone
- interest
- timeline
- notes
- community
- source page URL
- lead stage (`New` by default)

## Step 1: create a Google Sheet
Create a Google Sheet for leads. A good name is:
`Mountain View Leads`

## Step 2: open Apps Script
From the sheet:
- Extensions → Apps Script

Paste the contents of:
`google-apps-script/Code.gs`

Then update:
- `SHEET_ID`
- `DEFAULT_SHEET_NAME`
- `NOTIFICATION_EMAIL` (optional)

## Step 3: deploy the script
In Apps Script:
- Deploy → New deployment
- Select type: Web app
- Execute as: **Me**
- Who has access: **Anyone**

Copy the web app URL that ends in `/exec`

## Step 4: paste the URL into the website
Open:
`site-data.js`

Replace:
`PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE`

with your real `/exec` URL.

## Step 5: upload the site to GitHub
Upload the updated files to your GitHub repo and republish Pages.

## Optional email notifications
This Apps Script also supports email notifications through `MailApp`.
If you do not want email notifications:
- set `SEND_EMAIL_NOTIFICATIONS` to `false`

## Suggested next step for simple CRM use
Once leads are landing in the sheet, add these manual columns:
- calledDate
- siteVisitDate
- followUpVisitDate
- offerSubmittedDate
- notInterestedReason
- owner
- nextAction
- nextFollowUpDate

That gives you a lightweight free CRM without paying for software.
