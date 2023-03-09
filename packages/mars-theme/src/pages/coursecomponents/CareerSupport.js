import { styled } from "frontity";
import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import cs from "../courseimages/cs.png";
import arr from "../courseimages/Arrow 25.png";

function CareerSupport() {
  const [placement, setPlacement] = useState(true);
  const [internship, setInternship] = useState(false);

  const PLACEMENTHANDLER = () => {
    setPlacement(true);
    setInternship(false);
  };
  const INTERNSHIPHANDLER = () => {
    setPlacement(false);
    setInternship(true);
  };
  return (
    <Wrapper fluid>
      <Row1>
        <SPAN1>Career Support</SPAN1>
      </Row1>
      <Row1>
        <Row2>
          <Button1
            variant="warning"
            onClick={PLACEMENTHANDLER}
            style={{ background: placement ? "#FCAF17" : "#ffffff" }}
          >
            <SPAN2 style={{ color: placement ? "#ffffff" : "black" }}>
              Placement
            </SPAN2>
          </Button1>
          <Button2
            variant="warning"
            onClick={INTERNSHIPHANDLER}
            style={{ background: internship ? "#FCAF17" : "#ffffff" }}
          >
            <SPAN2 style={{ color: internship ? "#ffffff" : "black" }}>
              Internship
            </SPAN2>
          </Button2>
        </Row2>

        <Row3>
          <Col1>
            <Row>
            <SPAN3>
              Airtics’s high level of instruction has attracted an increasing
              number of companies, and the placement scene is expanding.
              Candidates who excel in internship will be eligible for placement
              at top MNC’s that work with Airtics.
            </SPAN3>
            </Row>
            <Row4>
            <SPAN4>
              <Image2 src={arr} />
              <span>Deliver five proof-of- concept a month</span>
            </SPAN4>
            <br />
            <SPAN4>
              <Image2 src={arr} />
              <span>We will have our partner companies review the POCs</span>
            </SPAN4>
            <br />
            <SPAN4>
              <Image2 src={arr} />
              <span> 3 guaranteed interviews</span>
            </SPAN4>
            <br />
            <SPAN4>
              <Image2 src={arr} />
              <span>JD based Support training</span>
            </SPAN4>
            <br />
            <SPAN4>
              <Image2 src={arr} />
              <span>Placement in MNC</span>
            </SPAN4>
            </Row4>
          </Col1>
          <Col1>
            <Image1 src={cs} alt="" />
          </Col1>
        </Row3>
      </Row1>
    </Wrapper>
  );
}

export default CareerSupport;
const Wrapper = styled(Container)`
  background: #f7fbff;
  max-width: 1456px;
  min-height: 661.67px;
`;
const Row1 = styled(Row)`
  width: 83%;
  margin-left: auto;
  margin-right: auto;
  @media(max-width:480px){
    width:100%;
  }
`;
const Row2 = styled(Row)`
  padding: 10px;
  max-width: 467.54px;
  min-height: 61.55px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  background: #ffffff;
  border: 1px solid #e3e3e3;
  box-shadow: 0px 15px 15px -8px rgba(221, 229, 237, 0.74);
  border-radius: 7px;
`;
const Row3 = styled(Row)`
  margin-top: 3rem;
  margin-bottom: 3rem;
  // width:83%;
  margin-left: auto;
  margin-right: auto;
  display:flex;
  flex-wrap:wrap;
  @media(max-width:700px){
    flex-direction:column;
}
`;
const Row4 = styled(Row)`
  margin-top: 3rem;

`;
const Col1 = styled(Col)`
flex:1 1 30%;
`;

const Button1 = styled(Button)`
  width: 221.13px;
  background: #ffffff;
  border-radius: 5px;
  border: none;
  @media(max-width:480px){
    width:100%;
  }
`;
const Button2 = styled(Button)`
  width: 221.13px;
  border-radius: 5px;
  border: none;
  @media(max-width:480px){
    width:100%;
  }
`;

const SPAN1 = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  /* identical to box height, or 125% */
  text-align: center;
  text-transform: capitalize;
  margin-top: 2rem;
  color: #303030;
`;
const SPAN2 = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 40px;
  /* identical to box height, or 222% */

  text-transform: capitalize;
`;
const SPAN3 = styled.span`
  max-width: 559px;
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  /* or 162% */

  text-transform: capitalize;

  color: #303030;
`;
const SPAN4 = styled.span`
  margin-top: 10px;
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  /* or 162% */
  display: flex;
  gap: 20px;
  text-transform: capitalize;

  color: #303030;
`;
const SPAN5 = styled.span``;
// images

const Image1 = styled.img`
@media(max-width:1080px){
    margin-top:2rem;
}
@media(max-width:700px){
    width:100%;
}
`;
const Image2 = styled.img`

max-width:16.85px;
max-height: 21px;
`;
