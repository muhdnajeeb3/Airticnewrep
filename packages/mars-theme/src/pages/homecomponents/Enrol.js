import { styled } from "frontity";
import React, { useState } from "react";
import { Col, Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import enrol from "../images/enrol2.png";
import Companies from "./Companies";
import Enquiry from "./Enquiry";
import v from "../courseimages/v.png";

function Enrol() {
  const [open, setOpen] = useState({});

  const onToggle = (id) => {
    setOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  


  return (
    <Wrapper fluid>
      <Row>
        <Cols>
          <Row1>
            <SPAN>Why Enrol?</SPAN>
            <SPAN1>
              Gaining certifications will validate your skills and advance your
              career. Stay on top of your game and boost your credentials with
              the best IT certification courses in the industry.
            </SPAN1>
          </Row1>
          <Row2>
            <Row3>
              <Row4>
                <Details  onClick={() => onToggle(1)}>
                  <Summary>
                    <span>Remain competitive and employable</span>
                    <Div1 rotated={open[1]}>
                      <img src={v} alt="" />
                    </Div1>
                  </Summary>
                  <P className="details-content">
                    Set yourself apart from your competitors by receiving
                    advanced training in your field.
                  </P>
                </Details>
              </Row4>
              <Row4>
                <Details  onClick={() => onToggle(2)}>
                  <Summary>
                    <span>Gain job proficiency more quickly</span>
                    <Div1 rotated={open[2]}>
                      <img src={v} alt="" />
                    </Div1>
                  </Summary>
                  <P>
                    Set yourself apart from your competitors by receiving
                    advanced training in your field.
                  </P>
                </Details>
              </Row4>
              <Row4>
                <Details  onClick={() => onToggle(3)}>
                  <Summary>
                    <span>Gain networking possibilities</span>
                    <Div1 rotated={open[3]}>
                      <img src={v} alt="" />
                    </Div1>
                  </Summary>
                  <P>
                    Set yourself apart from your competitors by receiving
                    advanced training in your field.
                  </P>
                </Details>
              </Row4>

              <Row4>
                <Details  onClick={() => onToggle(4)}>
                  <Summary>
                    <span>Keep your skills up-to-date</span>
                    <Div1 rotated={open[4]}>
                      <img src={v} alt="" />
                    </Div1>
                  </Summary>
                  <P>
                    Set yourself apart from your competitors by receiving
                    advanced training in your field.
                  </P>
                </Details>
              </Row4>
              <Row4>
                <Details  onClick={() => onToggle(5)}>
                  <Summary>
                    <span>Enhance professional credibility</span>
                    <Div1 rotated={open[5]}>
                      <img src={v} alt="" />
                    </Div1>
                  </Summary>
                  <P>
                    Set yourself apart from your competitors by receiving
                    advanced training in your field.
                  </P>
                </Details>
              </Row4>
              <Row4>
                <Details  onClick={() => onToggle(6)}>
                  <Summary>
                    <span>Earning more right from the start</span>
                    <Div1 rotated={open[6]}>
                      <img src={v} alt="" />
                    </Div1>
                  </Summary>
                  <P>
                    Set yourself apart from your competitors by receiving
                    advanced training in your field.
                  </P>
                </Details>
              </Row4>
              <Row4>
                <Details  onClick={() => onToggle(7)}>
                  <Summary>
                    <span>Remain competitive and employable</span>
                    <Div1 rotated={open[7]}>
                      <img src={v} alt="" />
                    </Div1>
                  </Summary>
                  <P>
                    Set yourself apart from your competitors by receiving
                    advanced training in your field.
                  </P>
                </Details>
              </Row4>
            </Row3>
          </Row2>
        </Cols>
        <Col>
          <Div>
            <Image src={enrol} />
          </Div>
        </Col>
      </Row>
      <Enquiry />
      <Companies />
    </Wrapper>
  );
}

export default Enrol;

const Wrapper = styled(Container)`
  // position:relative;
  margin-top: 3rem;
`;

const SPAN = styled.span`
  // width:213px;
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 600;
  font-size: 38px;
  line-height: 48px;
  /* identical to box height, or 126% */

  color: #303030;
`;
const SPAN1 = styled.span`
  margin-top: 2rem;

  width: 590px;
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  /* or 162% */

  color: #303030;
`;
const Row1 = styled(Row)`
  margin-top: 4rem;
  margin-left: 6rem;
  @media (max-width: 720px) {
    margin-left: 2rem;
    width: auto;
  }
  @media (max-width: 480px) {
    margin-left: 0rem;
    // margin:10px;
  }
`;
const Row2 = styled(Row)`
  width: 593px;
  min-height: 539px;
  margin-top: 4.2rem;
  border-top: 8px solid #fcaf17;
  margin-left: 6rem;
  @media (max-width: 720px) {
    margin-left: 2rem;
    width: auto;
    // margin:10px;
  }
  @media (max-width: 480px) {
    margin-left: 0rem;
    // margin:10px;
  }
`;
const Row3 = styled(Row)`
  width: 593px;
  margin-left: 1px;
  // border-top:8px solid #FCAF17;
  background: #fff;
  @media (max-width: 720px) {
    // margin-left: 2rem;
    width: auto;
  }
  @media (max-width: 480px) {
    margin-left: 0rem;
    // margin:10px;
  }
`;
const Row4 = styled(Row)`
  // width:593px;
  // margin-top:3rem;
  // border-top:8px solid #FCAF17;
  border-bottom: 1px solid #efece7;
`;
const Details = styled.details`
  padding-left: 20px;
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 400;
  width: 100%;
  font-size: 14px;
  line-height: 24px;
  margin-top: 25px;
  margin-bottom: 25px;
  /* or 171% */
  transition: transform 5.3s ease-in-out;
  animation: slowmation 18s infinite;
  details summary::-webkit-details-marker {
    display: none;
  }
  // summary::after {
  //   content: "";
  //   display: inline-block;
  //   width: 10px;
  //   height: 10px;
  //   margin-left: 15rem;
  //   border-top: 2px solid black;
  //   border-right: 2px solid black;
  //   transform: ${(props) => (props.open ? "rotate(-45deg)" : "rotate(135deg)")};
  //   transition: transform 0.3s ease-in-out;
  //   @media (max-width: 650px) {
  //     margin-left: 18rem;
  //     position: relative;
  //     top: -26px;
  //   }
  //   @media (max-width: 380px) {
  //     margin-left: 14.5rem;
  //     position: relative;
  //     top: -26px;
  //   }
  // }
  // details[open] > summary::after {
  //   transform: rotate(-40deg);
  // }
  // summary {
  //   list-style: none;
  //   display: flex;
  //   justify-content: space-between;
  //   @media (max-width: 650px) {
  //     display: block;
  //     justify-content: auto;
  //   }
  // }

  color: #303030;
`;
const Summary = styled.summary`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */
  display: flex;
  justify-content: space-between;
  text-transform: capitalize;
  padding-top: 10px;
  color: #303030;
`;
const Image = styled.img`
  // width:100%;
  width: 726px;
  // height:594px;
  @media (max-width: 730px) {
    width: 100%;
  }
`;

const Div = styled.div`
  display: flex;
  justify-content: flex-end;
  // width:726px;
  // height:594px;
  margin-top: 15rem;
  @media (max-width: 720px) {
    margin-top: 5rem;
  }
`;
const Div1 = styled.div`
  transform: ${(props) => (props.rotated ? "rotate(-180deg)" : "")};
`;
const Cols = styled(Col)`
  @media (max-width: 720px) {
    padding: 2rem;
  }
`;
const P = styled.p`
  margin-top: 20px;

  transition: max-height 0.3s ease-out;
  overflow: hidden;
`;
