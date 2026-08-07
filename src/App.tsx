import { useEffect } from 'react'
import { Hero, Journey, Projects, Skills, SocialProof, Contact } from '@components/sections'
import { Navigation } from '@shared/Navigation'
import { Footer } from '@shared/Footer'
import { ScrollIndicator } from '@shared/ScrollIndicator'
import { CustomCursor } from '@shared/CustomCursor'
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
      <CustomCursor />
      <Navigation links={navigationLinks} sticky brand="M.A" />

      <main>
        <Hero
          onPrimaryCtaClick={handlePrimaryCtaClick}
          onSecondaryCtaClick={handleSecondaryCtaClick}
        />

        <TechMarquee />

        <Journey />
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
