import Image from "next/image"
import { SurveyCard } from "@/components/survey/survey-card"
import { VSLSection } from "@/components/survey/vsl-section"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import config from "@/lib/config"

export default function HomePage() {
  const stats = [
    { value: config.stat1Value, label: config.stat1Label },
    { value: config.stat2Value, label: config.stat2Label },
    { value: config.stat3Value, label: config.stat3Label },
  ]

  // Parse service areas for client-side validation
  let parsedServiceAreas: Array<{ id: string; centerLat: number; centerLng: number; radiusMiles: number }> = []
  try { parsedServiceAreas = JSON.parse(config.serviceAreas) } catch {}

  const disqualifiedPropertyTypes = config.disqualifiedPropertyTypes.split(",").map(s => s.trim()).filter(Boolean)

  return (
    <main className="relative min-h-screen bg-gray-50">
      <div className="relative z-10">
        <Header
          companyName={config.companyName}
          phoneDisplay={config.phoneDisplay}
          phoneHref={config.phoneHref}
          logoUrl={config.logoUrl}
          headerBgColor={config.headerBgColor}
        />

        <div className="mx-auto max-w-7xl px-4 py-4 md:py-6 lg:px-8">
          {/* Hero */}
          <div className="mx-auto text-center">
            <h1 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl lg:text-[3.75rem] lg:leading-[1.15] text-balance">
              {config.headline}
              {config.headlineAccent && (
                <span className="text-gray-900"> {config.headlineAccent}</span>
              )}
            </h1>
            <p className="mt-2 md:mt-3 text-base md:text-lg text-gray-600">
              {config.subheadline}
            </p>

            {/* Trust indicators — accent-colored checkmarks */}
            <div className="mt-3 md:mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 md:gap-5">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-1.5">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500/10">
                    <svg
                      className="h-3.5 w-3.5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base font-medium text-gray-700">
                    <strong>{stat.value}</strong> {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Survey Form */}
          <div className="mt-4 md:mt-6 mx-auto max-w-3xl">
            <SurveyCard
              phoneDisplay={config.phoneDisplay}
              phoneHref={config.phoneHref}
              serviceAreas={parsedServiceAreas}
              disqualifiedPropertyTypes={disqualifiedPropertyTypes}
            />
          </div>

          {/* Meet the owner — local trust (mirrors iBuyKC, individual portrait) */}
          <div className="mt-8 md:mt-12 mx-auto max-w-sm text-center">
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: config.accentColor }}>
              Meet {config.ownerName || config.companyName}
            </p>
            <h2 className="mt-1 text-xl font-bold text-gray-900 md:text-2xl text-balance">
              A local homebuyer helping homeowners sell with confidence.
            </h2>
            <Image
              src="/images/ihomebuyer_landing.png"
              alt={config.ownerName || config.companyName}
              width={800}
              height={800}
              sizes="(max-width: 768px) 100vw, 384px"
              className="mt-4 h-auto w-full rounded-2xl"
            />
          </div>

          {/* VSL (conditional on env vars) */}
          <div className="mt-6 md:mt-8 mx-auto max-w-4xl">
            <VSLSection />
          </div>
        </div>

        <Footer
          companyName={config.companyName}
          phoneDisplay={config.phoneDisplay}
          phoneHref={config.phoneHref}
          privacyPolicyUrl={config.privacyPolicyUrl}
          termsUrl={config.termsUrl}
        />
      </div>
    </main>
  )
}
