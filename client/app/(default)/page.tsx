import Hero from '@/components/Hero'
import Features from '@/components/Features'
import FeaturesBlocks from '@/components/FeaturesBlocks'
import Testimonials from '@/components/Testimonials'
import Newsletter from '@/components/Newsletter'

export const metadata = {
  title: 'Home - QuickNotes',
  description: 'Welcome to QuickNotes - the easiest way to organize and manage your notes online.',
  keywords: ['QuickNotes', 'notes app', 'organization', 'productivity'],
  author: 'Mutasim',
}

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturesBlocks />
      <Testimonials />
      <Newsletter />
    </>
  )
}
