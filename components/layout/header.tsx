import { Phone } from "lucide-react"
import Image from "next/image"

interface HeaderProps {
  companyName: string
  phoneDisplay: string
  phoneHref: string
  logoUrl: string
  headerBgColor?: string
}

// When LOGO_HEIGHT_PX is set the logo renders as a wide banner (height fixed,
// width auto). Otherwise the logo renders as an enlarged wordmark. The
// company-name text is not shown — the logo carries the brand.
const LOGO_HEIGHT_PX = Number(process.env.LOGO_HEIGHT_PX || 0)
const isBannerLogo = LOGO_HEIGHT_PX > 0

export function Header({ companyName, phoneDisplay, phoneHref, logoUrl, headerBgColor = "#ffffff" }: HeaderProps) {
  return (
    <header className="w-full shadow-sm" style={{ backgroundColor: headerBgColor }}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo + Company Name */}
        <div className="flex items-center gap-3">
          {logoUrl && (
            isBannerLogo ? (
              <Image
                src={logoUrl}
                alt={companyName}
                width={Math.round(LOGO_HEIGHT_PX * 4)}
                height={LOGO_HEIGHT_PX}
                className="flex-shrink-0 object-contain w-auto"
                style={{ height: `${LOGO_HEIGHT_PX}px` }}
                unoptimized
              />
            ) : (
              // Wide wordmark logo: fix the height and let width auto so it is
              // not squished into a square. Sits on the dark header bar.
              <Image
                src={logoUrl}
                alt={companyName}
                width={3751}
                height={978}
                className="h-12 md:h-16 w-auto flex-shrink-0 object-contain"
                unoptimized
              />
            )
          )}
        </div>

        {/* Phone CTA */}
        <a
          href={`tel:${phoneHref}`}
          className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: "var(--accent)" }}
        >
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">{phoneDisplay}</span>
          <span className="sm:hidden">Call Now</span>
        </a>
      </div>
    </header>
  )
}
