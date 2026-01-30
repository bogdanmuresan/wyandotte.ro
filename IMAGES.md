# Image Management Guide

## Overview
All images for the wyandotte.ro website are stored locally in the `/public/images/` directory. This ensures they are version-controlled, fast-loading, and not dependent on external URLs.

## Directory Structure
```
/public/images/
├── silver-laced-wyandotte.svg         (Gallery & default placeholder)
├── campioni_europeni/
│   ├── 581008896_24949517008075653_1766530695287470180_n.jpg
│   ├── 581058625_24949517188075635_8905891682991337117_n.jpg
│   ├── 581802446_24949517324742288_8552539982640617753_n.jpg
│   ├── 581934258_24949517474742273_6471087244460426372_n.jpg
│   └── 583074450_24949516834742337_9217240918686224369_n.jpg
```

## Adding Images

### Gallery Images
1. Place image files in `/public/images/`
2. Update `/src/pages/galerie.astro`:
   ```astro
   <div class="gallery-item">
     <img src="/images/your-image.jpg" alt="Description">
     <p class="caption">Your Image Title</p>
   </div>
   ```

### Article Images
1. Place image files in `/public/images/`
2. Add `image` field to article frontmatter in `/src/content/articole/YYYY-MM-DD-slug.md`:
   ```yaml
   ---
   title: "Article Title"
   description: "Article description"
   pubDate: 2025-11-14
   author: "Author Name"
   image: "/images/article-image.jpg"
   tags: ["tag1", "tag2"]
   ---
   ```

3. The image will automatically display in the articles listing page

### Recommended Image Formats
- **JPG/JPEG**: Photographs of chickens, exhibition photos (good compression)
- **PNG**: Graphics, images with transparency
- **SVG**: Icons, diagrams, illustrations

### Image Optimization Tips
- Keep image dimensions reasonable (max width 1200px for web)
- Compress images before adding (use online tools or ImageMagick)
- Use descriptive alt text for accessibility

## Current Images
- `silver-laced-wyandotte.svg` - Illustration of Silver Laced Wyandotte chicken
- `campioni_europeni/` folder - 5 photos from European championship with Romanian winners

## File Naming Convention
- Use lowercase with hyphens: `silver-laced-wyandotte.jpg`
- Include variety/type: `red-wyandotte-blue-wyandotte-mixed.jpg`
- Avoid spaces and special characters

## Testing Locally
Run the development server and visit:
- Gallery: http://localhost:4321/galerie
- Articles: http://localhost:4321/articole

Images should load without 404 errors.

## Git Management
Images are tracked in git. When committing:
```bash
git add public/images/
git commit -m "Add: [image description]"
```

## Deployment
When deployed to Fly.io, images are automatically included as part of the built static site.
