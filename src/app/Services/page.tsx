"use client"
import React, { useState } from 'react'
import InstallationServicesSection from '../sections/InstallationServicesSection/InstallationServicesSection'
import ProjectsServicesSection from '../sections/ProjectsServicesSection/ProjectsServicesSection'
import EquipmentServicesSection from '../sections/EquipmentServicesSection/EquipmentServicesSection'
import TechnicalConsultingServicesSection from '../sections/TechnicalConsultingServicesSection/TechnicalConsultingServicesSection'
import DiagnosticsServicesSection from '../sections/DiagnosticsServicesSection/DiagnosticsServicesSection'
import CallToActionAboutUs from '../sections/CallToActionAboutUs/CallToActionAboutUs'

const Page = () => {
    const [activeCard, setActiveCard] = useState(1)

  return (
    <div>

        <ProjectsServicesSection />
        <InstallationServicesSection />
        <EquipmentServicesSection activeCard={activeCard} setActiveCard={setActiveCard} />
        <TechnicalConsultingServicesSection />
        <DiagnosticsServicesSection />
        <CallToActionAboutUs/>
    </div>
  )
}

export default Page