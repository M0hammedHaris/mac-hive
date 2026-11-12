// One list feeds both the desktop Navbar and the MobileNav, so the two can
// never drift apart. Every "/#anchor" must match an id on the home page:
//   #services -> OfferSection, #work -> ProofSection, #about -> WorkingTogether.
// /portfolio is not listed: it shows the same products as #work. The home
// ProofSection links to it after its product list, so the page stays reachable.
export const navLinks = [
    { label: "Services", href: "/#services" },
    { label: "Shipped work", href: "/#work" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/contact" },
] as const;

export const navCta = {
    label: "Request a Discovery Call",
    href: "/contact",
} as const;
