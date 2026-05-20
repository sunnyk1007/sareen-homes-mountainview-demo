const demoLeads = [
  {
    id: 1,
    timestamp: "2026-05-20 10:18 AM",
    firstName: "Emma",
    lastName: "Taylor",
    email: "emma.taylor@example.com",
    phone: "(703) 555-0142",
    interest: "Scheduling a hard hat tour",
    timeline: "3–6 months",
    notes: "Interested in rooftop living and likely wants one of the premium lots near the green.",
    community: "Sareen Homes at Mountain View",
    sourcePage: "Website form",
    stage: "New",
    owner: "Sales Rep 1",
    reason: ""
  },
  {
    id: 2,
    timestamp: "2026-05-20 09:04 AM",
    firstName: "Noah",
    lastName: "Patel",
    email: "noah.patel@example.com",
    phone: "(571) 555-0191",
    interest: "Pricing and updates",
    timeline: "Spring 2027",
    notes: "Asking about model sizing and school info.",
    community: "Sareen Homes at Mountain View",
    sourcePage: "Website form",
    stage: "Called",
    owner: "Sales Rep 2",
    reason: ""
  },
  {
    id: 3,
    timestamp: "2026-05-19 04:42 PM",
    firstName: "Ava",
    lastName: "Nguyen",
    email: "ava.nguyen@example.com",
    phone: "(202) 555-0160",
    interest: "Homesite and model information",
    timeline: "As soon as possible",
    notes: "Wants a larger plan and asked for likely release timing.",
    community: "Sareen Homes at Mountain View",
    sourcePage: "Website form",
    stage: "Site Visit",
    owner: "Sales Rep 1",
    reason: ""
  },
  {
    id: 4,
    timestamp: "2026-05-18 01:11 PM",
    firstName: "Liam",
    lastName: "Brooks",
    email: "liam.brooks@example.com",
    phone: "(703) 555-0178",
    interest: "Scheduling a hard hat tour",
    timeline: "6–12 months",
    notes: "Came through after seeing the page on mobile.",
    community: "Sareen Homes at Mountain View",
    sourcePage: "Website form",
    stage: "Follow-Up Visit",
    owner: "Sales Rep 3",
    reason: ""
  },
  {
    id: 5,
    timestamp: "2026-05-17 11:52 AM",
    firstName: "Sophia",
    lastName: "Reed",
    email: "sophia.reed@example.com",
    phone: "(571) 555-0130",
    interest: "Joining the waitlist",
    timeline: "Just exploring",
    notes: "Very interested in the Overlook concept.",
    community: "Sareen Homes at Mountain View",
    sourcePage: "Website form",
    stage: "Offer Submitted",
    owner: "Sales Rep 2",
    reason: ""
  },
  {
    id: 6,
    timestamp: "2026-05-17 09:20 AM",
    firstName: "Mason",
    lastName: "Hill",
    email: "mason.hill@example.com",
    phone: "(240) 555-0189",
    interest: "Pricing and updates",
    timeline: "Just exploring",
    notes: "Liked the architecture but price range felt too high.",
    community: "Sareen Homes at Mountain View",
    sourcePage: "Website form",
    stage: "Not Interested",
    owner: "Sales Rep 1",
    reason: "Budget mismatch"
  }
];

const stages = [
  "New",
  "Called",
  "Site Visit",
  "Follow-Up Visit",
  "Offer Submitted",
  "Not Interested"
];

function stageClass(stage) {
  return "status-" + stage.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function loadLeads() {
  const saved = localStorage.getItem("mountainViewDemoLeads");
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {}
  }
  localStorage.setItem("mountainViewDemoLeads", JSON.stringify(demoLeads));
  return demoLeads;
}

function saveLeads(leads) {
  localStorage.setItem("mountainViewDemoLeads", JSON.stringify(leads));
}

let leads = loadLeads();
let activeLeadId = leads[0]?.id || null;

function filteredLeads() {
  const search = document.getElementById("search")?.value?.trim().toLowerCase() || "";
  const owner = document.getElementById("ownerFilter")?.value || "";
  const stage = document.getElementById("stageFilter")?.value || "";

  return leads.filter(lead => {
    const text = `${lead.firstName} ${lead.lastName} ${lead.email} ${lead.phone} ${lead.notes}`.toLowerCase();
    const searchMatch = !search || text.includes(search);
    const ownerMatch = !owner || lead.owner === owner;
    const stageMatch = !stage || lead.stage === stage;
    return searchMatch && ownerMatch && stageMatch;
  });
}

function renderSummary() {
  const counts = {
    total: leads.length,
    active: leads.filter(l => l.stage !== "Not Interested").length,
    tours: leads.filter(l => l.stage === "Site Visit" || l.stage === "Follow-Up Visit").length,
    offers: leads.filter(l => l.stage === "Offer Submitted").length
  };

  document.getElementById("summary").innerHTML = `
    <div class="summary-card"><strong>${counts.total}</strong><span>Total leads</span></div>
    <div class="summary-card"><strong>${counts.active}</strong><span>Active pipeline</span></div>
    <div class="summary-card"><strong>${counts.tours}</strong><span>Tour-stage leads</span></div>
    <div class="summary-card"><strong>${counts.offers}</strong><span>Offers submitted</span></div>
  `;
}

function leadCard(lead) {
  return `
    <div class="lead-card ${lead.id === activeLeadId ? "active" : ""}" data-id="${lead.id}">
      <h4>${lead.firstName} ${lead.lastName}</h4>
      <div class="lead-meta">
        <div>${lead.interest}</div>
        <div>${lead.timeline}</div>
        <div>${lead.owner}</div>
      </div>
    </div>
  `;
}

function renderBoard() {
  const board = document.getElementById("board");
  const filtered = filteredLeads();

  board.innerHTML = stages.map(stage => {
    const items = filtered.filter(lead => lead.stage === stage);
    return `
      <div class="board-col">
        <div class="board-col-header">
          <strong>${stage}</strong>
          <span class="count-pill">${items.length}</span>
        </div>
        <div>
          ${items.map(leadCard).join("") || `<div class="tiny">No leads</div>`}
        </div>
      </div>
    `;
  }).join("");

  board.querySelectorAll(".lead-card").forEach(card => {
    card.addEventListener("click", () => {
      activeLeadId = Number(card.dataset.id);
      renderBoard();
      renderDetail();
    });
  });
}

function renderDetail() {
  const lead = leads.find(l => l.id === activeLeadId);
  const detail = document.getElementById("detail");

  if (!lead) {
    detail.innerHTML = `<div class="tiny">Select a lead to view details.</div>`;
    return;
  }

  detail.innerHTML = `
    <div class="eyebrow">Lead detail</div>
    <h3 class="serif">${lead.firstName} ${lead.lastName}</h3>
    <p>${lead.interest} • ${lead.timeline}</p>

    <div class="detail-stack">
      <div class="inline-row">
        <div class="detail-box">
          <strong>Email</strong>
          <span>${lead.email}</span>
        </div>
        <div class="detail-box">
          <strong>Phone</strong>
          <span>${lead.phone}</span>
        </div>
      </div>

      <div class="inline-row">
        <div class="detail-box">
          <strong>Submitted</strong>
          <span>${lead.timestamp}</span>
        </div>
        <div class="detail-box">
          <strong>Owner</strong>
          <span>${lead.owner}</span>
        </div>
      </div>

      <div class="detail-box">
        <strong>Community / source</strong>
        <span>${lead.community}<br>${lead.sourcePage}</span>
      </div>

      <div class="detail-box">
        <strong>Status</strong>
        <select class="select-stage" id="detail-stage">
          ${stages.map(stage => `<option value="${stage}" ${stage === lead.stage ? "selected" : ""}>${stage}</option>`).join("")}
        </select>
      </div>

      <div class="detail-box">
        <strong>Notes</strong>
        <textarea class="notes" id="detail-notes">${lead.notes || ""}</textarea>
      </div>

      <div class="detail-box">
        <strong>Not interested reason</strong>
        <textarea class="notes" id="detail-reason">${lead.reason || ""}</textarea>
      </div>

      <div class="detail-actions">
        <button class="btn btn-primary" id="save-detail">Save changes</button>
        <button class="btn btn-secondary" id="reset-demo">Reset demo data</button>
      </div>
    </div>
  `;

  document.getElementById("save-detail").addEventListener("click", () => {
    lead.stage = document.getElementById("detail-stage").value;
    lead.notes = document.getElementById("detail-notes").value;
    lead.reason = document.getElementById("detail-reason").value;
    saveLeads(leads);
    renderSummary();
    renderBoard();
    renderDetail();
    renderTable();
  });

  document.getElementById("reset-demo").addEventListener("click", () => {
    localStorage.removeItem("mountainViewDemoLeads");
    leads = loadLeads();
    activeLeadId = leads[0]?.id || null;
    init();
  });
}

function renderTable() {
  const filtered = filteredLeads();
  const tbody = document.getElementById("lead-table-body");

  tbody.innerHTML = filtered.map(lead => `
    <tr>
      <td>${lead.timestamp}</td>
      <td>${lead.firstName} ${lead.lastName}</td>
      <td>${lead.email}<br>${lead.phone}</td>
      <td>${lead.interest}</td>
      <td><span class="status-chip ${stageClass(lead.stage)}">${lead.stage}</span></td>
      <td>${lead.owner}</td>
      <td>${lead.reason || "—"}</td>
    </tr>
  `).join("");
}

function initFilters() {
  document.getElementById("search").addEventListener("input", () => {
    renderBoard();
    renderTable();
  });

  document.getElementById("ownerFilter").addEventListener("change", () => {
    renderBoard();
    renderTable();
  });

  document.getElementById("stageFilter").addEventListener("change", () => {
    renderBoard();
    renderTable();
  });

  document.getElementById("clearFilters").addEventListener("click", () => {
    document.getElementById("search").value = "";
    document.getElementById("ownerFilter").value = "";
    document.getElementById("stageFilter").value = "";
    renderBoard();
    renderTable();
  });
}

function populateOwnerFilter() {
  const owners = [...new Set(leads.map(lead => lead.owner))];
  document.getElementById("ownerFilter").innerHTML = `
    <option value="">All owners</option>
    ${owners.map(owner => `<option value="${owner}">${owner}</option>`).join("")}
  `;
}

function init() {
  renderSummary();
  populateOwnerFilter();
  initFilters();
  renderBoard();
  renderDetail();
  renderTable();
}

document.addEventListener("DOMContentLoaded", init);
