import { styled } from "frontity";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import study from "../aboutimages/image 18.png";
import people from "../aboutimages/image 19.png";
import hand from "../aboutimages/image 20.png";

function Education() {
  return (
    <>
    <Wrapper1>
      <Row1>
        <Col1>
          <Row2>
            <Image1 src={study} />
          </Row2>
        </Col1>
        <Col2>
          <SPAN1>
            About Airtics <SPAN2>Education</SPAN2>
          </SPAN1>
          <br />
          <SPAN3>
            The next evolution of online learning from the prestigious Westford
            Education Group, Airitcs Education, offers the top IT certification
            programs, ideal for working professionals and fresh graduates to
            help them advance in those fields.
            <br />
            <br /> A pioneer in technical education solutions, Airtics
            Education, intends to fill tech learning gaps. It enables learners
            to excel in technology by adopting a teaching methodology via a
            curriculum designed and fine-tuned by expert academicians and
            industry specialists.
            <br /> Intends to fill the gap in tech-related industry
            requirements, Airtics provides training and internships in
            Artificial Intelligence, Data Science, Robotic Process Automation,
            Machine Learning, Business Intelligence, Data Analytics, Data
            Visualization, and related topics.
            <br /> At Airtics Education, we have combined cutting-edge material
            with the best online technology and instructional design to improve
            learning outcomes while encouraging engagement and collaboration.
            <br /> In addition, the learners are getting a unique opportunity to
            get certified from an internationally-recognised US university
            extension, AUX, an extension of Acacia University, USA. The courses
            range from 6 months Mastering Programs to 1-year PG programs for
            executives. All programs are certified under AUX.
          </SPAN3>
        </Col2>
      </Row1>
    </Wrapper1>
    <Wrapper2 fluid>
        <Row3>
            <Col3>
            <SPAN4>Guaranteed Internship</SPAN4>
            <br />
            <SPAN5>Airtics Education offers an opportunity for guaranteed internships by connecting learners with innovative companies</SPAN5>
            </Col3>
            <Col4>
            <Div1>
                <Image2 src={people}/>
            </Div1>
            </Col4>
        </Row3>

    </Wrapper2>
    <Wrapper3 fluid>
    <Row3>
            
            <Col4>
            <Div1>
                <Image2 src={hand}/>
            </Div1>
            </Col4>
            <Col3>
            <SPAN4>100% Placement Assistance</SPAN4>
            <br />
            <SPAN5>Candidates who excel in internships get opportunities for placement at top MNCs having tie-ups with Airtics Education</SPAN5>
            </Col3>
        </Row3>

    </Wrapper3>
    </>
  );
}

export default Education;

// css
const Wrapper1 = styled(Container)``;
const Wrapper2 = styled(Container)`
background: #FBF9F8;
min-height:316px;
`;
const Wrapper3 = styled(Container)`
min-height:316px;
background: #ffffff;


`;

const Row1 = styled(Row)`
  padding-top: 6rem;
  padding-bottom: 6rem;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  @media(max-width:565px) {
    width:100%;
    flex-direction:column;

  }
`;
const Row2 = styled.div`
  max-width: 458px;
  border-bottom: 11px solid #fcaf17;
`;
const Col1 = styled(Col)`
// display:flex;
// justify-content:center;
`;
const Col2 = styled(Col)`

@media(max-width:765px) {
    margin-top:2rem;
    

  }`;

// img
const Image1 = styled.img`
  padding:0;


  @media(max-width:565px) {
    width:100%;
    

  }
`;

// spaan
const SPAN1 = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 50px;
  /* identical to box height, or 139% */

  text-align: center;

  color: #303030;
`;
const SPAN2 = styled.span`
  color: #fcaf17;
`;

const SPAN3 = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  /* or 175% */

  color: #303030;
`;
// wrappper 2
const Row3 = styled(Row)`
width:90%;
margin-left:auto;
margin-right:auto;
padding-top:3rem;
display:flex;
@media(max-width:650px){
    flex-direction:column;
width:100%;

}
`;
const Div1 = styled.div`
`;
const Col3 = styled(Col)`
// display:flex;
// flex-direction:column;
// align-items:center;
@media(min-width:1400px){
    padding-top:4rem;

}
`;
const Col4 = styled(Col)`
// display:flex;
// flex-direction:column;
// align-items:center;
@media(max-width:680px){
   margin-top:3rem;
}
`;
// const Row3 = styled(Row)``;
// span

const SPAN4 = styled.span`
font-family: 'Metropolis';
font-style: normal;
font-weight: 600;
font-size: 36px;
line-height: 50px;
/* identical to box height, or 139% */

text-align: center;

color: #000000;
`;
const SPAN5 = styled.span`
font-family: 'Metropolis';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 28px;
/* or 175% */


color: #303030;
`;
const Image2 = styled.img`

@media(max-width:650px){
    width:100%;
}`;



