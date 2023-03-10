import React from 'react'
import Footer from '../homecomponents/Footer';
import AboutAux from './AboutAux'
import CareerSupport from './CareerSupport';
import CourseModules from './CourseModules';
import Enquiry from './Enquiry';

import Questions from './Questions';
import Skills from './Skills';
import StudentReview from './StudentReview';

function MainSection() {
  return (
    <>
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