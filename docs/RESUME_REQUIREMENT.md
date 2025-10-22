# Resume PDF Requirement

## Overview

The portfolio website includes a resume download feature in the footer. This document explains how to add your resume PDF to the site.

## Current Status

⚠️ **Action Required**: A placeholder file currently exists at `public/resume.txt`. You need to replace this with your actual resume PDF.

## How to Add Your Resume

### Step 1: Prepare Your Resume PDF

1. Create or export your resume as a PDF file
2. Recommended specifications:
   - **Format**: PDF (single or multi-page)
   - **File size**: Under 2MB for optimal performance
   - **Naming**: Use descriptive filename (e.g., `Robert_Robinson_Resume.pdf`)
   - **Content**: Ensure all fonts are embedded and links work

### Step 2: Add to Project

1. Save your resume PDF as `resume.pdf` in the `public/` directory:
   ```
   public/
   └── resume.pdf  ← Place your PDF here
   ```

2. Delete the placeholder file:
   ```bash
   rm public/resume.txt
   ```

### Step 3: Verify

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to the footer section
3. Click the "Download Resume" button
4. Verify your PDF downloads correctly with the filename `Robert_Robinson_Resume.pdf`

## Where Resume is Referenced

The resume download button is located in:
- **Component**: `src/components/layout/Footer.tsx:59`
- **Public URL**: `/resume.pdf`
- **Download filename**: `Robert_Robinson_Resume.pdf`

```tsx
<a
  href="/resume.pdf"
  download="Robert_Robinson_Resume.pdf"
  className="..."
>
  <Download className="h-4 w-4" />
  Download Resume
</a>
```

## Customization Options

### Change Download Filename

Edit the `download` attribute in `Footer.tsx:60`:
```tsx
download="Your_Custom_Filename.pdf"
```

### Add Resume Tracking

The resume download is already tracked in Google Analytics via the `trackResumeDownload()` function in `Footer.tsx`.

### Update Resume Version

When you update your resume:
1. Replace `public/resume.pdf` with the new version
2. Clear your browser cache if testing locally
3. The changes will be reflected immediately

## Best Practices

1. **Keep it Current**: Update your resume regularly as you gain new experience
2. **Optimize File Size**: Compress your PDF to reduce download time
3. **Test Across Devices**: Verify the PDF displays correctly on mobile devices
4. **Use Print Stylesheet**: The portfolio includes a print stylesheet (added in CCS-27) for printing directly from the website

## Privacy Considerations

⚠️ **Important**: Your resume PDF will be publicly accessible at `https://yourdomain.com/resume.pdf`

- Anyone with the direct link can download your resume
- Consider removing sensitive information (e.g., full address, references)
- Use professional email and phone number
- Ensure all information is accurate and up-to-date

## Troubleshooting

### Resume Not Downloading

1. Verify the file exists at `public/resume.pdf`
2. Check browser console for 404 errors
3. Clear browser cache and hard refresh (Ctrl+Shift+R)

### Wrong Filename When Downloaded

1. Check the `download` attribute in `Footer.tsx:60`
2. Some browsers may override custom download filenames based on user settings

### PDF Not Opening

1. Verify the PDF is not corrupted
2. Test opening the PDF directly in the browser
3. Check PDF reader software is installed

## Next Steps

- [ ] Create your resume PDF
- [ ] Save as `public/resume.pdf`
- [ ] Delete `public/resume.txt`
- [ ] Test download functionality
- [ ] Verify analytics tracking
