import React from 'react'
import HeroSection from '../../Components/HeroSection/HeroSection'
import TrendingApps from '../../Components/TrendingApps/TrendingApps'
import CategorySection from '../../Components/CategorySection/CategorySection'

export default function Home() {
  return (
    <div className='mt-10'>
      <HeroSection></HeroSection>
      <div className='h-20'></div>
      <TrendingApps></TrendingApps>
      <CategorySection></CategorySection>
    </div>
  )
}
