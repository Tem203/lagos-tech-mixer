# Lagos Tech Mixer 2026

One-page event website for Lagos Tech Mixer (Saturday 12 December 2026, Harbour Hall, Victoria Island).
Plain HTML, CSS and JavaScript, hosted on Netlify, forms handled by Netlify Forms.

```
lagos-tech-mixer/
├── index.html        the whole site (10 sections)
├── thank-you.html    page people see after sending a form
├── css/style.css     all styles; colours are at the top
├── js/main.js        hamburger menu, countdown, gallery lightbox
└── images/           WebP photos, favicon, share image
```

---

## Deploy checklist (do these in order)

### 1. Fix the share link
In `index.html`, find `lagos-tech-mixer-yourname` (it's there twice, in the `og:` tags) and replace it with the Netlify site name you'll pick in step 4.

### 2. Put it on GitHub
Create a **public** repo called `lagos-tech-mixer` on GitHub (don't tick "Add a README"). Then in this folder:

```bash
git init
git add .
git commit -m "First version of the site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/lagos-tech-mixer.git
git push -u origin main
```

### 3. Connect Netlify
1. Sign up at netlify.com **with your GitHub account**.
2. **Add new site → Import an existing project → GitHub** → pick `lagos-tech-mixer`.
3. Build command: **empty**. Publish directory: **empty** (or `.`). Click **Deploy**.

### 4. Rename the site
**Site configuration → Change site name** → `lagos-tech-mixer-yourname` (must match step 1).

### 5. Turn on the forms
1. **Forms → Enable form detection**, then trigger a redeploy (**Deploys → Trigger deploy**).
2. On the live site, submit one test registration and one test contact message.
3. Check both appear under **Forms** (`registration` and `contact`).
4. **Site configuration → Notifications → Emails and webhooks → Form submission notifications → Add notification → Email** → your address.

### 6. Check speed
Run the live URL through pagespeed.web.dev (Mobile tab) and take a screenshot of the score.

---

## How the code works (for your review)

**index.html**
- Each section has an `id` (`story`, `speaker`, …). A nav link with `href="#story"` jumps to the element with that id.
- Forms have `data-netlify="true"`. When Netlify deploys, it scans the HTML, finds these forms and starts saving what people submit. The hidden `form-name` input tells Netlify which form a submission belongs to. `bot-field` is a honeypot: it's hidden from people, so if it's filled in, a bot did it and Netlify drops the entry.
- Images have `width`/`height` so the browser reserves the space before they load (no jumping layout), and `loading="lazy"` so photos lower down only download when you scroll near them.

**css/style.css**
- `:root { --green-900: ... }` defines CSS variables. `var(--lime)` uses one. Change it once and it changes everywhere.
- **Mobile first:** the normal rules are for phones. `@media (min-width: 768px)` adds tablet layout, and `@media (min-width: 1024px)` adds desktop.
- Layouts use **CSS Grid** (`display: grid; grid-template-columns: repeat(3, 1fr)` = 3 equal columns) and **Flexbox** (`display: flex` = items in a row).
- `scroll-behavior: smooth` gives smooth scrolling. `scroll-padding-top` stops the sticky header covering section titles.
- `clamp(min, preferred, max)` makes headings grow with screen width but never too small or too big.

**js/main.js**
- **Menu:** clicking the hamburger toggles the class `is-open` on the nav (CSS shows or hides it) and updates `aria-expanded` for screen readers.
- **Countdown:** every second (`setInterval`, 1000 ms) it subtracts now from the event date. That gives milliseconds, which it divides into days, hours, minutes and seconds (86,400 seconds in a day, 3,600 in an hour). `+01:00` in the date is WAT, so it's right in any timezone.
- **Lightbox:** clicking a photo copies its `src` into a `<dialog>` and calls `showModal()`. The browser handles the dark backdrop and closing with Escape.

---

## Credits
Photos from Unsplash (free licence). Speaker and sponsor names are made up.
