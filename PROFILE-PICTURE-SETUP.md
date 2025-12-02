# Profile Picture Setup

## Instructions

To add your profile picture to the portfolio:

1. **Prepare Your Image:**
   - Take a professional headshot or passport-style photo
   - Recommended: Square aspect ratio (e.g., 500x500px or 1000x1000px)
   - Format: JPG or PNG
   - File size: Keep under 1MB for fast loading

2. **Add Your Photo:**
   - Save your photo as `profile.jpg` or `profile.png`
   - Place it in: `assets/images/`
   - The portfolio is already configured to use `assets/images/profile.jpg`

3. **Image Tips:**
   - Use good lighting
   - Plain or professional background
   - Professional attire
   - Smile (optional but recommended for friendly appearance)
   - High resolution but optimized for web

4. **Alternative: Use a Placeholder:**
   If you don't have a photo yet, you can use a placeholder from:
   - [UI Avatars](https://ui-avatars.com/) - Generates initials avatar
   - [Unsplash](https://unsplash.com/) - Professional stock photos
   - [LinkedIn](https://linkedin.com) - Download your LinkedIn profile photo

## Current Status

✅ HTML structure is ready
✅ CSS styling is complete with animations
✅ Image folder created at `assets/images/`
⏳ **ACTION NEEDED**: Add your `profile.jpg` to `assets/images/` folder

## Example Code (Already Implemented)

```html
<div class="profile-picture-container">
    <img src="./assets/images/profile.jpg" alt="Ebenezer Doutimiwei" class="profile-picture">
    <div class="profile-badge">
        <i class="fas fa-check-circle"></i>
    </div>
</div>
```

The profile picture will appear in the hero section with:
- Circular border with gradient animation
- Verification badge
- Professional presentation
- Responsive sizing on mobile devices

---

**Note**: Until you add your photo, you may see a broken image placeholder. This is normal and will be fixed once you add `profile.jpg`.
