# Analytics Integration Guide

## Overview

This portfolio uses **Google Analytics 4 (GA4)** to track visitor behavior, conversions, and site performance. The integration is privacy-conscious, GDPR-compliant, and includes custom event tracking for key user interactions.

## Setup Instructions

### 1. Create a Google Analytics 4 Property

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property or select an existing one
3. Navigate to **Admin** → **Data Streams**
4. Create a **Web** data stream for your domain
5. Copy the **Measurement ID** (format: `G-XXXXXXXXXX`)

### 2. Configure Environment Variables

Update your `.env.local` file with your GA4 Measurement ID:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID="G-XXXXXXXXXX"
```

**Important:** Replace `G-XXXXXXXXXX` with your actual Measurement ID.

### 3. Deploy to Production

The analytics tracking is automatically enabled in production when:
- A valid `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set
- The ID is not the placeholder value `G-XXXXXXXXXX`

## Tracked Events

### Automatic Events (via GA4)

- **Page views** - All page navigations
- **Session start** - User begins browsing
- **Engagement** - Time on page, session duration
- **User engagement** - Scroll activity

### Custom Events

The following custom events are tracked through our analytics utility:

#### 1. **Button Clicks**
- **Event Name:** `button_click`
- **Parameters:**
  - `button_name` - Name of the button clicked
  - `destination_url` - URL or anchor target
- **Triggers:**
  - "View GitHub" button (Hero)
  - "Get in Touch" button (Hero)
  - Resume download button (Footer)

#### 2. **Form Submissions**
- **Event Name:** `form_submission`
- **Parameters:**
  - `form_name` - Name of the form
  - `success` - Boolean indicating success/failure
- **Triggers:**
  - Contact form submission (success or error)

#### 3. **External Link Clicks**
- **Event Name:** `external_link_click`
- **Parameters:**
  - `link_name` - Name/label of the link
  - `destination_url` - External URL
- **Triggers:**
  - GitHub profile links
  - LinkedIn profile links
  - Email links
  - Technology links (Next.js, Tailwind CSS, Framer Motion)

#### 4. **Scroll Depth**
- **Event Name:** `scroll_depth`
- **Parameters:**
  - `scroll_percentage` - Milestone reached (25, 50, 75, 100)
- **Triggers:**
  - Automatically tracked when user scrolls to each milestone

#### 5. **Theme Toggle**
- **Event Name:** `theme_toggle`
- **Parameters:**
  - `theme` - New theme selected ("light" or "dark")
- **Triggers:**
  - When user toggles between light/dark modes

#### 6. **Resume Download**
- **Event Name:** `resume_download`
- **Parameters:**
  - `action` - "download"
- **Triggers:**
  - When resume PDF is downloaded

#### 7. **Contact Method Selection**
- **Event Name:** `contact_method`
- **Parameters:**
  - `method` - Contact method chosen (Email, LinkedIn, GitHub)
- **Triggers:**
  - When user clicks a contact method in Contact section

## Cookie Consent

### How It Works

1. **First Visit**: Cookie consent banner appears at the bottom of the screen
2. **User Choice**:
   - **Accept**: Enables GA4 tracking, stores consent in localStorage
   - **Decline**: Disables GA4 tracking, stores decline in localStorage
3. **Subsequent Visits**: Banner doesn't appear; preference is remembered

### Implementation

The cookie consent is handled by the `CookieConsent` component (`src/components/ui/CookieConsent.tsx`):

- Uses `localStorage` to store user preference
- Displays after 1-second delay on first visit
- Animated slide-in from bottom using Framer Motion
- Respects user privacy by disabling GA when declined

## Viewing Analytics Data

### Real-Time Reports

1. Go to [Google Analytics](https://analytics.google.com/)
2. Select your property
3. Navigate to **Reports** → **Realtime**
4. See live visitors, page views, and custom events

### Custom Event Reports

1. Navigate to **Reports** → **Engagement** → **Events**
2. View all custom events fired on your site
3. Click on an event name to see detailed parameters

### Creating Custom Reports

#### Recommended Conversions to Set Up:

1. **Form Submissions**
   - Event: `form_submission`
   - Condition: `success = true`

2. **Resume Downloads**
   - Event: `resume_download`

3. **GitHub Profile Clicks**
   - Event: `external_link_click`
   - Condition: `link_name = GitHub`

#### Setting Up Conversions:

1. Go to **Admin** → **Events**
2. Find your custom event
3. Toggle "Mark as conversion"

## Key Metrics to Monitor

### Traffic Metrics
- **Unique Visitors** - Total unique users
- **Page Views** - Total page loads
- **Average Session Duration** - Time spent on site
- **Bounce Rate** - Single-page sessions

### Engagement Metrics
- **Scroll Depth** - How far users scroll
- **Theme Toggle Usage** - User preferences
- **Contact Method Clicks** - Preferred contact methods

### Conversion Metrics
- **Form Submissions** - Contact form completions
- **Resume Downloads** - Resume download count
- **External Link Clicks** - GitHub, LinkedIn engagement

## Technical Architecture

### Files Structure

```
src/
├── lib/
│   └── analytics.ts          # Analytics utility functions
├── hooks/
│   └── useScrollDepth.ts     # Scroll depth tracking hook
├── components/
│   ├── ui/
│   │   └── CookieConsent.tsx # Cookie consent banner
│   ├── sections/
│   │   ├── Hero.tsx          # Button click tracking
│   │   └── Contact.tsx       # Form & contact tracking
│   └── layout/
│       └── Footer.tsx        # Resume & social link tracking
└── app/
    ├── layout.tsx            # GA4 integration
    └── page.tsx              # Scroll depth integration
```

### Analytics Utility (`src/lib/analytics.ts`)

Provides type-safe functions for tracking events:

```typescript
import { trackButtonClick, trackFormSubmission } from '@/lib/analytics';

// Track a button click
trackButtonClick("CTA Button", "/contact");

// Track form submission
trackFormSubmission("Contact Form", true);
```

### Scroll Depth Hook (`src/hooks/useScrollDepth.ts`)

Automatically tracks scroll milestones:

```typescript
import { useScrollDepth } from '@/hooks/useScrollDepth';

function Page() {
  useScrollDepth(); // Tracks 25%, 50%, 75%, 100% automatically
  return <div>...</div>;
}
```

## Privacy & GDPR Compliance

### Data Collection

We collect:
- ✅ Anonymized page views
- ✅ Anonymized user interactions (clicks, scrolls)
- ✅ Session duration and bounce rate
- ✅ Device and browser information

We **DO NOT** collect:
- ❌ Personal identifying information
- ❌ IP addresses (anonymized by GA4)
- ❌ Cross-site tracking data

### User Rights

Users can:
- **Opt-out**: Decline cookies via the consent banner
- **Data deletion**: Contact site owner for data removal
- **Transparency**: View what data is collected via the cookie banner

### Cookie Policy

The cookie consent banner:
- Appears on first visit
- Explains data collection clearly
- Links to privacy policy
- Allows easy opt-out
- Remembers user choice

## Troubleshooting

### Events Not Showing in GA4

1. **Check Real-Time Reports**: Events may take 24-48 hours to appear in standard reports
2. **Verify Measurement ID**: Ensure `.env.local` has correct GA4 ID
3. **Check Console**: Open browser DevTools and look for GA4 script errors
4. **Test with GA Debugger**: Install [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/) Chrome extension

### Cookie Consent Not Appearing

1. **Clear localStorage**: Run `localStorage.removeItem('cookie-consent')` in console
2. **Check Production Build**: Cookie banner only shows on production builds
3. **Verify Component Import**: Ensure `CookieConsent` is imported in `layout.tsx`

### Events Firing Multiple Times

- Check that event tracking functions aren't called multiple times in component lifecycle
- Verify event listeners have proper cleanup in `useEffect`

## Development vs. Production

### Development Mode

- GA4 script loads but may not send data
- Use **GA Debugger** extension to verify events
- Check browser console for `gtag` calls

### Production Mode

- GA4 fully operational
- Events appear in Real-Time reports immediately
- Data processed within 24-48 hours for standard reports

## Best Practices

1. **Review Events Regularly**: Check GA4 reports weekly to understand user behavior
2. **Set Up Alerts**: Configure email alerts for unusual traffic patterns
3. **Create Custom Dashboards**: Build focused dashboards for key metrics
4. **A/B Testing**: Use event data to inform design and content decisions
5. **Respect Privacy**: Always honor user cookie preferences

## Resources

- [Google Analytics 4 Documentation](https://support.google.com/analytics/answer/10089681)
- [GA4 Event Tracking Guide](https://developers.google.com/analytics/devguides/collection/ga4/events)
- [Next.js Third-Party Libraries](https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries)
- [GDPR Compliance Guide](https://gdpr.eu/cookies/)

## Support

For issues or questions about analytics integration:
1. Check this documentation first
2. Review GA4 Real-Time reports
3. Consult Google Analytics support
4. Contact the development team

---

**Last Updated:** October 2025
**Version:** 1.0.0
