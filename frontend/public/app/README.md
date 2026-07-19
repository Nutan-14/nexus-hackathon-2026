# Smart Complaint Management System

A clean, modern, responsive **frontend-only** system built with pure **HTML5, CSS3, and Vanilla JavaScript** — no frameworks, no build steps.

## Run locally

1. Open this folder in **VS Code**
2. Install the **Live Server** extension
3. Right-click `login.html` → **Open with Live Server**

Or just double-click `login.html` to open in your browser.

## Pages

- `login.html` — Login page
- `register.html` — Register page
- `user-dashboard.html` — Citizen dashboard
- `register-complaint.html` — Register a new complaint
- `complaint-history.html` — List of complaints
- `complaint-details.html` — Complaint detail view
- `admin-dashboard.html` — Admin management panel

## Structure

```
app/
├─ css/styles.css     — All styles (Poppins, Blue Smart City theme)
├─ js/main.js         — Shared JS + dummy data
├─ assets/            — Images/icons (empty; Font Awesome via CDN)
└─ *.html             — Pages
```

## Notes

- Uses dummy data stored in `localStorage` so complaints you register persist while browsing.
- No backend, no build tools, no dependencies to install.
