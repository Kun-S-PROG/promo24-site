#!/usr/bin/env python3
"""Generate favicon PNG and ICO from SVG using inline rendering."""
import struct, zlib, os

base_path = os.path.dirname(os.path.abspath(__file__))

# We'll generate a simple 32x32 PNG manually
# Colors: bg=#1A5276, text=white, accent=#3498DB

def create_png(width, height, pixels):
    """Create a PNG from a list of RGBA pixel rows."""
    def chunk(chunk_type, data):
        c = chunk_type + data
        return struct.pack('>I', len(data)) + c + struct.pack('>I', zlib.crc32(c) & 0xffffffff)
    
    header = b'\x89PNG\r\n\x1a\n'
    ihdr = chunk(b'IHDR', struct.pack('>IIBBBBB', width, height, 8, 6, 0, 0, 0))  # 8-bit RGBA
    
    raw = b''
    for row in pixels:
        raw += b'\x00'  # filter byte
        for r, g, b, a in row:
            raw += bytes([r, g, b, a])
    
    idat = chunk(b'IDAT', zlib.compress(raw))
    iend = chunk(b'IEND', b'')
    
    return header + ihdr + idat + iend

def generate_pixels(size):
    """Generate RGBA pixel data for favicon."""
    pixels = []
    for y in range(size):
        row = []
        for x in range(size):
            # Background rounded rect (simplified)
            bx, by = x / size, y / size
            cx, cy = 0.5, 0.5
            
            # Border radius approx
            corner_r = 0.2
            in_corner = True
            if bx < corner_r and by < corner_r:
                in_corner = ((bx - corner_r)**2 + (by - corner_r)**2) > corner_r**2
            elif bx > 1 - corner_r and by < corner_r:
                in_corner = ((bx - (1-corner_r))**2 + (by - corner_r)**2) > corner_r**2
            elif bx < corner_r and by > 1 - corner_r:
                in_corner = ((bx - corner_r)**2 + (by - (1-corner_r))**2) > corner_r**2
            elif bx > 1 - corner_r and by > 1 - corner_r:
                in_corner = ((bx - (1-corner_r))**2 + (by - (1-corner_r))**2) > corner_r**2
            else:
                in_corner = False
            
            if in_corner:
                row.append((0, 0, 0, 0))  # transparent outside
            else:
                row.append((0x1A, 0x52, 0x76, 255))  # bg color
        pixels.append(row)
    
    # P24 text (very rough approximation)
    # We'll just draw a simplified "P" and "2" and "4" as blocks
    for y in range(size):
        for x in range(size):
            if pixels[y][x][3] == 0:
                continue
            nx, ny = x / size, y / size
            
            is_white = False
            
            # P letter (left, roughly 0.1-0.35 of width)
            if 0.1 <= nx <= 0.30 and 0.25 <= ny <= 0.85:
                # Vertical bar
                if 0.10 <= nx <= 0.18:
                    is_white = True
                # Top horizontal bar  
                if 0.10 <= nx <= 0.30 and 0.25 <= ny <= 0.33:
                    is_white = True
                # Middle horizontal bar
                if 0.10 <= nx <= 0.30 and 0.50 <= ny <= 0.58:
                    is_white = True
                # Right vertical (top half)
                if 0.22 <= nx <= 0.30 and 0.25 <= ny <= 0.58:
                    is_white = True
            
            # 2 letter (middle, roughly 0.35-0.60)
            if 0.35 <= nx <= 0.58 and 0.25 <= ny <= 0.85:
                # Top bar
                if 0.35 <= nx <= 0.58 and 0.25 <= ny <= 0.33:
                    is_white = True
                # Right bar (top to middle)
                if 0.50 <= nx <= 0.58 and 0.25 <= ny <= 0.58:
                    is_white = True
                # Middle bar
                if 0.35 <= nx <= 0.58 and 0.50 <= ny <= 0.58:
                    is_white = True
                # Left bar (middle to bottom)
                if 0.35 <= nx <= 0.42 and 0.50 <= ny <= 0.85:
                    is_white = True
                # Bottom bar
                if 0.35 <= nx <= 0.58 and 0.77 <= ny <= 0.85:
                    is_white = True
            
            # 4 letter (right, roughly 0.62-0.88)
            if 0.62 <= nx <= 0.88 and 0.25 <= ny <= 0.85:
                # Left bar (top to middle)
                if 0.62 <= nx <= 0.70 and 0.25 <= ny <= 0.58:
                    is_white = True
                # Middle horizontal bar
                if 0.62 <= nx <= 0.88 and 0.42 <= ny <= 0.50:
                    is_white = True
                # Right vertical bar
                if 0.80 <= nx <= 0.88 and 0.25 <= ny <= 0.85:
                    is_white = True
            
            if is_white:
                pixels[y][x] = (255, 255, 255, 255)
            
            # Small accent dots
            if size >= 32:
                dot_positions = [(4, 28, 3), (28, 4, 3), (4, 3, 2), (28, 27, 2)]
                dx, dy = int(nx*size), int(ny*size)
                for px, py, pr in dot_positions:
                    if (dx - px)**2 + (dy - py)**2 <= pr**2:
                        r_dist = ((dx - px)**2 + (dy - py)**2) ** 0.5
                        if r_dist <= pr * 0.5:
                            pixels[dy][dx] = (0x34, 0x98, 0xDB, 255)
                        elif 0.3 <= nx <= 0.7 and 0.3 <= ny <= 0.7:
                            pass  # Don't override P24 text
    
    return pixels

# Generate 32x32 PNG
pixels_32 = generate_pixels(32)
png_32 = create_png(32, 32, pixels_32)

# Save as .png
png_path = os.path.join(base_path, 'favicon.png')
with open(png_path, 'wb') as f:
    f.write(png_32)

# Save multiple sizes in .ico
# ICO format: header (6 bytes) + directory entries + image data

def create_ico(sizes=[16, 32, 48]):
    """Create ICO file with multiple sizes."""
    num_images = len(sizes)
    header = struct.pack('<HHH', 0, 1, num_images)  # reserved, type=1(ico), count
    
    entries = []
    image_datas = []
    offset = 6 + num_images * 16
    
    for size in sizes:
        pixels = generate_pixels(size)
        png_data = create_png(size, size, pixels)
        image_datas.append(png_data)
        
        # ICO directory entry
        # bpp=32, color planes=1
        entries.append(struct.pack('<BBBBHHII',
            size if size < 256 else 0,
            size if size < 256 else 0,
            0,  # color palette
            0,  # reserved
            1,  # color planes
            32, # bits per pixel
            len(png_data),
            offset
        ))
        offset += len(png_data)
    
    ico_data = header + b''.join(entries) + b''.join(image_datas)
    return ico_data

ico_path = os.path.join(base_path, 'favicon.ico')
ico_data = create_ico([16, 32, 48])
with open(ico_path, 'wb') as f:
    f.write(ico_data)

# Also generate a larger apple-touch-icon
pixels_180 = generate_pixels(180)
png_180 = create_png(180, 180, pixels_180)
apple_path = os.path.join(base_path, 'apple-touch-icon.png')
with open(apple_path, 'wb') as f:
    f.write(png_180)

print(f"✅ Generated favicon.svg (already exists)")
print(f"✅ Generated favicon.ico ({len(ico_data)} bytes, 16/32/48 multi-size)")
print(f"✅ Generated favicon.png (32x32, {len(png_32)} bytes)")
print(f"✅ Generated apple-touch-icon.png (180x180, {len(png_180)} bytes)")
