# Handover note: Lagos Tech Mixer website

Hello,

Your new website is live at https://lagos-tech-mixer.netlify.app. It's one fast, phone-friendly page with your story and timeline, this year's keynote speaker, a photo gallery, sponsorship levels, a registration form, venue and parking details with a map, and a contact form. A live countdown at the top shows how long is left until the event.

**Registrations and messages:** every form submission is saved in your Netlify dashboard under **Forms** (one list for "registration", one for "contact") and is also emailed to you as it comes in. You can download either list as a spreadsheet (CSV) at any time.

**Updating it next year:**
- **Date:** change the date text in `index.html` (the hero and the Register section), and the countdown date on line 41 of `js/main.js` (`2026-12-12T10:00:00+01:00`).
- **Speaker:** swap the photo `images/speaker-funmi.webp` and edit the name, title and bio in the "Keynote speaker" section of `index.html`.
- **Sponsors:** edit the prices and perks in the "Sponsors" section, and replace the grey "Presenting Sponsors" boxes with your sponsors' logos.

Save, then push to GitHub. Netlify updates the live site automatically within a minute.
