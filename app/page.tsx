import Image from 'next/image'

import DefaultHero from './hero'
import DefaultPricingTable from './block'
import DefaultFooterSection from './footer'

import MegaMenuHeader from './mega-menu'

export default function Home() {
  return (
    

    <main>

      <MegaMenuHeader/>
      
      
      <DefaultHero/>
      <DefaultPricingTable/>
      <DefaultFooterSection/>
      

     


    </main>
  )
}
