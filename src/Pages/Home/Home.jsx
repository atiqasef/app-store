import React, { useContext } from 'react'
import HeroSection from '../../Components/HeroSection/HeroSection'
import TrendingApps from '../../Components/TrendingApps/TrendingApps'
import CategorySection from '../../Components/CategorySection/CategorySection'
import { AuthContext } from '../../AuthProvider/AuthProvider'

export default function Home() {
  const {user} = useContext(AuthContext);
  return (
    <div className='mt-10'>
      <HeroSection></HeroSection>
      <div className='h-20'>
        {
          user && user.email
        }
      </div>
      <TrendingApps></TrendingApps>
      <CategorySection></CategorySection>
    </div>
  )
}
