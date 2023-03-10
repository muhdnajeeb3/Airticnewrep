import React from 'react'
import { Button, Col, Container, Row } from "react-bootstrap";
import NavBar from "./NavBar";
import img1 from "../images/man.png";
import circleone from "../images/Ellipse 89.png";
import circletwo from "../images/Ellipse 88.png";
import circlethree from "../images/Ellipse 87.png";
import l1 from "../images/line1.png";
import l2 from "../images/line2.png";
import l3 from "../images/line3.png";
import m1 from "../images/m1.png";
import m2 from "../images/m2.png";
import m3 from "../images/m3.png";
import s1 from "../images/s1.png";
import arrow from "../images/Vector.png";
import play from "../images/Group 997.png";
import rating from "../images/star 2.png";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import Auxcollabration from "./Auxcollabration";
import KeyFeatures from "./KeyFeatures";
import Enrol from "./Enrol";
import DemoClass from "./DemoClass";
import { styled } from 'frontity';
function TopSection() {
  return (
    <>
    <div style={{ position: "relative" }}>
        {/* <NavBar /> */}
        {/* top circles */}
        <div
          style={{
            position: "absolute",
            right: "0",
            top: "0",
            width: "400px",
            height: "300px",
            left: "",
          }}
        >
          <img
            src={circleone}
            alt=""
            style={{
              width: "343px",
              height: "auto",
              objectFit: "cover",
              position: "absolute",
              left: "57%",
              top: "78%",
              transform: "translate(-50%,-50%)",
            }}
          />
          <img
            src={circletwo}
            alt=""
            style={{
              width: "228px",
              height: "auto",
              objectFit: "cover",
              position: "absolute",
              left: "72%",
              top: "75%",
              transform: "translate(-50%,-50%)",
            }}
          />
          <img
            src={circlethree}
            alt=""
            style={{
              width: "139px",
              height: "auto",
              objectFit: "cover",
              position: "absolute",
              left: "83%",
              top: "71%",
              transform: "translate(-50%,-50%)",
            }}
          />
        </div>
        {/* bottom lines */}
        <div
          style={{
            position: "absolute",
            left: "0",
            bottom: "137px",
            width: "auto",
            height: "auto",
            right: "",
          }}
        >
          <img
            src={l1}
            alt=""
            style={{
              width: "35px",
              height: "auto",
              objectFit: "cover",
              position: "absolute",
              left: "57%",
              top: "78%",
              transform: "translate(-1%,-60%)",
            }}
          />
          <img
            src={l2}
            alt=""
            style={{
              width: "84px",
              height: "auto",
              objectFit: "cover",
              position: "absolute",
              left: "72%",
              top: "75%",
              transform: "translate(-1%,-33%)",
            }}
          />
          <img
            src={l3}
            alt=""
            style={{
              width: "84px",
              height: "auto",
              objectFit: "cover",
              position: "absolute",
              left: "83%",
              top: "71%",
              transform: "translate(-1%,-8%)",
            }}
          />
        </div>
        <RowWrapper
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
          }}
        >
          <Col style={{ flex: " 1" }}>
            <Row>
              <SPAN>
                Upgrade your <span style={{ color: "#FCAF17" }}>Skills</span>
                <br /> in the industry of the
                 Future
              </SPAN>
            </Row>
            <Row>
              <Paragraph>
                If you are pursuing a career in technology, it is high time to
                update your skills and prepare for your next opportunity.
              </Paragraph>
            </Row>
            <Div3
              
            >
              <Col1
              >
                <Button
                  variant="dark"
                  style={{
                    borderRadius: "0",
                    color: "#FCAF17",
                    width: "168px",
                    minHeight: "68px",
                    fontFamily: "mons",
                    marginTop: "20px",
                  }}
                >
                  Get Started{" "}
                  <img src={arrow} alt="" width="27" height="13px" />
                </Button>
                <Col
                  style={{
                    width: "",
                    display: "flex",
                    justifyItems: "center",
                    gap: "10px",
                  }}
                >
                  <img src={play} alt="" />
                  <Word>How it Works</Word>
                </Col>
              </Col1>
            </Div3>
          </Col>
          <Col>
            <div
              style={{
                zIndex: "113",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Images
                src={img1}
                alt=""
                
              />
            </div>
          </Col>
        </RowWrapper>
      </div></>
  )
}

export default TopSection;
const RowWrapper =styled(Row)`

@media (max-width: 1024px) {
      margin-top:5rem;
     }
`;
const Row1 =styled(Row)`
width:1189px;
@media (max-width: 480px) {
  display:flex;
  flex-direction:column;
  margin-bottom:5rem;

    
     }
`;
const Col1 = styled(Col)`

  width: 100%;
  display: flex;
  justifyItems: center;
  gap:50px;
  @media (max-width: 480px) {
  flex-direction:column;
  gap:10px;
    
     }

`;
const Col2 = styled(Col)`
display:flex;
justify-content:center;

`;
const Col3 = styled(Col)`
display:grid;
justify-content:center;
padding:35px 10px;

`;
const Div3 = styled.div`
  margin-left: 6.7rem;
  display: flex;
  justify-items: center;
  margin-top: 5%;
  @media (max-width: 560px) {
   margin-left:4rem;
    }
`;
// images

const Images = styled.img`
  width:764px;
  max-width: "100%";
  object-fit: contain;
  z-index: 12;
  opacity: 1;

  @media (max-width: 560px) {
  width:100%;
  }
`;

const StudentImage = styled.img`
  width: 120px;
  height: 104px;

`;
const Word = styled.p`
  position: relative;
  top: 36.38%;

  font-family: "Metropolis";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  text-transform: capitalize;
  color: #303030;
`;

const Paragraph = styled.p`
  height: 96px;
  width: 592px;

  padding-left: 6.8rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  border-radius: null;

  position: relative;

  top: 9.12%;
  bottom: 95.12%;

  font-family: "Metropolis";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;

  text-transform: capitalize;

  color: #303030;

  @media (max-width: 650px) {
    padding-left: 5rem;
    padding-bottom: 5.5rem;
  }
  @media (max-width: 480px) {
    padding-left: 3rem;
  }
`;
// span
const SPAN = styled.span`
  position: relative;
  padding-left: 6.7rem;
  padding-top: 3rem;

  font-family: "Metropolis";
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  line-height: 80px;
  color: #303030;

  @media (max-width: 650px) {
    padding-left: 5rem;
  }
  @media (max-width: 480px) {
    padding-left: 3rem;
  }
`;

const SPAN2 = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  margin-top: 10rem;

`;
const SPAN3 = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
`;

const Divider = styled.div`
  width: 10px; 
  border-right: 2px solid black;
  height: 30%;
  margin-top: 150px;

  @media (max-width: 500px) {

    display:none;

  }
`;
const Divider1 = styled.div`
  width: 1px; /* Line width */
  border-right: 2px solid #303030;
  height: 60%;
  margin-top: 28px;
`;
// bold text
const Bold = styled.strong`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 80px;
  color: #303030;
`;
const Div4 = styled.div`
  margin-top: 9rem;
`;
const Div5 = styled.div`
  display:flex;
  position:absolute;
  width:1187px;        
  over-flow:hidden;
  top: -29%;
  background-color: #ffffff;
  border-radius:3px;
  box-shadow: 0px 9px 29px -8px rgba(0, 0, 0, 0.2);      

  @media (max-width: 900px) {
    flex-direction:column;
    position:relative;
  }
  @media (max-width: 480px) {
   width:379px;
    flex-direction:column;
    padding:24px;
    position:relative;

  }

`;