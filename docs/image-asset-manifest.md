# WhyDive.org Image Asset Manifest

## Purpose

This manifest records the selected generated images, their intended use, and their public app paths.

All files are stored under:

`frontend/public/images/whydive/`

In Next.js, reference these assets from the app as:

`/images/whydive/<filename>.png`

## Selected Assets

| Use | Public path | Notes |
|---|---|---|
| Homepage hero, architectural threshold with water | `/images/whydive/hero-threshold-water-desktop.png` | Primary desktop hero candidate. Strong contemplative threshold image. |
| Homepage hero, underwater light | `/images/whydive/hero-underwater-light-desktop.png` | Secondary desktop hero or atmospheric section background. |
| Mobile hero, vertical light threshold | `/images/whydive/hero-mobile-light-threshold.png` | Mobile hero companion image. |
| Foundations banner, layered evidence sheets | `/images/whydive/foundations-layered-evidence-banner.png` | Foundations index and framework pages. |
| Foundations framework thresholds | `/images/whydive/foundations-thresholds-framework.png` | Framework overview or evidence-to-action sequence. |
| Foundations boundary/gold line square | `/images/whydive/foundations-boundary-gold-line-square.png` | Boundary system, cards, social, or article support image. |
| Essays study table banner | `/images/whydive/essays-study-table-banner.png` | Essays index and writing-home section. |
| Essays question mark square | `/images/whydive/essays-question-mark-square.png` | Essay category/social/card image. |
| Essays archive social | `/images/whydive/essays-archive-social.png` | Social card or featured essay image. |
| Whitepaper foundational document | `/images/whydive/whitepaper-foundational-document.png` | Foundational whitepaper page. |
| Whitepapers publication OG | `/images/whydive/whitepapers-og-publication.png` | Open Graph/social image or whitepapers index support. |
| Research library banner | `/images/whydive/research-library-banner.png` | Research library page. |
| Research index cards square | `/images/whydive/research-index-cards-square.png` | Research card or annotation/evidence relationship image. |
| Applications branching framework banner | `/images/whydive/applications-branching-framework-banner.png` | Applications index page. |
| Applications evidence objects square | `/images/whydive/applications-evidence-objects-square.png` | Domain applications card/support image. |
| Ecosystem constellation banner | `/images/whydive/ecosystem-constellation-banner.png` | Ecosystem page banner. |
| Ecosystem spiral map square | `/images/whydive/ecosystem-spiral-map-square.png` | Ecosystem card, diagram support, or social image. |
| Contact letter banner | `/images/whydive/contact-letter-banner.png` | Contact/legal pages. |

## Planned Documentary Space Assets

These assets should use the documentary / journalism style described in [Midjourney Image Prompt Plan](./midjourney-image-prompts.md), Prompt Family 9.

| Use | Planned public path | Notes |
|---|---|---|
| Spaces index social/banner image | `/images/whydive/spaces-documentary-table-social-v2.png` | Selected replacement. Shared table, mixed roles, evidence objects, generous negative space. |
| Educators Space banner | `/images/whydive/spaces-educators-documentary-banner.png` | Selected. Educators and adult learners examining evidence and claims. |
| Clergy and Faith Leaders Space banner | `/images/whydive/spaces-clergy-documentary-banner-v2.png` | Selected replacement. Small community discernment conversation around evidence, care, and interpretation. |
| Business Executives Space banner | `/images/whydive/spaces-business-documentary-banner.png` | Selected. Leadership team reviewing metrics, risk, customer notes, and consequences. |
| Civic and Community Leaders Space banner | `/images/whydive/spaces-civic-documentary-banner-v2.png` | Selected replacement. Public meeting around maps, reports, and shared claims. |
| Researchers and Policy Thinkers Space banner | `/images/whydive/spaces-research-policy-documentary-banner.png` | Selected. Researchers reviewing limits, evidence boundaries, and public claims. |
| AI and Technology Teams Space banner | `/images/whydive/spaces-ai-technology-documentary-banner.png` | Selected. Team auditing generated claims against source material. |

## Source Files

The selected source files came from `/Users/elvisagard/Downloads/` and were copied into the app with semantic names.

The semantic filenames are now the source of truth for app usage. Avoid referencing the original generated filenames from app code.

## Usage Guidance

- Use images sparingly.
- Prefer the hero and page banners first.
- Keep writing and page hierarchy primary.
- Do not add images to every card by default.
- Use square images only where they clarify a section or support social/card previews.
- Ensure all images have meaningful alt text when rendered in the app.
- For Spaces pages, prefer documentary images over symbolic images when the page needs to show why the framework matters in a reader's actual work.
