/**
 * lib/config.ts — Single server-side env var read point.
 * Import this ONLY in server components (layout.tsx, page.tsx, API routes).
 * Never import in "use client" components — pass values as props instead.
 */
const config = {
  // Brand
  companyName:     process.env.COMPANY_NAME     ?? "Your Home Buyers",
  phoneDisplay:    process.env.PHONE_DISPLAY     ?? "(800) 000-0000",
  phoneHref:       process.env.PHONE_HREF        ?? "8000000000",
  accentColor:     process.env.ACCENT_COLOR      ?? "#2563eb",
  headerBgColor:   process.env.HEADER_BG_COLOR   ?? "#ffffff",
  logoUrl:         process.env.LOGO_URL          ?? "",

  // Owner / personalization
  ownerName:       process.env.OWNER_NAME        ?? "",
  headshotUrl:     process.env.HEADSHOT_URL      ?? "",

  // Hero
  headline:        process.env.HEADLINE          ?? "Sell Your House Fast For Cash",
  headlineAccent:  process.env.HEADLINE_ACCENT   ?? "",
  subheadline:     process.env.SUBHEADLINE       ?? "No fees. No repairs. Cash offer in 24 hours.",

  // Service areas — JSON array of {id, centerLat, centerLng, radiusMiles}. Must be
  // valid circle objects or "[]". NEVER a state-name array like ["Wisconsin"].
  serviceAreas:    process.env.SERVICE_AREAS     ?? "[]",
  // Market name for advertorial copy ("Wisconsin"); empty renders "the areas we serve".
  marketName:      process.env.MARKET_NAME       ?? "",
  smsKeyword:      process.env.SMS_KEYWORD       ?? "OFFER",

  // Trust indicators
  stat1Value:      process.env.STAT_1_VALUE      ?? "1,000+",
  stat1Label:      process.env.STAT_1_LABEL      ?? "Homes Purchased",
  stat2Value:      process.env.STAT_2_VALUE      ?? "10+",
  stat2Label:      process.env.STAT_2_LABEL      ?? "Years in Business",
  stat3Value:      process.env.STAT_3_VALUE      ?? "24 Hrs",
  stat3Label:      process.env.STAT_3_LABEL      ?? "Cash Offer",

  // SEO
  metaTitle:       process.env.META_TITLE        ?? "Sell Your House Fast For Cash",
  metaDescription: process.env.META_DESCRIPTION  ?? "Get a fair cash offer for your home in 24 hours. No fees, no repairs, no hassle.",

  // Footer
  privacyPolicyUrl: process.env.PRIVACY_POLICY_URL ?? "/privacy",
  termsUrl:         process.env.TERMS_URL           ?? "/terms",

  // Survey disqualification — comma-separated property type IDs to hard-disqualify
  disqualifiedPropertyTypes: process.env.DISQUALIFIED_PROPERTY_TYPES ?? "mobile-home,land,other",

  // Webhook (server-side only — never exposed to browser)
  webhookUrl:      process.env.WEBHOOK_URL ?? "",
} as const

export default config
export type Config = typeof config