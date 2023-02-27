import React, { useState } from "react";
import { styled } from "frontity";
import { Col, Container, Row } from "react-bootstrap";
import l1 from "../images/line1.png";
import l2 from "../images/line2.png";
import l3 from "../images/line3.png";
import cap from "../images/Gcap.png";
import twenty4 from "../images/24.png";
import plus from "../images/plus.png";

function KeyFeatures() {
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(!hover);
  };
  return (
    <Wrapper fluid>
      {/* line bottom */}
      <div
        style={{
          position: "absolute",
          left: "0",
          bottom: "89px",
          width: "auto",
          height: "auto",
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
            width: "74px",
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
            width: "74px",
            height: "auto",
            objectFit: "cover",
            position: "absolute",
            left: "83%",
            top: "71%",
            transform: "translate(-1%,-8%)",
          }}
        />
      </div>
      {/* top lines */}
      <div
        style={{
          position: "absolute",
          right: "0",
          top: "156px",
          width: "auto",
          height: "auto",
          transform: "matrix(-1, 0, 0, 1, 0, 0)",
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
            width: "74px",
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
            width: "74px",
            height: "auto",
            objectFit: "cover",
            position: "absolute",
            left: "83%",
            top: "71%",
            transform: "translate(-1%,-8%)",
          }}
        />
      </div>
      <Roww>
        <SPAN1>
          kEY <SPAN2>FEATURES</SPAN2>
        </SPAN1>
      </Roww>
      <Roww1>
        <SPAN3>
          To give an excellent learning experience, we believe in offering the
          greatest technology training packed with necessary features.
        </SPAN3>
      </Roww1>
      {/* content */}

      <Roww2>
        <Col1 onMouseEnter={handleHover} onMouseLeave={handleHover}>
          <Row>
            <Div1>
              <Div2></Div2>
              <Div3 style={{ background: hover ? "#fff" : "#FCAF17" }}></Div3>
              <Image src={cap} alt="" />
            </Div1>
            <SPAN4>Live virtual training</SPAN4>
            <br />
            <SPAN5>
              Attend live training and be part of a virtual classroom where
              participants can interact, communicate, view and discuss.{" "}
            </SPAN5>
          </Row>
        </Col1>
        <Col1 onMouseEnter={handleHover} onMouseLeave={handleHover}>
          <Row>
            <Div1>
              <Div2></Div2>
              <Div3 style={{ background: hover ? "#fff" : "#FCAF17" }}></Div3>
              <Image src={cap} alt="" />
            </Div1>
            <SPAN4>Interactive learning with flexible timing</SPAN4>
            <br />
            <SPAN5>
              Complete the program on your own terms. Flexible learning allows
              you to decipher when you will learn
            </SPAN5>
          </Row>
        </Col1>
        <Col1 onMouseEnter={handleHover} onMouseLeave={handleHover}>
          <Row>
            <Div1>
              <Div2></Div2>
              <Div3 style={{ background: hover ? "#fff" : "#FCAF17" }}></Div3>
              <Image src={cap} alt="" />
            </Div1>
            <SPAN4>Industry-standard curriculum</SPAN4>
            <br />
            <SPAN5>
              Innovative curriculum designed in guidance with industry and
              academia to develop job-ready skills
            </SPAN5>
          </Row>
        </Col1>
      </Roww2>
      <Roww2>
        <Col1 onMouseEnter={handleHover} onMouseLeave={handleHover}>
          <Row>
            <Div1>
              <Div2></Div2>
              <Div3 style={{ background: hover ? "#fff" : "#FCAF17" }}></Div3>
              <Image src={cap} alt="" />
            </Div1>
            <SPAN4>Real-time projects</SPAN4>
            <br />
            <SPAN5>
              Projects combining virtual labs with real-world data sets for
              practical instruction
            </SPAN5>
          </Row>
        </Col1>
        <Col1 onMouseEnter={handleHover} onMouseLeave={handleHover}>
          <Row>
            <Div1>
              <Div2></Div2>
              <Div3 style={{ background: hover ? "#fff" : "#FCAF17" }}></Div3>
              <Image src={cap} alt="" />
            </Div1>
            <SPAN4>Guaranteed internship</SPAN4>
            <br />
            <SPAN5>
              An opportunity for guaranteed internships by connecting you with
              innovative companies{" "}
            </SPAN5>
          </Row>
        </Col1>
        <Col1 onMouseEnter={handleHover} onMouseLeave={handleHover}>
          <Row>
            <Div1>
              <Div2></Div2>
              <Div3 style={{ background: hover ? "#fff" : "#FCAF17" }}></Div3>
              <Image src={cap} alt="" />
            </Div1>
            <SPAN4>Learn from industry experts</SPAN4>
            <br />
            <SPAN5>
              Leading practitioners who bring current best practices and case
              studies to sessions that fit your work schedule.
            </SPAN5>
          </Row>
        </Col1>
      </Roww2>
      <Roww2>
        <Col1 onMouseEnter={handleHover} onMouseLeave={handleHover}>
          <Row>
            <Div1>
              <Div2></Div2>
              <Div3 style={{ background: hover ? "#fff" : "#FCAF17" }}></Div3>
              <Image src={twenty4} alt="" />
            </Div1>
            <SPAN4>24x7 learning support</SPAN4>
            <br />
            <SPAN5>
              You are offered 24x7 learning support from mentors and a community
              of like-minded peers to resolve any conceptual doubts.{" "}
            </SPAN5>
          </Row>
        </Col1>
        <Col1 onMouseEnter={handleHover} onMouseLeave={handleHover}>
          <Row>
            <Div1>
              <Div2></Div2>
              <Div3 style={{ background: hover ? "#fff" : "#FCAF17" }}></Div3>
              <Image src={plus} alt="" />
            </Div1>
            <SPAN4>100% placement assistance</SPAN4>
            <br />
            <SPAN5>
              Candidates who excel in internships get opportunities for
              placement at top MNCs having tie-ups with Airtics.
            </SPAN5>
          </Row>
        </Col1>
        <Col1 onMouseEnter={handleHover} onMouseLeave={handleHover}>
          <Row >
            <Div1>
              <Div2></Div2>
              <Div3 style={{ background: hover ? "#fff" : "#FCAF17" }}></Div3>
              <Image src={cap} alt="" />
            </Div1>
            <SPAN4>International university certification</SPAN4>
            <br />
            <SPAN5>
              A certification from AUX, the university extension of Acacia
              University, USA, gives more value than an ordinary organisation
              certification
            </SPAN5>
          </Row>
        </Col1>
      </Roww2>
    </Wrapper>
  );
}

export default KeyFeatures;

const Wrapper = styled(Container)`
  position: relative;
  background: #fffcf6;
  min-height: 1246px;
`;
const Roww = styled(Row)`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;
const Roww1 = styled(Row)`
  display: flex;
  justify-content: center;
`;
const Roww2 = styled(Row)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  gap: 5px;
`;
const SPAN1 = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 50px;
  /* identical to box height, or 139% */

  text-align: center;
  text-transform: uppercase;
  margin-top: 5rem;
  z-index: 1;

  color: #303030;
`;
const SPAN2 = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 50px;
  /* identical to box height, or 139% */

  text-align: center;
  text-transform: uppercase;
  z-index: 1;
  color: #fcaf17;
`;
const SPAN3 = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  width: 694px;
  /* or 162% */

  text-align: center;

  color: #303030;
`;
const Col1 = styled(Col)`
  width: 306px;
  height: 287px;
  background: none;
  flex: 1 1 306px;
  padding: 30px 50px;
  border-radius: 5px;

  &:hover {
    background: #fcaf17;
    box-shadow: 0px 22px 43px #ffe3ac;
    .Div3 {
      background: #fff;
    }
  }
  @media(max-width:350px){
    height:320px;
  }

`;

const Div1 = styled.div`
  width: 100px;
  position: relative;
  height: 73px;
`;
const Image = styled.img`
  position: absolute;
  top: -24%;
  left: 50%;
  transform: translate(-50%, 80%);
  width: 48.64px;
  height: 42.64px;
`;
const Div2 = styled.div`
  width: 15px;
  position: absolute;
  height: 15px;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  background: #303030;
`;
const Div3 = styled.div`
  width: 20px;
  position: absolute;
  height: 20px;
  top: 0;
  right: 0;
  border-radius: 10px;
  background: #fcaf17;
  &:hover {
    background: #ffffff;
  }
`;

const SPAN4 = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 24px;
  /* or 150% */
  margin-top: 20px;

  color: #303030;
`;
const SPAN5 = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 24px;
  /* or 171% */
  margin-top: 20px;

  color: #303030;
`;