---
name: Machive
description: Founder-led software studio; the site reads as one engineer's measured work sheet.
colors:
  pad: "#e7efe0"
  pad-deep: "#dde8d5"
  pad-soft: "#d5e2cc"
  rule: "#9db39a"
  ink: "#14231b"
  ink-soft: "#3f5446"
  pencil: "#b42318"
typography:
  display:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "5.5rem"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 80"
  display-phone:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "2.5rem"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 80"
  headline:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 85"
  title:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.4
  body:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.45
  figure:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "1.875rem"
    fontWeight: 600
    lineHeight: 1.2
    fontFeature: "'tnum' 1"
  name:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "3rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 80"
  wordmark:
    fontFamily: "Alfa Slab One, Georgia, serif"
    fontSize: "1.25rem"
    fontWeight: 400
rounded:
  none: "0px"
spacing:
  cell: "24px"
  cell-2: "48px"
  cell-3: "72px"
  cell-4: "96px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.pad}"
    typography: "{typography.title}"
    rounded: "{rounded.none}"
    padding: "0 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.pencil}"
    textColor: "{colors.pad}"
  button-on-ink:
    backgroundColor: "{colors.pad}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 24px"
    height: "48px"
  button-on-ink-hover:
    backgroundColor: "{colors.pencil}"
    textColor: "{colors.pad}"
  text-link:
    textColor: "{colors.ink}"
    height: "48px"
  ruled-row:
    backgroundColor: "{colors.pad}"
    textColor: "{colors.ink-soft}"
    padding: "24px 0"
  band:
    backgroundColor: "{colors.pad-deep}"
    textColor: "{colors.ink}"
    padding: "96px 80px"
  band-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.pad}"
    padding: "96px 80px"
---

# Design System: Machive

## Overview

**Creative North Star: "The Time-Study Sheet"**

The site is written the way an engineer fills in a computation pad: pale green paper, graphite-green ink, ruled lines, measured figures. Content sits in rows on rules, never in cards. The page proves things by showing measurements (3 h 00 min against < 10 min) and live products, not by decorating claims.

Density is moderate and even. Sections alternate between the plain pad and a slightly deeper pad band, each opened by a 1px ink rule, so the scroll reads as sheets in one pad. The one strong colour, red pencil, is kept for measured results and for the hover state of actions; it is never a fill for whole regions.

The look rejects the generic agency template it replaced: kicker label over heading, pastel icon tiles in equal card grids, gradient glows, emoji as icons.

**Key Characteristics:**
- Pale green pad ground across the whole surface; one ink-dark closing band.
- Rows on 1px rules instead of cards; square corners everywhere.
- Archivo, semi-condensed and bold for headings; mono only for figures.
- Red pencil reserved for measured results and action hover.
- Spacing on a 24px cell (24, 48, 72, 96).

## Colors

A committed single-hue world: tinted greens from paper to ink, plus one red pencil.

### Primary
- **Graphite Ink** (ink): all headings, primary buttons, the 1px section-opening rules, the "before" bar, and the closing band ground.

### Secondary
- **Red Pencil** (pencil): the measured "after" figure and bar, the hover fill of primary buttons, focus outlines, text selection. 5.6:1 on the pad.

### Neutral
- **Computation Pad** (pad): page ground, nav and footer ground, text on ink.
- **Deep Pad** (pad-deep): alternate section bands (proof, working together).
- **Soft Pad** (pad-soft): secondary text on the ink band (about 12:1 there).
- **Faded Ink** (ink-soft): body copy, captions, nav links (6.9:1 on the pad).
- **Pencil Rule** (rule): 1px row dividers, link underlines at rest, scrollbar thumb. Non-text only (1.9:1).

### Named Rules
**The One Pencil Rule.** Red pencil marks a measured result or an action under the pointer. It never fills a section, a badge or a decorative shape.

**The Ink Opens the Sheet Rule.** Every section group starts on a 1px ink rule; rows inside it are separated by 1px pencil rules. Two weights of line, no more.

## Typography

**Body and heading font:** Archivo (variable weight and width, via next/font/google)
**Figure font:** JetBrains Mono (400, 600), only for measurements, prices, counts and hostnames
**Wordmark:** Alfa Slab One (single 400 weight), only for the "Machive" name in nav and footer

**Character:** a plain, slightly condensed grotesque that reads like a well-set technical document; numbers set in a mono so they look measured, not marketed.

### Hierarchy
- **Display** (700, 40px phone / 60px tablet / 88px desktop, 1.02, width 80%): the hero h1 only, at most 3 lines at 375px.
- **Headline** (700, 30px phone / 36px desktop, 1.25, width 85%): section h2s; the closing band h2 grows to 48px on desktop.
- **Name** (700, 36px phone / 48px from 768px, 1, width 80%): the founder's name in the About title block, one line, set as a paragraph. The only use besides the hero h1 of the condensed bold at this size.
- **Title** (600, 20px, up to 24px for offer names): row headings, FAQ questions (18px), product names.
- **Body** (400, 18px lead paragraphs, 16px row text, 1.625): max measure about 36 to 42rem.
- **Label** (400, 14px): captions, "from", "Before / After", step descriptions.
- **Figure** (mono 600, 24 to 30px, tabular numerals): times, years, counts, prices.

### Named Rules
**The Real Weight Rule.** Only request weights a face ships: Archivo 400 to 900, JetBrains Mono 400 and 600, Alfa Slab One 400. Never `font-bold` on the wordmark.

**The Mono Means Measured Rule.** Mono is for figures and hostnames. Never for headings, labels or decoration.

## Layout

Full-width sections, content held to 1440px with 24px side padding on phones and 80px from 1024px. A 12-column grid from 1024px: section heading on the left 4 to 5 columns, rows on the right 7 to 8 columns; the offer rows split 4/4/4 (name and price, what it fixes, example). On phones everything stacks in one column in reading order.

Spacing uses a 24px cell: 24px inside groups, 48px between a group's parts, 72px (phone) or 96px (from 768px) section padding. Half a cell (12px) is allowed only inside compact data rows (the time-study rows, the founder facts); text stacks use 4 to 8px. Anchor links stop 80px from the top, the height of the space reserved for the fixed header. Text-wrap balance on headings and pretty on paragraphs keeps last lines from going to one word.

The hero sets the h1 across up to 11 columns, then the lead paragraph and actions in 6, then the time-study figure across the full width so the 3-hour bar spans the page.

## Elevation & Depth

Flat. No shadows, blur or glass. Depth comes from tone (pad, deep pad, ink band) and from the two line weights.

### Named Rules
**The Flat Paper Rule.** Surfaces never lift. State shows as colour (pencil fill, underline darkening), not as shadow or movement.

## Shapes

Square corners throughout (0px): buttons, image frames, bands. Image frames are a 1px ink border around a square crop. The only marks besides rules are the step ticks on the process line: 12px by 1px ink strokes.

## Components

### Buttons
- **Shape:** square (0px), at least 48px tall, 24px side padding, 16px Archivo 600, trailing 16px arrow icon.
- **Primary:** ink fill with pad text; one label site-wide on the home page: "Request a Discovery Call", always to /contact.
- **Hover / Active / Focus:** fill turns red pencil on hover and on press (so touch gets the same feedback); focus is a 2px pencil outline 3px off the edge (pad on the ink band).
- **On ink:** pad fill with ink text, same hover.

### Text links
- **Style:** ink text with a 1px pencil-rule underline at 0.2em offset; the underline darkens to ink on hover. Secondary actions ("See what I have shipped", LinkedIn) use this instead of a second button.

### Ruled rows
- **Style:** grid rows separated by 1px pencil rules under a 1px ink top rule; 24px vertical padding; title on the left, text on the right from 768px. Used for problems, offers, FAQ and the proof figures.

### Navigation
- **Style:** solid pad strip with a 1px pencil rule below; Archivo 600 14px faded-ink links that turn ink on hover; the primary button at the end. The desktop row shows from 1024px; below that a 48px menu button opens a pad panel with 18px ink links (Escape closes it). Footer links follow the same 48px target, in a left-aligned column below 1024px.

### Time-study figure (signature)
- A captioned two-row measurement: label, a solid bar whose length is proportional to the time (180 minutes full width, 10 minutes at 5.6%), and the figure in mono. "Before" is ink, "after" is red pencil. On load the long bar measures out over 1.4s with an exponential ease-out and the short bar lands after it in 0.24s; with reduced motion both are static.

### Product figure
- A real product image in a square 1px ink frame, then name (Title), one line of what it does (Label), and the live hostname as a mono 14px text link (44px tall target, may wrap after a dot or hyphen in the two-column phone grid). The first product spans two columns and two rows on desktop.

### FAQ disclosure
- Ruled rows whose question is a full-width button (18px Archivo 600, chevron on the right); the answer is a hidden region linked by aria-controls.

## Do's and Don'ts

### Do:
- **Do** put content in rows on rules; let the 1px ink rule open each section.
- **Do** show proof as a measurement or a live product with its URL.
- **Do** keep red pencil (#b42318) for measured results, hover and focus.
- **Do** keep every space on the 24px cell (24, 48, 72, 96).
- **Do** set figures in JetBrains Mono with tabular numerals.
- **Do** keep every link and button at least 44px tall (48px for buttons), and turn motion off under reduced motion, including smooth scrolling.

### Don't:
- **Don't** add a small uppercase label above a heading.
- **Don't** use icon tiles, card grids, gradient text, glows, glass or shadows.
- **Don't** use emoji as icons.
- **Don't** round corners.
- **Don't** request a weight a face does not ship (the wordmark is never bold).
- **Don't** draw a decorative grid over the pad; the detector flags it and the rows already carry the sheet.
