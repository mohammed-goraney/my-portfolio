import { useEffect } from 'react'
import { Hero, Journey, Courses, Projects, Skills, SocialProof, Contact, PixelStatement } from '@components/sections'
import { Navigation } from '@shared/Navigation'
import { Footer } from '@shared/Footer'
import { ScrollIndicator } from '@shared/ScrollIndicator'
import { TechMarquee } from '@shared/TechMarquee'
import { navigationLinks } from '@constants/navigation'
import { heroData } from '@data/hero.data'

export default function App() {
  const handlePrimaryCtaClick = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSecondaryCtaClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  // Keep document title & meta in sync with real identity
  useEffect(() => {
    document.title = `${heroData.name} — ${heroData.title} | Portfolio`
    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute(
        'content',
        `${heroData.valueProposition} ${heroData.supportingText}`
      )
    }
  }, [])

  return (
    <div className="bg-background text-text-primary min-h-screen">
      <Navigation links={navigationLinks} sticky brand="M.A" />

      <main>
        <Hero
          onPrimaryCtaClick={handlePrimaryCtaClick}
          onSecondaryCtaClick={handleSecondaryCtaClick}
        />

        <TechMarquee />

        <PixelStatement />

        <Journey />
        <Courses />
        <Projects />
        <Skills />
        <SocialProof />
        <Contact />
      </main>

      <ScrollIndicator showProgress animated />

      <Footer
        copyrightText={`© ${new Date().getFullYear()} ${heroData.name}. All rights reserved.`}
      />
    </div>
  )
}
