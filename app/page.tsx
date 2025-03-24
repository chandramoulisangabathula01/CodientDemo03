// import Header from "@/components/Header"
import Hero from "@/components/Hero"
// import ClientLogos from "@/components/ClientLogos"
import WelcomeSection from "@/components/WelcomeSection"
import MarketingDifference from "@/components/MarketingDifference"
import Services from "@/components/Services"
import Process from "@/components/Process"
import CaseStudies from "@/components/CaseStudies"
import Expertise from "@/components/Expertise"
import Testimonials from "@/components/Testimonials"
import Team from "@/components/Team"
import CallToAction from "@/components/CallToAction"
import Footer from "@/components/Footer"
import WhatWeDo from "@/components/WhatWeDo"

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <main>
        <Hero />
        {/* <ClientLogos /> */}
        {/* <WelcomeSection /> */}
        <MarketingDifference />
        {/* <Services /> */}
        <WhatWeDo/>
        <Process />
       
        <CaseStudies />
        <Expertise />
        {/* <Testimonials /> */}
        <Team />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}