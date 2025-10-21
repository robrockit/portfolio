# Image Optimization Guide

## Current Issues

### profile.JPG
- **Current Size:** 8.0 MB
- **Current Dimensions:** 6000x4000 pixels
- **Display Size:** Maximum 384x384px (circular crop)
- **Problem:** Image is 15x larger than needed in dimensions, causing massive bandwidth waste

## Optimization Required

### 1. Resize and Compress Profile Image

The profile image needs to be optimized for web use:

**Recommended Sizes:**
- **Primary (2x):** 768x768px - For retina/high-DPI displays
- **Standard (1x):** 384x384px - For standard displays
- **Mobile:** 512x512px - Good balance for mobile devices

**Target File Sizes:**
- WebP format: 30-50KB for 768x768px
- JPEG fallback: 60-80KB for 768x768px

### 2. Recommended Tools

**Online Tools:**
1. **TinyPNG/TinyJPG** (https://tinypng.com/)
   - Simple drag-and-drop compression
   - Maintains good quality

2. **Squoosh** (https://squoosh.app/)
   - Google's image optimizer
   - Convert to WebP
   - Fine-tune quality settings

3. **CloudConvert** (https://cloudconvert.com/)
   - Batch conversion to WebP
   - Resize multiple sizes at once

**Command Line (if available):**
```bash
# Using ImageMagick
convert profile.JPG -resize 768x768 -quality 85 profile-768.jpg
convert profile.JPG -resize 768x768 -quality 90 profile-768.webp

# Using sharp-cli (if installed)
npx sharp-cli -i profile.JPG -o profile-768.webp resize 768 768 --quality 90
```

### 3. Recommended File Structure

```
public/images/
├── profile-384.webp    (30-40KB) - Standard display
├── profile-768.webp    (40-50KB) - Retina display
├── profile-384.jpg     (60-70KB) - Fallback
└── profile-768.jpg     (80-100KB) - Fallback retina
```

### 4. Implementation Steps

1. **Resize the original image:**
   - Upload to Squoosh.app
   - Resize to 768x768px
   - Export as WebP (quality 90)
   - Export as JPEG (quality 85)

2. **Create additional sizes:**
   - Create 384x384px version for standard displays
   - Keep both WebP and JPEG formats

3. **Replace in codebase:**
   - Update `src/components/sections/Hero.tsx`
   - Update image path from `/images/profile.jpg` to `/images/profile-768.webp`

4. **Update Next.js Image component (already implemented):**
   ```tsx
   <Image
     src="/images/profile-768.webp"
     alt="Professional headshot of Robert Robinson"
     fill
     className="object-cover"
     priority
     sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
   />
   ```

### 5. Expected Performance Impact

**Before Optimization:**
- Profile image: ~8.0 MB
- Initial page load: 8+ MB download
- LCP (Largest Contentful Paint): 5-10 seconds on slow 3G

**After Optimization:**
- Profile image: ~50 KB (WebP, 768x768)
- Initial page load: <500 KB
- LCP: <2.5 seconds (meets Core Web Vitals)
- **Performance improvement: 99% reduction in image size!**

### 6. Next.js Image Optimization

The Next.js Image component already provides:
- ✅ Automatic lazy loading
- ✅ Responsive images with `sizes` attribute
- ✅ Modern image formats (WebP, AVIF) on supported browsers
- ✅ Optimized loading with `priority` flag for above-fold images

However, Next.js still needs a reasonably-sized source image to work with. The current 8MB image is too large even for Next.js to optimize efficiently.

## Current Status

- ❌ profile.JPG: 8.0 MB (NEEDS OPTIMIZATION)
- ✅ Next.js Image component: Properly implemented
- ✅ Lazy loading: Configured
- ✅ Responsive sizes: Defined

## Action Items

1. **CRITICAL:** Optimize profile.JPG using one of the recommended tools above
2. Replace the file in `/public/images/` directory
3. Test page load performance with Lighthouse
4. Verify Core Web Vitals targets are met
