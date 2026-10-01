# Design QA — What we build

- Source visual truth: `/Users/jithinjacob/Desktop/Screenshot 2026-10-01 at 14.05.20.png`
- Implementation: `http://localhost:3000/#services`
- Implementation screenshot: inline CUA browser capture in the task transcript (the browser integration did not expose a persistent file path)
- Viewport: 1223 × 768 browser window; approximately 1223 × 670 CSS page viewport after Chrome UI
- Source pixels: 2304 × 636
- Implementation capture pixels: 1223 × 768
- Density normalization: visual comparison at fitted display scale; no pixel-level overlay used because the request was reference-inspired rather than a 1:1 clone
- State: desktop, service section at rest; hover response also observed on the fourth card

## Full-view comparison evidence

The implementation carries over the reference's key structure: a pale section, large white rounded cards, icon tiles at the top, bold service titles, restrained body copy, generous internal spacing, and a consistent horizontal rhythm. Four cards were used instead of three because the user explicitly allowed three or four and the site's service offering groups cleanly into four entry points. The brand's violet and mist palette replaces the reference's orange accent so the section remains part of the existing DW Tech system.

The requested follow-up technology treatment is integrated beneath the cards as a logo-only row with no heading, divider, labels, or card containers.

## Focused region comparison evidence

The full browser capture keeps every service title, description, icon, card edge, and technology logo readable at once, so an additional crop was not needed. Card content anchors consistently despite different title lengths, and the logo row is visually subordinate to the service cards.

## Required fidelity surfaces

- Fonts and typography: existing Neue Montreal/Helvetica stack preserved; title and body hierarchy follows the site's established scale. No truncation or collision observed.
- Spacing and layout rhythm: four equal-height columns at desktop, consistent radii and padding, balanced gap above the immersed logo row. Responsive rules collapse to two and one columns.
- Colors and tokens: existing mist, ink, orchid, and brand colors used; contrast is clear on the light section.
- Image quality and assets: standard Lucide UI icons and Simple Icons brand marks are used; no placeholder, emoji, CSS drawing, or custom SVG approximation was introduced.
- Copy and content: four descriptions preserve the original service meaning while using new wording. Link labels remain available to assistive technology.

## Interaction and accessibility checks

- Service cards are full-card links with visible focus styling.
- Scroll reveal is staggered; card and logo hover movement is restrained.
- The existing reduced-motion preference disables nonessential motion.
- All four service routes and all five technology logos are present in the browser accessibility tree.
- The Next.js issue badge cleared after the final refresh; no server-side runtime error appeared in the preview logs.

## Findings

No actionable P0, P1, or P2 visual differences remain for the requested reference-inspired treatment.

## Comparison history

1. Initial pass: card content started at uneven vertical positions because one title wrapped to two lines. Fix: introduced a consistent content block height on desktop. Post-fix evidence: all four titles and descriptions align as a deliberate row.
2. Technology pass: the first implementation used a heading, divider, labels, and small containers. Fix: removed all four and retained only evenly spaced brand logos. Post-fix evidence: the logos now sit directly in the What we build background beneath the cards.

## Follow-up polish

- P3: the existing section eyebrow reads “WE EXCELLS.” Consider changing it to “WE EXCEL” or “OUR EXPERTISE” in a separate copy pass.

final result: passed
