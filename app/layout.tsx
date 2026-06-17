import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { FacebookPixel } from "@/components/tracking/facebook-pixel"
import config from "@/lib/config"
import "./globals.css"

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: config.metaTitle,
  description: config.metaDescription,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const accent = config.accentColor

  return (
    <html lang="en">
      <head>
        {/* Inject brand accent color as CSS variable — used as var(--accent) throughout */}
        <style dangerouslySetInnerHTML={{
          __html: `:root { --accent: ${accent}; --primary: ${accent}; --primary-foreground: oklch(0.985 0 0); --background: ${accent}; }`
        }} />
      </head>
      <body className={`font-sans antialiased ${plusJakartaSans.className}`}>
        <FacebookPixel />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
