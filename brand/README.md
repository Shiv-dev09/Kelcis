# Kelcis brand assets

Approved identity assets for the Kelcis website build (Phase 2).

## Logo

The mark is a "piano key" K: eleven vertical keys on a uniform 13-unit pitch
(10 wide, 3 gap). Two full-height keys form the stem, a single tall bridge
key locks the junction, and the arm keys fan outward with their centers
stepping on an exact 8-unit diagonal. The content occupies a perfect 88x88
square (6..94 on both axes) so the mark sits with even margins in any
square container.

Master geometry lives on a `0 0 100 100` viewBox — never redraw it, only
recolor or rescale the existing rects.

| File | Use |
| --- | --- |
| `logo/kelcis-mark.svg` | Inline web use — `fill="currentColor"`, inherits text color |
| `logo/kelcis-mark-black.svg` | Open mark on light surfaces (docs, letterhead) |
| `logo/kelcis-mark-white.svg` | Open mark on dark surfaces |
| `logo/kelcis-mark-square.svg` | Primary mark — white keys on black 512 square (avatars, social) |
| `logo/favicon.svg` | Favicon / app icon — tighter padding for small sizes |
| `logo/kelcis-lockup-light.svg` | Horizontal lockup, black on light |
| `logo/kelcis-lockup-dark.svg` | Horizontal lockup, white on dark |

Note: the lockup SVGs reference Space Grotesk by name and require the font
to be installed/loaded. In the website header, prefer composing
`kelcis-mark.svg` + live text (font already loaded there) for crisp
rendering and theme inheritance.

## Presentation template

`templates/Kelcis-Presentation-Template.pptx` — 10-slide master deck,
16:9 widescreen (13.33 x 7.5in). Slide order: cover, agenda, section
divider, statement, two-column content, three-column grid, stats,
process, quote, closing. Every slide carries speaker notes explaining
its intended use.

Duplicate slides rather than restyling them, and delete unused rows
outright — never leave an empty numbered slot. Cover and closing use
the website's hero gradient so decks and site read as one system.

Fonts are Arial and Cambria, not the website's Archivo/Newsreader.
Those are webfonts with no system equivalent, so a deck specifying them
would substitute unpredictably on other machines. Arial and Cambria
ship with Office everywhere and hold the same grotesque/editorial
pairing. Install Archivo and Newsreader locally if you need exact
brand match for a printed or PDF deliverable.

## Wordmark

- Font: Space Grotesk, uppercase
- Tracking: 0.3em
- Weight: 500 on light backgrounds, 300 on dark

## Color

Logo is strictly monochrome: `#0A0A0A` on light, `#FFFFFF` on dark.
Site palette (from Phase 1): Ink `#15171C`, Parchment `#F5F3EE`,
Bronze `#A9783F`, Ledger `#263449`, Stone `#B7B1A6`, Ash `#6B675F`.
Dark mode: Surface `#17191E`, Bone `#EDEAE2`, Bronze light `#C9A06B`,
Ledger light `#8CA0BC`.
