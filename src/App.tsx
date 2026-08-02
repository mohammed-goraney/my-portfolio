import { Hero, Journey, Projects, Skills, SocialProof, Contact } from '@components/sections'
import { Navigation } from '@shared/Navigation'
import { Footer } from '@shared/Footer'
import { ScrollIndicator } from '@shared/ScrollIndicator'
import { navigationLinks } from '@constants/navigation'

export default function App() {
  const handlePrimaryCtaClick = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSecondaryCtaClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="bg-background text-text-primary min-h-screen">
      <Navigation links={navigationLinks} sticky />

      <main>
        <Hero
          onPrimaryCtaClick={handlePrimaryCtaClick}
          onSecondaryCtaClick={handleSecondaryCtaClick}
        />
        <Journey />
        <Projects />
        <Skills />
        <SocialProof />
        <Contact />
      </main>

      <ScrollIndicator showProgress animated />

      <Footer copyrightText={`© ${new Date().getFullYear()} Your Name. All rights reserved.`} />
    </div>
  )
}