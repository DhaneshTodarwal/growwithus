# Founders Background Feature - Easy Removal Guide

## Quick Disable/Remove Instructions

If you want to disable or remove the founders background feature, follow these simple steps:

### Option 1: Quick Disable (Recommended)
Simply comment out the component in the homepage:

**File:** `apps/web/src/app/page.tsx`

```tsx
<section className="hero relative min-h-[70vh] flex flex-col items-center justify-center text-center p-8 overflow-hidden">
  <HeroBackground />
  {/* <FoundersBackground /> */}  {/* <- Comment out this line */}
  <div className="z-10">
    // ... rest of hero content
  </div>
</section>
```

### Option 2: Complete Removal

1. **Remove from homepage:** Delete the import and component usage in `apps/web/src/app/page.tsx`:
   ```tsx
   // Remove this import line:
   import FoundersBackground from '../components/FoundersBackground'
   
   // Remove this component usage:
   <FoundersBackground />
   ```

2. **Delete the component file:** Remove `apps/web/src/components/FoundersBackground.tsx`

3. **Clean up images:** Delete the `apps/web/public/founders/` directory if not needed

## What This Feature Includes

### ✅ Enhanced Features Added:
- **Optimized Images**: Using Next.js Image component with blur placeholders
- **Accessibility**: Respects `prefers-reduced-motion` and includes proper ARIA labels
- **Interactive Modal**: Clickable "Meet Our Founders" button opens detailed bios
- **Performance Optimized**: Lazy loading and GPU-friendly animations
- **Hover Controls**: Animation pauses on hover for better UX
- **Mobile Responsive**: Adapts to different screen sizes

### 🎨 Visual Features:
- Subtle rotating founder photos behind hero text (every 5 seconds)
- Elegant pill button in bottom-right corner
- Modal with founder bios, expertise tags, and photos
- Grayscale filter and low opacity to maintain text readability

### 🔧 Technical Features:
- Client-side component with React hooks
- CSS-only animations for performance
- Proper z-index layering
- Blur data URLs for instant loading feedback

## Customization Options

### Change Animation Speed:
In `FoundersBackground.tsx`, modify the interval:
```tsx
const id = setInterval(nextSlide, 5000) // Change 5000 to desired milliseconds
```

### Add/Remove Founders:
Edit the `founders` array in `FoundersBackground.tsx`:
```tsx
const founders: Founder[] = [
  { 
    name: 'Your Name', 
    role: 'Your Role', 
    image: '/founders/your-image.jpg',
    bio: 'Your bio...',
    expertise: ['Skill 1', 'Skill 2']
  },
  // Add more founders...
]
```

### Disable Modal:
Comment out the modal button and modal JSX in `FoundersBackground.tsx`

## Performance Impact
- **Minimal**: Uses optimized Next.js images with blur placeholders
- **GPU-friendly**: Only opacity transitions, no layout shifts
- **Lazy loading**: Images load only when needed
- **Reduced motion**: Respects user accessibility preferences

## Files Modified:
1. `apps/web/src/components/FoundersBackground.tsx` (new file)
2. `apps/web/src/app/page.tsx` (added import and component)
3. `apps/web/public/founders/` (new directory for images)

To revert completely, simply undo changes to file #2 and delete files #1 and #3.
