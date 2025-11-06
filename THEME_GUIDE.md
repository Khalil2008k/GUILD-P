# 🎨 Theme Guide - Dark + Neon Green

## Core Direction

Your palette is **dark-dominant**, with **neon green** acting as the visual spark.

🖤 **Dark Base** (dominant) + 💚 **Neon Accent** (primary) + ⚪ **Neutral text** + 🩶 **Muted secondary tones**

---

## 🎨 Color Palette

### Primary Colors

| Color | Hex | Usage |
|-------|-----|-------|
| **Dark Base** | `#121212` | Main background, dominant color |
| **Neon Green** | `#BDFF2A` | Primary accent, CTAs, highlights |
| **White/Off-white** | `#FAFAFA` | Main text, headings |
| **Muted Gray** | `#A6A6A6` | Secondary text, descriptions |

### Supporting Colors

| Color | Hex | Usage |
|-------|-----|-------|
| **Dark Gray** | `#333333` | Borders, dividers |
| **Slightly Lighter Dark** | `#1A1A1A` | Cards, elevated surfaces |
| **Medium Gray** | `#404040` | Disabled states, muted elements |
| **Light Gray** | `#E5E5E5` | Secondary text on dark |

---

## 🎯 Usage Guidelines

### 1. Background Hierarchy
```css
/* Level 1 - Base */
background: #121212

/* Level 2 - Cards/Panels */
background: #1A1A1A

/* Level 3 - Elevated */
background: #262626
```

### 2. Text Hierarchy
```css
/* Primary Text */
color: #FAFAFA

/* Secondary Text */
color: #A6A6A6

/* Muted/Disabled */
color: #666666
```

### 3. Accent Usage
```css
/* Primary Actions */
background: #BDFF2A
color: #121212

/* Hover States */
background: #A8E625

/* Focus/Active */
border: 2px solid #BDFF2A
box-shadow: 0 0 20px rgba(189, 255, 42, 0.3)
```

---

## 📐 Tailwind CSS Classes

### Backgrounds
```tsx
className="bg-[#121212]"        // Dark base
className="bg-[#1A1A1A]"        // Cards
className="bg-neon-green"       // Neon accent
className="bg-primary"          // Neon green (via CSS var)
```

### Text
```tsx
className="text-white"          // Primary text
className="text-gray-400"       // Secondary text
className="text-muted-foreground" // Muted text
className="text-primary"        // Neon green text
```

### Borders
```tsx
className="border-[#333333]"    // Dark border
className="border-primary"      // Neon green border
```

### Buttons
```tsx
// Primary Button (Neon Green)
className="bg-primary text-primary-foreground hover:bg-primary/90"

// Secondary Button (Outlined)
className="border-2 border-primary text-primary hover:bg-primary/10"

// Ghost Button
className="text-primary hover:bg-primary/10"
```

---

## 🎨 Component Examples

### Card Component
```tsx
<div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-6">
  <h3 className="text-white text-xl font-bold mb-2">Title</h3>
  <p className="text-gray-400">Description text</p>
  <button className="mt-4 bg-primary text-[#121212] px-4 py-2 rounded-lg font-semibold">
    Action
  </button>
</div>
```

### Hero Section
```tsx
<div className="bg-[#121212] min-h-screen">
  <h1 className="text-white text-6xl font-black">
    GUILD
  </h1>
  <p className="text-gray-400 text-xl">
    Secondary text
  </p>
  <span className="text-primary text-2xl font-bold">
    Neon accent text
  </span>
</div>
```

### Input Field
```tsx
<input 
  className="bg-[#1A1A1A] border border-[#333333] text-white 
             focus:border-primary focus:ring-2 focus:ring-primary/20
             px-4 py-2 rounded-lg"
/>
```

---

## 💡 Best Practices

### 1. **Balance**
- 80% dark backgrounds
- 15% white/gray text
- 5% neon green accents

### 2. **Contrast**
- Always ensure text is readable
- Use neon green sparingly for maximum impact
- White text on dark backgrounds
- Dark text on neon green backgrounds

### 3. **Hierarchy**
- Neon green = most important elements
- White = primary content
- Gray = secondary content
- Darker grays = backgrounds

### 4. **Glow Effects**
```css
/* Subtle neon glow */
box-shadow: 0 0 20px rgba(189, 255, 42, 0.3);

/* Strong neon glow */
box-shadow: 0 0 40px rgba(189, 255, 42, 0.5);

/* Text glow */
text-shadow: 0 0 10px rgba(189, 255, 42, 0.8);
```

---

## 🎭 Example Combinations

### Option 1: Subtle Accent
```tsx
<div className="bg-[#121212]">
  <h1 className="text-white">Heading</h1>
  <p className="text-gray-400">Body text</p>
  <button className="border border-primary text-primary">Click</button>
</div>
```

### Option 2: Bold Statement
```tsx
<div className="bg-[#121212]">
  <h1 className="text-primary text-6xl">GUILD</h1>
  <p className="text-white">Important message</p>
</div>
```

### Option 3: Card with Accent
```tsx
<div className="bg-[#1A1A1A] border-l-4 border-primary">
  <h2 className="text-white">Title</h2>
  <p className="text-gray-400">Description</p>
</div>
```

---

## 🚀 Quick Reference

| Element | Background | Text | Border |
|---------|-----------|------|--------|
| **Page** | `#121212` | `#FAFAFA` | - |
| **Card** | `#1A1A1A` | `#FAFAFA` | `#333333` |
| **Button Primary** | `#39FF14` | `#121212` | - |
| **Button Secondary** | `transparent` | `#39FF14` | `#39FF14` |
| **Input** | `#1A1A1A` | `#FAFAFA` | `#333333` |
| **Heading** | - | `#FAFAFA` | - |
| **Body Text** | - | `#A6A6A6` | - |
| **Accent Text** | - | `#39FF14` | - |

---

## 🎨 Gradients (Optional)

```css
/* Dark gradient */
background: linear-gradient(135deg, #121212 0%, #1A1A1A 100%);

/* Neon glow gradient */
background: linear-gradient(135deg, #BDFF2A 0%, #A8E625 100%);

/* Accent gradient */
background: linear-gradient(135deg, #121212 0%, rgba(189, 255, 42, 0.1) 100%);
```

---

## ✅ Do's and Don'ts

### ✅ Do:
- Use neon green for CTAs and key highlights
- Maintain high contrast for readability
- Use dark backgrounds consistently
- Apply glow effects to neon elements
- Use white/off-white for primary text

### ❌ Don't:
- Overuse neon green (less is more)
- Use low contrast color combinations
- Mix too many accent colors
- Forget about dark mode considerations
- Use pure black (#000000) - use #121212 instead

---

**Theme Applied to:** All new components going forward
**Last Updated:** November 2025

