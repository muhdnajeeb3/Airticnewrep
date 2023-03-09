import React from 'react'
import AboutAux from './AboutAux'
import CareerSupport from './CareerSupport';
import CourseModules from './CourseModules';
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

    </>
  )
}

export default MainSection;