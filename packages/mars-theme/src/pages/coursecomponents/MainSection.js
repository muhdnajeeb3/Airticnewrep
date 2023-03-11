import React from 'react'
import Footer from '../homecomponents/Footer';
import AboutAux from './AboutAux'
import CareerSupport from './CareerSupport';
import CourseModules from './CourseModules';
import CourseOverview from './CourseOverview';
import Enquiry from './Enquiry';

import Questions from './Questions';
import Skills from './Skills';
import StudentReview from './StudentReview';

function MainSection() {
  return (
    <>
    <CourseOverview />
    <AboutAux />
    <Skills />
    <CourseModules />
    <StudentReview />
    <CareerSupport />
    <Questions />
    <Enquiry />
    <Footer />

    </>
  )
}

export default MainSection;