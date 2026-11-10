import os
import urllib.request
from PIL import Image
import io

dest_dir = "/Users/jithinjacob/Desktop/dwtech/public/banners"
os.makedirs(dest_dir, exist_ok=True)

real_photos = {
    "about-banner.webp": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1920&q=80", # Dubai skyline & architecture
    "contact-banner.webp": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80", # Real modern glass office / conference
    "portfolio-banner.webp": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&q=80", # Real analytics & product dashboards
    "services-banner.webp": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1920&q=80", # Real enterprise data center
    "solutions-banner.webp": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80", # Real engineers / modern office
    "blogs-banner.webp": "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1920&q=80", # Real executive desk & notebook
    "ai-solutions-banner.webp": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80", # Real computing chip hardware macro
    "cloud-devops-banner.webp": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1920&q=80", # Real enterprise cloud server racks
    "web-development-banner.webp": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1920&q=80", # Real code on programmer monitor
    "ecommerce-banner.webp": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80", # Real logistics & fulfillment warehouse
    "enterprise-erp-banner.webp": "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1920&q=80", # Real corporate boardroom architecture
    "ui-ux-design-banner.webp": "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1920&q=80", # Real UI/UX designer wireframing interfaces
}

for filename, url in real_photos.items():
    dest_path = os.path.join(dest_dir, filename)
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    
    with urllib.request.urlopen(req, timeout=15) as resp:
        img_bytes = resp.read()
    
    with Image.open(io.BytesIO(img_bytes)) as img:
        img = img.convert("RGB")
        # Resize if width exceeds 1920
        if img.width > 1920:
            h = int(img.height * (1920 / img.width))
            img = img.resize((1920, h), Image.Resampling.LANCZOS)
        
        img.save(dest_path, "WEBP", quality=85, method=6)
        size_kb = os.path.getsize(dest_path) / 1024
        print(f"Saved REAL photo -> {filename} ({img.width}x{img.height}) - {size_kb:.1f} KB")

print("\nAll 12 authentic, realistic photography banners downloaded and converted to WebP!")

