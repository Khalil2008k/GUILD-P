# Creating Custom Spline Scene with Your Colors

## 🎨 How to Create a Custom Colored 3D Scene

Since the robot is a pre-built Spline scene, you need to create your own to fully control colors.

---

## 📝 Step-by-Step Guide

### **1. Go to Spline**
```
https://spline.design/
```

### **2. Create a Free Account**
- Sign up with email or Google
- It's free for basic use

### **3. Create New Project**
- Click "New File"
- You'll get a blank 3D canvas

### **4. Add 3D Objects**

**Simple Objects:**
- Cube, Sphere, Cylinder, Torus
- Text 3D
- Shapes and primitives

**Or Import:**
- Import .obj, .gltf files
- Use Spline's asset library

### **5. Apply Your Theme Colors**

**Select object → Material panel:**

```
Base Color: #BDFF2A (your neon green)
Metalness: 0.5
Roughness: 0.3
Emissive: #BDFF2A (for glow effect)
```

**For multiple objects:**
- Main object: Neon green (#BDFF2A)
- Accents: Black (#000000)
- Background: Dark gray or transparent

### **6. Add Lighting**

**Recommended setup:**
- Directional Light (white, intensity 1.2)
- Ambient Light (soft, intensity 0.5)
- Point Light near object (neon green, intensity 0.8)

### **7. Add Interactivity**

**Click object → Events:**
- On Mouse Enter: Scale up
- On Mouse Down: Rotate
- On Mouse Leave: Reset

### **8. Set Background**

**Environment panel:**
- Color: Black (#000000)
- Or: Transparent (use CSS background)

### **9. Export Scene**

**File → Export → Code:**
- Choose "React / Next.js"
- Copy the scene URL
- It looks like: `https://prod.spline.design/YOUR_ID/scene.splinecode`

### **10. Use in Your Project**

Replace the URL in your component:

```tsx
const YOUR_SCENE = "https://prod.spline.design/YOUR_ID/scene.splinecode";

<InteractiveRobotSpline scene={YOUR_SCENE} />
```

---

## 🎨 Theme Color Recommendations

### **Option 1: Neon Green Focus**
```
Primary: #BDFF2A (neon green)
Secondary: #000000 (black)
Background: #0A0A0A (dark)
Accent: #FFFFFF (white highlights)
```

### **Option 2: Dark with Green Glow**
```
Object: #1A1A1A (dark gray)
Emissive: #BDFF2A (green glow)
Background: #000000 (pure black)
Highlights: #BDFF2A (neon edges)
```

### **Option 3: Bold Contrast**
```
Main object: #BDFF2A (bright green)
Details: #000000 (black)
Background: Transparent (use CSS)
Lighting: White with green tint
```

---

## 💡 Quick 3D Object Ideas

### **Simple Shapes (5 minutes):**
1. **Floating Cube**
   - Neon green cube
   - Slow rotation
   - Hover to scale

2. **Glowing Sphere**
   - Black sphere
   - Neon green emissive
   - Pulsing animation

3. **3D Logo**
   - Your logo in 3D text
   - Neon green material
   - Interactive rotation

### **Medium Complexity (15 minutes):**
1. **Abstract Shape**
   - Combine multiple primitives
   - Different green shades
   - Animated rotation

2. **Geometric Pattern**
   - Grid of cubes
   - Staggered animation
   - Color transitions

3. **Tech Object**
   - Stylized device/tech
   - Neon outlines
   - Interactive parts

---

## 🚀 Alternative: Use Free 3D Models

### **1. Find Free Models**
Sites with free models:
- Sketchfab (filter: downloadable, .gltf)
- CGTrader (free section)
- TurboSquid (free models)
- Poly Pizza

### **2. Import to Spline**
- Download .gltf or .obj file
- Drag into Spline canvas
- Apply your colors in Material panel

### **3. Customize**
- Change all materials to your theme
- Add lighting
- Add interactions
- Export

---

## 🎯 Recommended First Project

**Create a simple floating logo/icon:**

1. Import SVG logo or create text
2. Convert to 3D (Extrude: 20px)
3. Material:
   - Color: #BDFF2A
   - Metalness: 0.6
   - Roughness: 0.2
   - Emissive: #BDFF2A (intensity: 0.3)
4. Add rotation animation (Y-axis, 360°, 10s)
5. Add hover scale (1.0 → 1.1)
6. Background: Transparent
7. Export and use!

**Time: ~10 minutes**

---

## ⚡ Pro Tips

### **Performance:**
- Keep polygon count under 50k
- Use simple materials
- Optimize lighting (max 3 lights)
- Test on mobile devices

### **Aesthetics:**
- Less is more (simple shapes work best)
- Use emissive for glow effects
- Add subtle animations
- Match your website's style

### **Interactivity:**
- Don't overdo it (1-2 interactions max)
- Keep animations smooth (ease curves)
- Provide visual feedback
- Test on different devices

---

## 📊 Spline Free vs Pro

### **Free Plan Includes:**
- ✅ Unlimited projects
- ✅ All 3D tools
- ✅ Export to web
- ✅ Basic interactions
- ✅ Asset library
- ❌ Team collaboration
- ❌ Custom domains

**Free plan is enough for most use cases!**

---

## 🔗 Helpful Resources

- **Spline Docs**: https://docs.spline.design/
- **Spline YouTube**: Tutorials and examples
- **Spline Community**: https://spline.community/
- **Free 3D Models**: https://sketchfab.com/

---

## 💡 Quick Start Template

If you want to skip Spline and just have a 3D effect:

I can create a **pure CSS/Three.js** alternative with your exact colors that doesn't require external scenes. Would you like that instead?

---

**Creating your own scene gives you 100% color control!** 🎨

