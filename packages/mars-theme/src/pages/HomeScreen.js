import React from 'react';
import Auxcollabration from './homecomponents/Auxcollabration';
import DemoClass from './homecomponents/DemoClass';
import Enrol from './homecomponents/Enrol';
import FirstSection from './homecomponents/FirstSection';
import Footer from './homecomponents/Footer';
import KeyFeatures from './homecomponents/KeyFeatures';
import SecondSection from './homecomponents/SecondSection';
import ThirdSection from './homecomponents/ThirdSection';
import { styled } from 'frontity';
import NavBar from './homecomponents/NavBar';
import TopSection from './homecomponents/TopSection';
import Motivation from './homecomponents/Motivation';

function HomeScreen() {
  return (
    <Div>
      {/* <NavBar /> */}
      {/* <TopSection /> */}
      {/* <Motivation /> */}
    <FirstSection />
    <SecondSection />
    <ThirdSection />
    <DemoClass />
    <Auxcollabration />
    <KeyFeatures />
    <Enrol />
    <Footer />
    </Div>
  )
}

export default HomeScreen;
// css
const Div = styled.div`
background-color: #faf5ed;
min-height:100vh;
`;