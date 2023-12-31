import Image from 'next/image'

import DefaultHero from './hero'
import DefaultPricingTable from './block'
import DefaultFooterSection from './footer'
import DefaultHeaderSection from './header-mega'

export default function Home() {
  return (
    

    <main>
      
      <DefaultHeaderSection/>
      <DefaultHero/>
      <DefaultPricingTable/>
      <DefaultFooterSection/>
      

     


    </main>
  )
}
