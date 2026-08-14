import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import TechStackMarquee from "@/components/TechStackMarquee"
import FeaturedProjects from "@/components/FeaturedProjects"
import ExperienceTimeline from "@/components/ExperienceTimeline"
import Education from "@/components/Education"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090b]">
      <Navbar />
      <HeroSection />
      <TechStackMarquee />
      <FeaturedProjects />
      <ExperienceTimeline />
      <Education />
      <Footer />
    </main>
  )
}
