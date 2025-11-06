# 🎨 Splash Page Documentation

## Overview

A stunning animated splash page that welcomes users before entering the presentation. Features a beautiful shader animation background with interactive entrance.

---

## ✨ Features

- **Shader Animation Background** - Dynamic, colorful animated background using Three.js
- **Smooth Transitions** - Framer Motion animations for text and elements
- **Interactive Entry** - Press Enter to begin the presentation
- **Responsive Design** - Works on all screen sizes
- **Arabic Typography** - Full RTL support with beautiful Arabic fonts

---

## 🎮 User Flow

```
1. User visits site (/)
   ↓
2. Auto-redirects to /splash
   ↓
3. Splash page loads with shader animation
   ↓
4. Title and content fade in
   ↓
5. "Press Enter" prompt appears
   ↓
6. User presses Enter
   ↓
7. Navigates to /slides/1 (first presentation slide)
```

---

## 📁 File Structure

```
components/
└── ui/
    └── shader-animation.tsx    ← Shader animation component

app/
├── page.tsx                    ← Redirects to /splash
├── splash/
│   └── page.tsx               ← Splash page with shader background
└── slides/
    └── ...                     ← Presentation slides
```

---

## 🎯 Component Details

### ShaderAnimation Component

**Location:** `components/ui/shader-animation.tsx`

**Purpose:** Renders an animated shader background using Three.js

**Features:**
- Full-screen canvas
- Dynamic color animation
- Responsive to window resize
- Automatic cleanup on unmount

**Usage:**
```tsx
import { ShaderAnimation } from '@/components/ui/shader-animation'

<ShaderAnimation />
```

---

### Splash Page

**Location:** `app/splash/page.tsx`

**Features:**
- Shader animation background
- Animated title and subtitle
- Interactive Enter prompt
- Smooth navigation to first slide

**Key Elements:**
- Title: "عرض تقديمي"
- Subtitle: "احترافي ومتحرك"
- Description: "تجربة عرض تقديمي فريدة بتأثيرات سينمائية"
- Enter prompt with pulsing animation

---

## ⌨️ Keyboard Controls

| Key | Action |
|-----|--------|
| **Enter** | Navigate to first slide (/slides/1) |

---

## 🎨 Customization

### Change Background Animation

Edit `components/ui/shader-animation.tsx`:

```tsx
// Modify the fragment shader for different effects
const fragmentShader = `
  // Your custom shader code here
`
```

### Change Text Content

Edit `app/splash/page.tsx`:

```tsx
<h1 className="text-7xl md:text-9xl font-black text-white mb-6">
  Your Title
</h1>

<h2 className="text-4xl md:text-6xl font-bold text-blue-300">
  Your Subtitle
</h2>
```

### Change Animation Timing

```tsx
// Delay before showing Enter prompt
setTimeout(() => {
  setShowPrompt(true)
}, 1000) // Change this value (in milliseconds)
```

### Change Colors

```tsx
// Title color
className="text-white"

// Subtitle color  
className="text-blue-300"

// Description color
className="text-gray-300"

// Enter button background
className="bg-white/10"
```

---

## 🔧 Technical Details

### Dependencies Used

- **Three.js** - 3D shader rendering
- **Framer Motion** - Smooth animations
- **Lucide React** - Sparkles icon
- **Next.js Router** - Navigation

### Performance

- **Optimized rendering** - RAF-based animation loop
- **Proper cleanup** - No memory leaks
- **Responsive** - Adapts to window resize
- **Hardware accelerated** - Uses WebGL

---

## 🎭 Animation Timeline

```
0.0s  → Page loads
0.3s  → Title fades in from below
0.3s+ → Sparkles icon animates continuously
1.0s  → Enter prompt appears
1.0s+ → Enter prompt pulses
2.0s  → Bottom hint fades in
```

---

## 📱 Responsive Behavior

### Desktop (>768px)
- Text size: 9xl (144px)
- Icon size: 80px
- Full viewport height

### Mobile (<768px)
- Text size: 7xl (72px)
- Icon size: 80px
- Adjusted spacing

---

## 🚀 Skip Splash Page (Optional)

If you want to skip the splash page and go directly to slides:

**Edit `app/page.tsx`:**

```tsx
useEffect(() => {
  router.push('/slides/1')  // Instead of '/splash'
}, [router])
```

---

## 🎨 Shader Animation Details

### What it Does

The shader creates a dynamic, animated pattern with:
- Concentric circles
- Rainbow-like colors
- Smooth transitions
- Continuous animation

### How it Works

1. **Vertex Shader** - Positions the full-screen quad
2. **Fragment Shader** - Calculates color for each pixel
3. **Uniforms** - Pass time and resolution to shaders
4. **Animation Loop** - Updates time uniform continuously

### Customization

Change these values in the fragment shader:

```glsl
// Animation speed
float t = time*0.05;  // Lower = slower, Higher = faster

// Line thickness
float lineWidth = 0.002;  // Lower = thinner, Higher = thicker

// Pattern density
for(int i=0; i < 5; i++)  // Change 5 to increase/decrease circles
```

---

## 🎯 User Experience

### First Impression
- Immediate visual impact with shader animation
- Professional and modern appearance
- Clear call-to-action

### Interaction
- Simple and intuitive (Press Enter)
- Visual feedback (pulsing animation)
- Smooth transition to presentation

---

## ✅ Testing Checklist

- [ ] Splash page loads correctly
- [ ] Shader animation renders smoothly
- [ ] Title and text appear with animations
- [ ] Enter prompt is visible
- [ ] Pressing Enter navigates to /slides/1
- [ ] Works on desktop browsers
- [ ] Works on mobile devices
- [ ] No console errors
- [ ] Proper cleanup on navigation

---

## 🔄 Navigation Flow

```
User Journey:
┌─────────────┐
│   / (root)  │
└─────┬───────┘
      │ Auto-redirect
      ▼
┌─────────────┐
│   /splash   │ ← Shader Animation + Enter Prompt
└─────┬───────┘
      │ Press Enter
      ▼
┌─────────────┐
│  /slides/1  │ ← First Presentation Slide
└─────┬───────┘
      │ Navigation
      ▼
┌─────────────┐
│ /slides/2-10│ ← Other Slides
└─────────────┘
```

---

## 💡 Tips

1. **Preload Assets** - The shader compiles on page load
2. **Performance** - Tested on various devices
3. **Fallback** - If WebGL fails, shows black background
4. **Accessibility** - Clear instructions in multiple languages

---

## 🎉 Result

Users get a **cinematic entrance** to your presentation with:
- ✨ Eye-catching visuals
- 🎨 Professional design
- ⚡ Smooth performance
- 🎯 Clear call-to-action

**Perfect first impression for your audience!** 🚀

---

**Created with:** Next.js 14 + Three.js + Framer Motion + Tailwind CSS

