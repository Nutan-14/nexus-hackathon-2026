// Smart Complaint Management System - Main JS
// Dummy data + shared UI logic

const CATEGORIES = [
  { key: 'Garbage', icon: 'fa-trash' },
  { key: 'Potholes', icon: 'fa-road' },
  { key: 'Water Leakage', icon: 'fa-droplet' },
  { key: 'Street Lights', icon: 'fa-lightbulb' },
  { key: 'Drainage', icon: 'fa-water' },
  { key: 'Illegal Parking', icon: 'fa-square-parking' },
  { key: 'Noise Pollution', icon: 'fa-volume-high' },
];

const STATUSES = ['Open', 'In Progress', 'Resolved'];

const DUMMY_COMPLAINTS = [
  { id: 'CMP-1024', title: 'Overflowing garbage bin near Sector 12 park', category: 'Garbage', status: 'Open', date: '2025-07-15', location: 'Sector 12, Main Road', priority: 'High', user: 'Rahul Sharma', description: 'The community garbage bin has been overflowing for 3 days. Attracting stray animals and creating a foul smell.' },
  { id: 'CMP-1023', title: 'Large pothole on MG Road causing accidents', category: 'Potholes', status: 'In Progress', date: '2025-07-14', location: 'MG Road, Near Signal', priority: 'High', user: 'Priya Verma', description: 'A large pothole approximately 2 feet wide has formed. Two-wheelers have already skidded.' },
  { id: 'CMP-1022', title: 'Street light not working for a week', category: 'Street Lights', status: 'Resolved', date: '2025-07-10', location: 'Ashok Nagar Lane 4', priority: 'Medium', user: 'Amit Singh', description: 'The lamp post at the corner of Lane 4 has been dark since last Monday. Safety concern at night.' },
  { id: 'CMP-1021', title: 'Continuous water leakage from main pipe', category: 'Water Leakage', status: 'In Progress', date: '2025-07-13', location: 'Green Park, Block B', priority: 'High', user: 'Neha Kapoor', description: 'Water is continuously leaking causing wastage and road damage.' },
  { id: 'CMP-1020', title: 'Blocked drainage causing waterlogging', category: 'Drainage', status: 'Open', date: '2025-07-16', location: 'Market Street', priority: 'Medium', user: 'Ravi Kumar', description: 'Drain is fully blocked, water accumulates every time it rains.' },
  { id: 'CMP-1019', title: 'Illegal parking blocking emergency access', category: 'Illegal Parking', status: 'Resolved', date: '2025-07-09', location: 'Hospital Road', priority: 'High', user: 'Sneha Patel', description: 'Cars parked in the no-parking zone near the hospital entrance.' },
  { id: 'CMP-1018', title: 'Loud construction noise during night hours', category: 'Noise Pollution', status: 'Open', date: '2025-07-17', location: 'Rose Villa Apartments', priority: 'Low', user: 'Karan Mehta', description: 'Construction work continues past midnight regularly.' },
  { id: 'CMP-1017', title: 'Garbage not collected for 5 days', category: 'Garbage', status: 'In Progress', date: '2025-07-12', location: 'Lakeview Colony', priority: 'Medium', user: 'Anjali Rao', description: 'Regular garbage collection has been missed multiple times.' },
];

// Persist / load complaints
function loadComplaints() {
  const stored = localStorage.getItem('complaints');
  if (stored) return JSON.parse(stored);
  localStorage.setItem('complaints', JSON.stringify(DUMMY_COMPLAINTS));
  return DUMMY_COMPLAINTS;
}
function saveComplaints(list) { localStorage.setItem('complaints', JSON.stringify(list)); }

function statusBadge(status) {
  const cls = status === 'Open' ? 'badge-open' : status === 'In Progress' ? 'badge-progress' : 'badge-resolved';
  return `<span class="badge ${cls}">${status}</span>`;
}
function catBadge(cat) { return `<span class="badge badge-cat">${cat}</span>`; }

function formatDate(d) {
  const dt = new Date(d);
  return dt.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
}

// Sidebar toggle
function initSidebar() {
  const btn = document.querySelector('.hamburger');
  const sb = document.querySelector('.sidebar');
  if (!btn || !sb) return;
  let overlay = document.querySelector('.sidebar-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    document.body.appendChild(overlay);
  }
  btn.addEventListener('click', () => {
    sb.classList.toggle('open');
    overlay.classList.toggle('show');
  });
  overlay.addEventListener('click', () => {
    sb.classList.remove('open');
    overlay.classList.remove('show');
  });
}

// Simple auth stub
function fakeLogin(email) {
  localStorage.setItem('user', JSON.stringify({ email, name: email.split('@')[0] || 'User' }));
}
function logout() {
  localStorage.removeItem('user');
  window.location.href = 'login.html';
}

document.addEventListener('DOMContentLoaded', () => {
  initSidebar();
  const logoutBtn = document.querySelector('[data-logout]');
  if (logoutBtn) logoutBtn.addEventListener('click', (e) => { e.preventDefault(); logout(); });
});
