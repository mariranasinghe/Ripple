# 🌊 Ripple

> Small daily experiments that create ripples. Track what actually works for you.

## Live App
**https://mariranasinghe.github.io/Ripple/**

---

## How updates work

Every time you push a change to `main`, GitHub Actions automatically deploys it to GitHub Pages. Users get the update the next time they open the app — no App Store re-submission needed.

```
You edit index.html → git push → GitHub Actions runs → Live in ~60 seconds
```

---

## Repo structure

```
Ripple/
├── index.html          ← The entire app (edit this for updates)
├── manifest.json       ← PWA manifest (icons, name, theme)
├── sw.js               ← Service worker (offline support)
├── icons/              ← App icons (all sizes, auto-generated)
├── screenshots/        ← Store screenshots (add manually)
├── generate-icons.js   ← Re-run if you change the icon design
└── .github/
    └── workflows/
        └── deploy.yml  ← Auto-deploy on every push to main
```

---

## Step 1 — Enable GitHub Pages (do this once)

1. Go to your repo: **https://github.com/mariranasinghe/Ripple**
2. Click **Settings** → **Pages** (left sidebar)
3. Under "Source", select **GitHub Actions**
4. Click **Save**
5. Push any file to trigger the first deploy
6. Your app will be live at: `https://mariranasinghe.github.io/Ripple/`

---

## Step 2 — Android (Google Play Store)

**Cost: $25 one-time Google Play developer fee**

### 2a. Package the app with PWABuilder
1. Go to **https://pwabuilder.com**
2. Enter your URL: `https://mariranasinghe.github.io/Ripple/`
3. Click **Start** — wait for it to score your PWA (should score 100)
4. Click **Package for stores** → **Android**
5. Fill in:
   - Package ID: `com.mariranasinghe.ripple`
   - App version: `1.0.0`
   - App version code: `1`
6. Click **Generate** → Download the `.zip`

### 2b. Submit to Google Play
1. Sign up at **https://play.google.com/console** (pay $25)
2. Create new app → **Android App**
3. Upload the `.aab` file from the PWABuilder zip
4. Fill in store listing (name, description, screenshots)
5. Submit for review (~2-3 hours for new apps)

### Updating Android
Push to GitHub → GitHub Pages updates → users get the new version automatically on next app open.
No need to re-submit to Google Play unless you change the native wrapper.

---

## Step 3 — iOS (App Store) — No Mac needed

**Cost: $99/year Apple Developer account**

Apple requires a signed `.ipa` file. Since you're on Windows, use a cloud Mac service.

### 3a. Create Apple Developer account
1. Go to **https://developer.apple.com/programs/**
2. Enroll → Individual → Pay $99/year
3. Wait for approval (usually same day)

### 3b. Package with PWABuilder
1. Go to **https://pwabuilder.com**
2. Enter: `https://mariranasinghe.github.io/Ripple/`
3. Click **Package for stores** → **iOS**
4. Fill in:
   - Bundle ID: `com.mariranasinghe.ripple`
   - App version: `1.0.0`
5. Download the Xcode project `.zip`

### 3c. Build on a cloud Mac (no physical Mac needed)
**Option A — GitHub Actions (free)**
> PWABuilder generates a GitHub Actions workflow that builds the IPA in the cloud.
> Just add your Apple certificates as GitHub Secrets (instructions in the downloaded zip).

**Option B — MacinCloud ($1/hr)**
1. Go to **https://www.macincloud.com**
2. Rent a Mac by the hour
3. Upload the Xcode project zip
4. Open in Xcode → Archive → Upload to App Store Connect

### 3d. Submit via App Store Connect
1. Go to **https://appstoreconnect.apple.com**
2. Create new app → iOS
3. Select your uploaded build
4. Fill in metadata, screenshots, description
5. Submit for review (1-3 days)

### Updating iOS
Same as Android — push to GitHub → live instantly via the web. No App Store re-review needed for content updates.

---

## Making updates

### Simple content update (no re-submission needed)
```bash
# Edit index.html, then:
git add index.html
git commit -m "Update: [what you changed]"
git push
# Done — live in ~60 seconds
```

### Icon or manifest update (re-submit both stores)
```bash
# Edit manifest.json or regenerate icons, then:
git add .
git commit -m "Update icons/manifest"
git push
# Then re-package via PWABuilder and re-submit
```

---

## Screenshots for the stores (required)

Both stores require screenshots. Add them to `screenshots/` folder:
- **Size**: 390×844px (iPhone 14 Pro size works for both stores)
- **Format**: PNG
- **Minimum**: 3 screenshots per store

Take them by opening the app on your phone and screenshotting each view:
1. Today view (with some habits checked in)
2. Experiments list
3. Experiment detail or Insights view

---

## Store listing copy

**Short description (80 chars)**
```
Track daily experiments. Build streaks. Discover what works for you.
```

**Full description**
```
Ripple helps you run small personal experiments and track whether they 
actually make a difference in your life.

Whether you want to try reading before bed, cutting caffeine, or meditating 
daily — Ripple helps you test it, track it, and see the results.

FEATURES
• Create experiments with a hypothesis and target duration
• Daily check-ins with streak tracking
• Log detailed observations with mood, productivity, and focus ratings
• Weekly insights and progress charts
• XP system to keep you motivated
• Works completely offline
• Multi-user support on one device

No subscriptions. No ads. Your data stays on your device.
```

**Keywords (App Store)**
```
habit tracker, experiment, self improvement, streak, productivity, journal, wellness
```
