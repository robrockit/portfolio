# Print Stylesheet Documentation

## Overview

The portfolio includes a comprehensive print stylesheet that optimizes the website for printing or exporting to PDF. This feature ensures your portfolio looks professional when printed or saved as a document.

## Features

### ✅ Automatic Optimizations

1. **Light Theme Enforcement**
   - Forces light background and dark text for better print contrast
   - Works regardless of the user's theme preference (light/dark mode)
   - Saves printer ink by removing dark backgrounds

2. **Element Visibility**
   - Hides interactive elements (buttons, navigation, theme toggle)
   - Hides cookie consent banner
   - Removes video and iframe elements
   - Shows only content-relevant information

3. **Typography Optimization**
   - Adjusts font sizes for print readability (12pt body, 24pt h1, etc.)
   - Ensures proper heading hierarchy
   - Optimizes line height and spacing
   - Prevents widows and orphans in paragraphs

4. **Layout Adjustments**
   - A4 page size with standard margins (1.5cm sides, 2cm bottom)
   - Prevents awkward page breaks in sections
   - Converts multi-column grids to single column for print
   - Optimizes profile photo to 150px circular display

5. **Link Handling**
   - Shows URLs after external links for reference
   - Hides noisy social media link URLs
   - Displays email and phone numbers clearly
   - Maintains proper link formatting

6. **Ink Saving**
   - Removes all background colors and gradients
   - Eliminates unnecessary decorative elements
   - Converts to high-contrast black-on-white
   - Uses `color-adjust: exact` for precise color control

## How to Use

### Print from Browser

1. Open the portfolio in any modern browser
2. Press `Ctrl+P` (Windows/Linux) or `Cmd+P` (Mac)
3. In the print dialog:
   - Select your printer or "Save as PDF"
   - Choose portrait orientation
   - Ensure "Background graphics" is enabled (optional, but recommended)
4. Click "Print" or "Save"

### Save as PDF

**Chrome/Edge:**
1. Press `Ctrl+P` / `Cmd+P`
2. Select "Save as PDF" as the destination
3. Click "Save"

**Firefox:**
1. Press `Ctrl+P` / `Cmd+P`
2. Select "Microsoft Print to PDF" or similar
3. Click "Print"

**Safari:**
1. Press `Cmd+P`
2. Click "PDF" dropdown in bottom-left
3. Select "Save as PDF"

## Print Stylesheet Technical Details

### Page Setup
```css
@page {
  size: A4;
  margin: 1.5cm 1.5cm 2cm 1.5cm;
}
```

### Hidden Elements
- Navigation bars
- Theme toggle button
- Cookie consent banner
- Video/iframe embeds
- Social media links in footer
- All JavaScript-dependent interactive elements

### Visible Elements
- All content sections (Hero, About, Experience, Skills, Testimonials, Contact)
- Profile photo (optimized to 150px)
- Contact information with email/phone
- Resume download link (with visual indicator)
- External link URLs (shown in parentheses)

### Typography Scale
| Element | Print Size | Notes |
|---------|-----------|-------|
| Body text | 12pt | Comfortable reading size |
| H1 | 24pt | Page/section titles |
| H2 | 18pt | Major headings with border |
| H3 | 14pt | Sub-headings |
| H4-H6 | 12pt | Minor headings |
| Links | 0.9em | URLs shown after link text |

### Page Break Rules
- **Avoid breaks inside**: sections, cards, testimonials, lists
- **Avoid breaks after**: all headings (h1-h6)
- **Orphans**: Minimum 3 lines at bottom of page
- **Widows**: Minimum 3 lines at top of page

## Testing the Print Stylesheet

### Visual Testing

1. **Open Print Preview**
   ```
   Ctrl+P / Cmd+P → Preview
   ```

2. **Check for**:
   - ✅ All content is visible and readable
   - ✅ No interactive elements (buttons, navigation)
   - ✅ Professional black-on-white color scheme
   - ✅ Profile photo displays correctly
   - ✅ Proper spacing between sections
   - ✅ No awkward page breaks mid-section
   - ✅ Contact information is clear
   - ✅ External link URLs are shown

### Automated Testing

You can test print styles programmatically:

```javascript
// In browser console
const printPreview = window.matchMedia('print');
console.log('Print media query:', printPreview.matches);

// Force print styles (for debugging)
document.documentElement.classList.add('print-mode');
```

## Browser Compatibility

| Browser | Support | Notes |
|---------|---------|-------|
| Chrome | ✅ Full | Excellent print support |
| Firefox | ✅ Full | May need "Print backgrounds" enabled |
| Safari | ✅ Full | Best on macOS |
| Edge | ✅ Full | Same engine as Chrome |
| Mobile browsers | ⚠️ Limited | Print support varies by device |

## Customization

### Adjust Page Margins

Edit `src/app/globals.css:280`:
```css
@page {
  size: A4;
  margin: 2cm;  /* Increase all margins */
}
```

### Change Font Sizes

Edit typography scale in `src/app/globals.css:335-364`:
```css
h1 {
  font-size: 28pt;  /* Larger heading */
}

body {
  font-size: 11pt;  /* Smaller body text */
}
```

### Show Social Links in Print

Remove or comment out line 479 in `src/app/globals.css`:
```css
/* footer [class*="social"] {
  display: none !important;
} */
```

### Add Custom Print-Only Content

Use the `.print-visible` class:
```tsx
<div className="hidden print:block">
  This text only appears when printing
</div>
```

## Best Practices

### For Users
1. **Update regularly**: Refresh your portfolio before printing
2. **Check preview**: Always preview before printing
3. **Use PDF**: Save as PDF instead of physical printing when possible
4. **Test links**: Verify email/phone numbers appear correctly

### For Developers
1. **Test after changes**: Always test print view when updating content
2. **Avoid fixed positioning**: Fixed elements don't print well
3. **Use semantic HTML**: Proper heading hierarchy improves print layout
4. **Minimize decorative elements**: Focus on content over style in print

## Troubleshooting

### Problem: Content is cut off

**Solution**: Reduce page margins or font sizes
```css
@page {
  margin: 1cm;  /* Smaller margins */
}
```

### Problem: Colors don't print

**Solution**: Enable "Background graphics" in print dialog, or the styles already include:
```css
* {
  -webkit-print-color-adjust: exact !important;
  print-color-adjust: exact !important;
}
```

### Problem: Too many pages

**Solution**:
- Remove unnecessary sections before printing
- Decrease font sizes
- Reduce spacing between sections

### Problem: External link URLs are too long

**Solution**: The stylesheet already handles this with `word-break: break-all` on line 395

## Performance

- **Print stylesheet size**: ~5KB (included in main CSS bundle)
- **No additional HTTP requests**: Print styles are in globals.css
- **Zero runtime cost**: Only applies when printing
- **No JavaScript required**: Pure CSS solution

## Related Files

- `src/app/globals.css:252-597` - Print stylesheet implementation
- `docs/RESUME_REQUIREMENT.md` - Resume PDF setup instructions

## Future Enhancements

Potential improvements for future releases:

- [ ] Add print button to UI for user convenience
- [ ] Include QR code with portfolio URL
- [ ] Add custom page headers/footers
- [ ] Support for multiple page layouts (resume vs full portfolio)
- [ ] Print-specific experience timeline styling
- [ ] Option to select which sections to print

## Resources

- [MDN: CSS Print Styles](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#print)
- [Smashing Magazine: Print Stylesheet Guide](https://www.smashingmagazine.com/2011/11/how-to-set-up-a-print-style-sheet/)
- [W3C CSS Paged Media](https://www.w3.org/TR/css-page-3/)

---

**Last Updated**: CCS-27 Implementation
**Version**: 1.0.0
