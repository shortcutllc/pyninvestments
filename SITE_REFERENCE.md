# Pyn Investments — Squarespace Site Reference

Captured from Squarespace editor (emu-piccolo-5gwb.squarespace.com) on March 2026.
Site subscription expired, so only editor preview was accessible.

---

## Design Language
- **Background:** Clean white
- **Typography:** Serif font for "pyn" logo and headings, clean sans-serif for body
- **Nav style:** Horizontal top-right nav with underline on active page
- **Layout:** Photography-forward, generous whitespace, max-width centered content
- **Accent color:** Warm peach/salmon for CTA buttons
- **Footer:** Dark teal overlay on historic building photo for "Let's Work Together" CTA section
- **Overall feel:** Minimal, sophisticated, understated wealth — not flashy

## Navigation
- Work (home page)
- About
- Our Team
- Press
- Contact

## Logo
- "pyn" in lowercase serif/custom font, top-left

---

## Page: Home (Work)

### Hero Section
- **Tagline:** "Pyn Investments is a family run investment firm focused on real estate and early staged companies."
- **Image:** Full-width photo of the Lower Pyne Building (Tudor-style, flower boxes, Hamilton Jewelers signage, green awnings)

### About Pyn Section
- **Heading:** "About Pyn"
- **Layout:** Text on left (~60%), David Newton headshot on right (~40%)
- **Copy:** "Founded by David Newton, Pyn Investments is a family-operated investment office located in Princeton, NJ. Since acquiring the iconic Lower Pyne Building in 1983, David Newton has directed and financed transformative projects that have reshaped urban landscapes and improved community life in the greater Princeton area. Our focus is on acquiring, developing, and managing a varied portfolio of residential, retail, and commercial properties, as well as investing in early-stage companies that are shaping the future of work and living."

### Current Investments Section
- **Heading:** "Current Investments"
- **Layout:** 2-column grid of investment cards
- **Each card:** Large photo + property/company name below

**Investments (in order):**
1. **Lower Pyne Building** — Tudor-style building, Nassau St, Princeton (Hamilton Jewelers, green awnings)
2. **Princeton Life Sciences Building** — Brick building with curved entrance, "kindbody" signage
3. **The Gillespie Building** — Modern commercial/office building with landscaping
4. **195 Nassau St** — Blue/green painted wood-frame mixed-use building, "KUMON" signage visible
5. **Penns Neck Plaza** — Aerial/drone shot of 6-acre development site, road intersection
6. **Vivvi** — Colorful window display with "vivvi" branding, "space to wiggle", "space to play"
7. **Shortcut** — Barber/grooming scene, man getting haircut, Shortcut branding with red logo

---

## Page: About

### Layout
- **Heading:** "About" (large, left-aligned)
- **Image:** Historic black & white photo of Lower Pyne Building (left side, ~40%)
- **Text:** Right side (~60%), two paragraphs

### Copy
**Paragraph 1:** "Founded by David Newton, Pyn Investments is deeply rooted in a family legacy that began long before its establishment in Princeton, NJ. The pivotal acquisition of the iconic Lower Pyne Building in 1983 marked the beginning of the firm's transformative impact on the greater Princeton area. This family-operated investment office, drawing on a rich heritage of real estate development, focuses on developing and managing a diverse portfolio of residential, retail, and commercial properties."

**Paragraph 2:** "The story of Pyn Investments is intertwined with the journey of David Newton and his father, Gerald Newton, from London to Princeton. Gerald, who founded and ran the renowned real estate company Country Newtown in England, instilled in David a profound appreciation for real estate development. Growing up in this environment, David developed a deep affection for the architectural and community values that would later define his work in Princeton."

**Paragraph 3:** "After completing his MBA at Wharton, David chose to remain in the United States, driven by a vision to replicate his family's legacy in a new context. The preservation and revitalization of Lower Pyne, a project that honored the historical and architectural significance of Princeton, reflected this vision. Under David's leadership, Pyn Investments has become synonymous with community-focused development, revitalizing key properties throughout Mercer County and beyond."

---

## Page: Our Team

### Layout
- 2-column grid
- Each: Large portrait photo + name + bio below

### Team Members
1. **David Newton** — Professional headshot, dark suit, arms crossed, outdoor Princeton backdrop
   - Bio: [PLACEHOLDER — needs real bio]
2. **Ben Newton** — Professional headshot, burgundy blazer, white shirt
   - Bio: [PLACEHOLDER — needs real bio]

*Note: Will Newton not shown on Squarespace version — may want to add.*

---

## Page: Press
- Could not access (site expired)
- Need content from Will

---

## Page: Contact
- Could not access full page (site expired)
- See footer section below for contact info

---

## Footer / CTA Section

### "Let's Work Together" CTA
- **Background:** Historic black & white Lower Pyne photo with dark teal overlay
- **Heading:** "Let's Work Together" (white, italic serif)
- **Button:** "Contact Us" (peach/salmon background, dark text)
- **Small text:** "Collection of the Historical Society of Princeton"

### Footer
- **Company:** Pyn Investments
- **Address:** 92 Nassau St, Princeton, NJ 08540
- **Phone:** (609) 575-0340
- **Email:** contact@pyninvestments.com
- **Icon:** Small line illustration of the Lower Pyne Building

---

## Protected Dashboard (New Feature)

Not on original Squarespace site. To be built new:
- `/login` — Supabase email/password auth (invite-only)
- `/dashboard` — Hosts the Lower Pyne financial analysis
  - Port from calculator6 repo: `src/components/LowerPyneDashboard.tsx`
  - All 5 tabs: Analysis, Projections, Pyn, Housing, Personal
- Supabase project: use existing or create new
