/**
 * Central site configuration. Update these values to personalize the portfolio.
 */
export const site = {
  name: "Peter Nguyen",
  role: "Software Engineer",
  // The address that contact-form submissions are delivered to.
  // Falls back here if CONTACT_EMAIL is not set in the environment.
  contactEmail: "peter@example.com",
  github: "https://github.com/pe-gif",
  // Drop your PDF at /public/resume.pdf (or update this path) to wire the button.
  resumeHref: "/resume.pdf",
} as const;

export type Site = typeof site;
