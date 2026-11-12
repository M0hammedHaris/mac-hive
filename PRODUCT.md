# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Owners and operators of growing, operations-heavy small and mid-size businesses, worldwide. They
are losing leads they never follow up, burning team hours on manual onboarding, reporting, exports
and handoffs, or running the business from scattered spreadsheets, inboxes and tools. They arrive
weighing whether Machive can fix that, and the job of the site is to get them on a discovery call.

Outbound targeting may focus on narrower wedges (for example construction and field-service firms
in Southeast Asia and Hong Kong, per `.hermes/client-acquisition/01-positioning.md`), but the site
itself speaks to the broad ops-heavy SMB buyer, not to one industry.

## Product Purpose

Machive (machive.in) is a founder-led software studio that builds lead-generation websites,
dashboards and admin systems, workflow automation, business software and SaaS MVPs. The site
exists to turn qualified business owners into discovery-call conversations through the contact
form. Success is the number of qualified conversations it starts, not traffic.

## Positioning

A senior engineer who ships the whole system directly, from idea to deployment, rather than an
agency layer or a freelancer selling pages. The claim rests on production experience: years of
enterprise SaaS work and Machive's own shipped products. It sells business outcomes (captured
leads, fewer manual hours, one clear operating view), not technology for its own sake.

Machive should not read as a generic freelancer, a low-ticket web shop, a hype-driven "AI agency",
or a product studio chasing ideas without buyers.

## Operating Context

- Buyers compare Machive against freelancers and agencies, often on mobile, often from outbound
  outreach or LinkedIn.
- The conversion path is the contact form (`app/contact`, server action in `app/actions.ts`),
  framed as booking a discovery call. Form also separates new service inquiries from product
  support for existing users.
- Offers on the site today (`components/sections/PricingSection.tsx`): Lead-Generation Website,
  Workflow Automation, Dashboard / Admin System, SaaS MVP / Business Software.
- Audience is international: neutral, global-standard English.

## Capabilities and Constraints

- Delivery stack: Next.js + TypeScript for web, Flutter for mobile, Vercel hosting.
- This site: Next.js 16 App Router, Tailwind v4, Neon Postgres + Resend for inquiries.
- Performance target: 95+ PageSpeed. Mobile-first. SEO and structured data must survive every change.
- Machive's own SaaS products are proof of shipping ability, not a second product line on the site.
  Live products: BillHive (bill.machive.in), Ad Manager (ad.machive.in), SalaryMan
  (salary-man.machive.in), Mud Pottery (mud-potter.machive.in), Snapchat Organizer
  (snapchat-organizer.machive.in).
- Undecided: pricing figures shown publicly; dedicated industry landing pages.

## Brand Commitments

- Name: **Machive** (domain machive.in). Older docs say "Mac Hive"; use Machive.
- Logo: `public/logo.svg`.
- Voice: founder-led technical partner. Plain, direct, business-outcome first, no hype.
- Founder: Mohammed Haris; personal portfolio at mh.machive.in, LinkedIn
  linkedin.com/in/mohammed-haris-k. Founder face and LinkedIn may be used as trust signals.

## Evidence on Hand

- Founder track record stats (`components/sections/TrustStats.tsx`): 6+ years building production
  software, software delivered across 300+ live client environments, a provisioning automation
  cut from 3h to under 10 minutes, end-to-end delivery.
- Portfolio of own products with screenshots in `public/portfolio/`.
- Solution case examples in `components/sections/FeaturedSolutions.tsx`.
- Founder photo: confirmed usable but **not in the repo yet**; must be supplied.
- **Absent, never fabricate:** client testimonials, client logos or names, review ratings, named
  case-study clients, invented metrics.

## Product Principles

1. Every page earns a discovery call; anything that does not move a qualified buyer toward the
   contact form is a candidate to cut.
2. Lead with the buyer's operational pain and the outcome, then the method. Technology is supporting
   detail.
3. Credibility comes from real, verifiable proof only: founder track record and shipped products.
4. Sound like one senior engineer accountable for the result, not an agency or an AI hype shop.
5. Fast and clear on a phone, because that is where outbound prospects first see the site.

## Accessibility & Inclusion

WCAG 2.2 AA as the baseline for a public business site; international audience reading in a second
language, so plain English matters.
