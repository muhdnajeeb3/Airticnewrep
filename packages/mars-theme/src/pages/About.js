import React from 'react'
import Education from './aboutcomponents/Education'
import FirstSection from './aboutcomponents/FirstSection'
import UniversityCertificate from './aboutcomponents/UniversityCertificate'
import Footer from './homecomponents/Footer'

function About() {
  return (
    <>
        <FirstSection />
        <Education />
        <UniversityCertificate />
        <Footer about='true'/>
    </>
  )
}

export default About