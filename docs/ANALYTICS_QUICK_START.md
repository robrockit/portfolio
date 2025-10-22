# Analytics Quick Start Guide

## 🚀 Quick Setup (5 minutes)

### Step 1: Get Your GA4 Measurement ID

1. Go to https://analytics.google.com/
2. Create a new property (or use existing)
3. Add a Web data stream
4. Copy your **Measurement ID** (looks like `G-XXXXXXXXXX`)

### Step 2: Add to Environment Variables

Edit `.env.local`:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID="G-YOUR-ACTUAL-ID-HERE"
```

### Step 3: Deploy

That's it! Analytics will automatically track:
- ✅ Page views
- ✅ Button clicks
- ✅ Form submissions
- ✅ External links
- ✅ Scroll depth
- ✅ Theme toggles
- ✅ Resume downloads

## 📊 View Your Data

1. Go to https://analytics.google.com/
2. Click **Reports** → **Realtime**
3. See live visitors and events!

## 🎯 Recommended GA4 Setup

### Create These Conversions:

1. **Contact Form Submissions**
   - Go to Admin → Events
   - Find `form_submission` event
   - Click "Mark as conversion"

2. **Resume Downloads**
   - Find `resume_download` event
   - Click "Mark as conversion"

### Useful Reports to Bookmark:

- **Realtime**: See live activity
- **Engagement → Events**: View all custom events
- **User Attributes**: Demographics and interests
- **Traffic Acquisition**: Where users come from

## 🔧 Testing

### Test Events Are Working:

1. Open your site
2. Open browser DevTools → Console
3. Interact with buttons, forms, scroll, toggle theme
4. Check GA4 Realtime reports (data appears within seconds)

### Verify Cookie Consent:

1. Open site in incognito mode
2. Cookie banner should appear
3. Click "Accept" or "Decline"
4. Refresh page - banner shouldn't appear again

## 📝 Custom Events Reference

| Event | When It Fires | Key Data |
|-------|--------------|----------|
| `button_click` | CTA buttons clicked | Button name, destination |
| `form_submission` | Contact form sent | Success/failure |
| `external_link_click` | External links clicked | Link name, URL |
| `scroll_depth` | User scrolls to 25%, 50%, 75%, 100% | Percentage |
| `theme_toggle` | Theme switched | New theme |
| `resume_download` | Resume downloaded | Download action |
| `contact_method` | Contact method selected | Method type |

## ⚠️ Common Issues

### Events not showing?
- Wait 24-48 hours for standard reports
- Check Realtime reports for immediate data
- Verify Measurement ID in `.env.local`

### Cookie banner not appearing?
- Clear localStorage: `localStorage.removeItem('cookie-consent')`
- Hard refresh the page

## 🔗 Full Documentation

See `docs/ANALYTICS.md` for complete technical documentation.
