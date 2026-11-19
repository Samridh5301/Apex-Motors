---
name: Apex Precision
colors:
  surface: '#fcf8f8'
  surface-dim: '#ddd9d9'
  surface-bright: '#fcf8f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f1eded'
  surface-container-high: '#ebe7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#45474a'
  inverse-surface: '#313030'
  inverse-on-surface: '#f4f0ef'
  outline: '#75777a'
  outline-variant: '#c5c6ca'
  surface-tint: '#5d5e61'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1a1c1e'
  on-primary-container: '#838486'
  inverse-primary: '#c6c6c9'
  secondary: '#5c5f62'
  on-secondary: '#ffffff'
  secondary-container: '#dee0e4'
  on-secondary-container: '#606366'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1f1b16'
  on-tertiary-container: '#8a827c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e5'
  primary-fixed-dim: '#c6c6c9'
  on-primary-fixed: '#1a1c1e'
  on-primary-fixed-variant: '#454749'
  secondary-fixed: '#e1e2e6'
  secondary-fixed-dim: '#c5c6ca'
  on-secondary-fixed: '#191c1f'
  on-secondary-fixed-variant: '#44474a'
  tertiary-fixed: '#ebe1d9'
  tertiary-fixed-dim: '#cec5bd'
  on-tertiary-fixed: '#1f1b16'
  on-tertiary-fixed-variant: '#4c4640'
  background: '#fcf8f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 72px
    fontWeight: '800'
    lineHeight: 80px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
  stats-number:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1440px
  gutter: 24px
  margin-desktop: 64px
  margin-tablet: 32px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style

This design system embodies the concept of "Mechanical Elegance." It is tailored for a high-end automotive audience that values precision engineering, speed, and understated luxury. The visual language is deeply rooted in **Minimalism** with a **Corporate Modern** edge, emphasizing clarity and high-contrast layouts that mimic the silhouette of a luxury vehicle against a gallery backdrop.

The emotional response is one of authority and technical sophistication. By utilizing expansive whitespace and a restrained color palette, the UI directs absolute focus toward automotive imagery and performance data. The style is sharp and architectural, using clean lines and deliberate structural alignments to evoke a sense of high-performance stability.

## Colors

The palette is anchored by the tension between "Obsidian Black" and a warm "Off-White" gallery background. This high-contrast foundation ensures maximum legibility and a premium editorial feel. 

- **Primary & Secondary:** Used for deep immersive backgrounds, headers, and primary navigation to provide a grounded, heavy-duty feel.
- **Background:** A warm off-white that prevents the "clinical" coldness of pure white, providing a sophisticated canvas for photography.
- **Accent:** "Electric Blue" is used sparingly for critical path actions, interactive states, and performance data highlights, symbolizing the transition to electric mobility and high-tech precision.

## Typography

The typography strategy focuses on a hierarchy of "Power and Precision." 

- **Headlines:** Manrope provides a modern, technical geometric structure. Heavy weights and tight letter-spacing are used for large displays to create a sense of momentum and strength.
- **Body:** Inter is utilized for its exceptional readability in data-heavy specs and technical descriptions. 
- **Editorial Spacing:** Generous line heights (1.5x - 1.6x) are maintained for body copy to preserve the minimalist aesthetic and prevent visual clutter.
- **Micro-copy:** Small-scale caps with increased tracking are used for labels and categories, mimicking the badges found on vehicle exteriors.

## Layout & Spacing

The design system utilizes a **Fixed Grid** model for desktop to maintain a controlled, gallery-like presentation. 

- **Grid:** A 12-column grid system with 24px gutters. Content should be grouped in spans of 4, 6, or 12 to maintain a rhythmic, block-based layout.
- **Editorial Padding:** Sections are separated by significant vertical "air" (120px+) to allow the eye to rest and emphasize the exclusivity of the content.
- **Mobile Reflow:** On mobile, the 12-column grid collapses to a 4-column layout. Section gaps are reduced to 64px, and horizontal margins are tightened to maximize screen real estate for imagery.

## Elevation & Depth

Visual hierarchy is achieved through **Tonal Layers** and **Premium Shadows**. 

Depth is not used to create a "floating" effect but rather a "propped up" gallery effect. 
- **Surfaces:** Cards and containers sit on the #F7F7F5 background using pure white (#FFFFFF) fills to create a subtle lift.
- **Shadows:** Use extremely diffused, large-radius shadows with very low opacity (e.g., `0px 20px 40px rgba(0,0,0,0.04)`). This mimics natural ambient light in a professional showroom.
- **Borders:** Thin, 1px borders in a light neutral tone (#E2E2E0) are used for structure in high-light areas, ensuring a "technical drawing" sharpness.

## Shapes

The shape language is **Soft** but disciplined. 

- **Core Elements:** A 4px corner radius is the standard for cards, inputs, and primary buttons. This keeps the aesthetic sharp and aggressive while avoiding the harshness of raw 0px corners.
- **Interactive Elements:** Larger containers (modals, featured hero cards) can scale up to 8px (rounded-lg) to feel slightly more approachable. 
- **Strictness:** Circular elements are strictly avoided except for specialized icons or progress indicators to maintain the rectangular, architectural theme.

## Components

- **Buttons:** Primary buttons are solid #0B0D0F with white text, using the `label-caps` typography style. Hover states utilize the Electric Blue accent. Secondary buttons use a 1px #0B0D0F border.
- **Cards:** Sharp 4px radius with a white fill and a 1px subtle border. Content within cards must adhere to the 24px internal padding rule.
- **Input Fields:** Minimalist design with a bottom-border-only focus state in Electric Blue. Labels use the `label-caps` style positioned above the input.
- **Spec Chips:** Small, rectangular tags with a light grey background (#EEEEEE) used to display technical specs like "V12", "AWD", or "EV".
- **Lists:** Clean dividers using 1px horizontal lines with high-contrast text. Data points (e.g., 0-60mph) should use the `stats-number` typography for emphasis.
- **Vehicle Configuration Rails:** A specialized component—a vertical or horizontal rail of high-contrast icons representing luxury materials (Carbon Fiber, Alcantara, Brushed Steel).