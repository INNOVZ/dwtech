import os
from PIL import Image

brain_dir = "/Users/jithinjacob/.gemini/antigravity/brain/f788db65-b370-42b6-8187-626673a15548"
dest_dir = "/Users/jithinjacob/Desktop/dwtech/public/banners"

os.makedirs(dest_dir, exist_ok=True)

banner_mappings = {
    "about-banner.webp": "about_banner_1794304485144.jpg",
    "contact-banner.webp": "contact_banner_1794304509205.jpg",
    "portfolio-banner.webp": "portfolio_banner_1794304549678.jpg",
    "services-banner.webp": "services_banner_1794304575894.jpg",
    "solutions-banner.webp": "solutions_banner_1794304599730.jpg",
    "blogs-banner.webp": "blogs_banner_1794304621290.jpg",
    "ai-solutions-banner.webp": "ai_solutions_banner_1794304488568.jpg",
    "cloud-devops-banner.webp": "cloud_devops_banner_1794304507139.jpg",
    "web-development-banner.webp": "web_development_banner_1794304527105.jpg",
    "ecommerce-banner.webp": "ecommerce_banner_1794304549320.jpg",
    "enterprise-erp-banner.webp": "enterprise_erp_banner_1794304571925.jpg",
    "ui-ux-design-banner.webp": "ui_ux_design_banner_1794304595635.jpg"
}

for webp_name, src_name in banner_mappings.items():
    src_path = os.path.join(brain_dir, src_name)
    dest_path = os.path.join(dest_dir, webp_name)
    
    if os.path.exists(src_path):
        with Image.open(src_path) as img:
            # Resize if needed (ensure max width 1920)
            if img.width > 1920:
                h = int(img.height * (1920 / img.width))
                img = img.resize((1920, h), Image.Resampling.LANCZOS)
            
            # Save as optimized WebP
            img.save(dest_path, "WEBP", quality=85, method=6)
            size_kb = os.path.getsize(dest_path) / 1024
            print(f"Saved {webp_name} ({img.width}x{img.height}) -> {size_kb:.1f} KB")
    else:
        print(f"Error: Source file {src_path} not found!")

print("\nAll WebP banners converted and saved to public/banners/ successfully!")

