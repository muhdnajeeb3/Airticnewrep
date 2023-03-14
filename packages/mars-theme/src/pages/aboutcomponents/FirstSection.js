import { styled } from 'frontity';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import NavBar from '../homecomponents/NavBar';
import play from "../courseimages/play.png";
import star from "../courseimages/Rating star.png";
import banner from '../aboutimages/banner.png'

function FirstSection() {
  return (
    <Wrapper1 fluid>
        <NavBar about='true'/>
        <Row1>
            <Col1>
            <SPAN1>Future <SPAN2>Now</SPAN2></SPAN1>
            <br />
            <SPAN3>
            Explore the best IT programs, including Artificial Intelligence and Machine Learning, from leading experts offered by Airtics Education and attain a university certificate from one of the best universities in the USA.

            </SPAN3>
            <br />
            <br />
            <Row8>
              <Col6>
                <img src={play} />
                <SPAN11>
                  Watch <br />
                  Preview Videos
                </SPAN11>
              </Col6>
              <Col7>
                <img src={star} alt="" />
                <SPAN12>57,423 Ratings</SPAN12>
              </Col7>
            </Row8>
            </Col1>
            <Col2>
            <Image src={banner}/>
            </Col2>
        </Row1>

    </Wrapper1>
  )
}

export default FirstSection;
// css

const Wrapper1 = styled(Container)`
background: linear-gradient(265.64deg, #18191C 14.9%, #292C31 82.76%, #464A50 99.51%);
min-height:600px;
`;
const Row1 = styled(Row)`
width:90%;
margin-left:auto;
margin-right:auto;
padding-top:3rem;
display:flex;
@media(max-width:1028px){
padding-top:7rem;

}
@media(max-width:565px) {
    // width:100%;
    flex-direction:column;


  }
`;
const Col1 = styled(Col)`
padding-top:4rem;
`;
const Col2 = styled(Col)`

`;

// spaan
const SPAN1 = styled.span`
font-family: 'Metropolis';
font-style: normal;
font-weight: 600;
font-size: 62px;
line-height: 72px;

/* identical to box height, or 116% */


color: #FFFFFF;
`;
const SPAN2 = styled.span`
color:#FCAF17;
`;

const SPAN3 = styled.span`
max-width:572px;
font-family: 'Metropolis';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 26px;
/* or 162% */

text-transform: capitalize;

color: #FFFFFF;`;

// watch
const Row8 = styled(Row)`
  margin-top: 5rem;
  margin-bottom: 2rem;
`;
const Col6 = styled(Col)`
  display: flex;

  gap: 20px;
  max-width: 234px;
  align-items: center;
  @media (max-width: 430px) {
    margin-top: 10px;
  }
`;
const Col7 = styled(Col)`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  @media (max-width: 430px) {
    margin-top: 10px;
  }
`;
const SPAN11 = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  /* or 143% */

  text-transform: capitalize;

  color: #ffffff;
`;
const SPAN12 = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  /* identical to box height, or 162% */

  text-transform: capitalize;

  color: #ffffff;
`;
// images
const Image = styled.img`
@media (max-width: 565px) {
    width:100%;
  }
`;