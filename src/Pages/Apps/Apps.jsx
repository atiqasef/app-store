import React from 'react'
import CategorySection from '../../Components/CategorySection/CategorySection'
import { Helmet } from 'react-helmet'

export default function Apps() {
  return (
    <div>
      <Helmet>
        <title>Apps | App Store</title>
      </Helmet>
    
      <CategorySection></CategorySection>
    </div>
  )
}
