import React, { useContext } from 'react'
import HeroSection from '../../Components/HeroSection/HeroSection'
import TrendingApps from '../../Components/TrendingApps/TrendingApps'
import CategorySection from '../../Components/CategorySection/CategorySection'
import { AuthContext } from '../../AuthProvider/AuthProvider'

export default function Home() {
  const {user, loading} = useContext(AuthContext);
  if (loading) {
    return (
      <div className="w-full flex justify-center py-2">
        <span className="loading loading-spinner text-blue-500"></span>
      </div>
    );
  }
  return (
    <div className='mt-10'>
      <HeroSection></HeroSection>
      <TrendingApps></TrendingApps>
      <CategorySection></CategorySection>
    </div>
  )
}
