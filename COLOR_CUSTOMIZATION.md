# Color Customization Guide

To match the exact colors from the Wix template (https://www.wix.com/website-template/view/html/3613), follow these steps:

## Step 1: Extract Colors from Wix Template

1. Open the Wix template in your browser
2. Use browser developer tools (F12) or a color picker extension
3. Identify these key colors:
   - **Primary Color** (main brand color, usually used in headers/buttons)
   - **Secondary Color** (accent color, used for highlights)
   - **Text Colors** (headings and body text)
   - **Background Colors** (sections and cards)

## Step 2: Update Tailwind Config

Edit `tailwind.config.ts` and replace the color values in the `primary` and `accent` sections with your hex codes:

```typescript
colors: {
  primary: {
    50: '#lightest-shade',
    100: '#very-light-shade',
    // ... continue with shades
    900: '#darkest-shade',
  },
  accent: {
    // Your accent color shades
  },
}
```

## Step 3: Generate Color Shades

If you only have one color, use a tool like:
- [Tailwind Color Generator](https://www.tailwindshades.com/)
- [Coolors.co](https://coolors.co/)

Enter your hex code and generate the full color palette.

## Current Professional Color Scheme

The website currently uses:
- **Primary**: Indigo/Blue tones (#6366f1 to #1e1b4b)
- **Accent**: Amber/Gold tones (#f59e0b to #78350f)
- **Neutral**: Gray scale for text and backgrounds

## Quick Color Replacement

If you have specific hex codes from the Wix template, share them and I can update all components automatically.

Example format:
```
Primary: #1a365d
Secondary: #f6ad55
Accent: #ed8936
```
