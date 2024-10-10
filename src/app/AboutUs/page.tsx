"use client"
import React from 'react'
import OurValuesSection from '../sections/OurValuesSection/OurValuesSection'
import InfiniteScrollList from '../sections/OurJourneySection/OurJourneySection'
import OurPartnetsSection from '../sections/OurPartnetsSection/OurPartnetsSection'
import CallToActionAboutUs from '../sections/CallToActionAboutUs/CallToActionAboutUs'

const Page = () => {
  return (
    <div>
        <OurValuesSection/>
        <InfiniteScrollList/>
        <OurValuesSection/>
        <OurPartnetsSection/>
        <CallToActionAboutUs/>
    </div>
  )
}

export default Page