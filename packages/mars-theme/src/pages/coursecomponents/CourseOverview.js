import { styled } from "frontity";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import tick from "../courseimages/Group 625.png";
import callcenter from "../courseimages/callcenter.png";
import PhoneInput from "react-phone-input-2";
import NavBar from "../homecomponents/NavBar";
import pman from "../courseimages/pythonman.png";
import play from "../courseimages/play.png";
import star from "../courseimages/Rating star.png";
import calender from "../courseimages/Calander icon.png";
import time from "../courseimages/Duration icon.png";
import learning from "../courseimages/blended learning icon.png";
import fees from "../courseimages/fees icon.png";

function CourseOverview() {
  return (
    <>
      <Wrapper1 fluid>
        <NavBar coursepage={true} />
        <Row7>
          <Col4>
            <SPAN8>
              Home / Artificial Intelligence and Machine Learning Courses / Data
              Science With Python
            </SPAN8>
            <br />
            <br />
            <SPAN9>
              Advanced Program in Dynamic Web Development using Python
            </SPAN9>
            <br />
            <br />
            <SPAN8>
              Our AI ML course covers essential topics like Statistics, Machine
              Learning, Deep Learning, Natural Language Processing.
            </SPAN8>
            <br />
            <Button2 variant="warning">
              <SPAN10>Apply Now</SPAN10>
            </Button2>
            <br />
            <Row8>
              <Col6>
                <img src={play} />
                <SPAN11>
                  Watch <br />
                  Preview Videos
                </SPAN11>
              </Col6>
              <Col6>
                <img src={star} alt="" />
                <SPAN12>57,423 Ratings</SPAN12>
              </Col6>
            </Row8>
          </Col4>
          <Col5>
            <Image3 src={pman} />
          </Col5>
        </Row7>
      </Wrapper1>

      <Wrapper2 fluid>
        <Row9>
          <Col7>
            <SPAN14>
              <img src={calender} alt="" />
              <span>
                Next Course starts <br />
                <Bold>29 Apr, 2022</Bold>
              </span>
            </SPAN14>
          </Col7>
          <Col7>
            <SPAN14>
              <img src={time} alt="" />
              <span>
              Program Duration <br />
                <Bold> 3 Months</Bold>
              </span>
            </SPAN14>
          </Col7><Col7>
            <SPAN14>
              <img src={learning} alt="" />
              <span>
              Learning Format <br />
                <Bold>Blended Learning</Bold>
              </span>
            </SPAN14>
          </Col7><Col8>
            <SPAN15>
              <Image4 src={fees} alt="" />
              <span>
              Program Fees <br />
              Batch: <Bold1> $1500</Bold1> <br />
              1: 1 Training:<Bold1> $3000</Bold1> <br />
               
              </span>
            </SPAN15>
          </Col8>
        </Row9>
        <Row3>
          <Col2>
            <SPAN3>
              Course <Bold>Overview</Bold>
            </SPAN3>
            <br />
            <br />
            <SPAN5>
              The Data Science with Python course training ,you will learn
              Python programming, Data Analysis, Machine Learning, Data
              Visualization, Web Scraping, Artificial Intelligence, Business
              Intelligence-Powerbi & NLP. Upon course completion, you will
              master the essential Data Science tools using Python.
            </SPAN5>
            <Row4>
              <SPAN6>
                Training <Bold>Key Features</Bold>
              </SPAN6>
              <SPAN2>
                <Image1 src={tick} />
                <span>72 hours of live instructor led training</span>
              </SPAN2>
              <br />
              <SPAN2>
                <Image1 src={tick} />
                <span>
                  industry-based projects, 8 Assignments& 20 Case Studies
                </span>
              </SPAN2>
              <br />{" "}
              <SPAN2>
                <Image1 src={tick} />
                <span>24/7 support and LMS Access</span>
              </SPAN2>
              <br />{" "}
              <SPAN2>
                <Image1 src={tick} />
                <span>
                  Hands on experience with latest tools and applie projects
                </span>
              </SPAN2>
              <br />{" "}
              <SPAN2>
                <Image1 src={tick} />
                <span>
                  Live engagement classes by seasoned academics and
                  professionals
                </span>
              </SPAN2>
              <br />
            </Row4>
          </Col2>

          <Col3>
            <Row5>
              <Image2 src={callcenter} />
              <Row6>
                <Input type="text" placeholder="Full Name" />
              </Row6>
              <Row6>
                <Input type="email" placeholder="E-Mail" />
              </Row6>
              <Row6>
                <Input type="text" placeholder="Country" />
              </Row6>
              <Row6>
                <PhoneInput1
                  country={"QAT"}
                  specialLabel={""}
                  placeholder={""}
                  defaultCountry="us"
                  inputProps={{
                    name: "phone",
                    // required: true,
                    // autoFocus: true,
                    placeholder: "Mobile Number",
                  }}

                  // value={this.state.phone}
                  // onChange={phone => this.setState({ phone })}
                />
              </Row6>
              <Button1>Submit</Button1>
            </Row5>
          </Col3>
        </Row3>
      </Wrapper2>

      <Wrapper4 fluid>
        <Row1>
          <SPAN1>
            Who can apply <Bold>for the program?</Bold>
          </SPAN1>
        </Row1>
        <Row2>
          <Col1>
            <SPAN2>
              <Image1 src={tick} />
              <span>
                Career starters in Finance, Marketing, Design, Data Analytics
                and Science
              </span>
            </SPAN2>
            <br />
            <SPAN2>
              <Image1 src={tick} />
              <span>Analytic professional interested in Python</span>
            </SPAN2>
            <br />
            <SPAN2>
              <Image1 src={tick} />
              <span>Software and IT professionals</span>
            </SPAN2>
            <br />
            <SPAN2>
              <Image1 src={tick} />
              <span>Individuals with a genuine interest in Data Science</span>
            </SPAN2>
            <br />
          </Col1>
          <Col1>
            <SPAN2>
              <Image1 src={tick} />
              <span>
                Professionals looking for a career change in IT Sector
              </span>
            </SPAN2>
            <br />
            <SPAN2>
              <Image1 src={tick} />
              <span>
                Freshers aiming for a career in AI and Data Science field
              </span>
            </SPAN2>
            <br />
            <SPAN2>
              <Image1 src={tick} />
              <span>
                Engineers, Marketing, and Healthcare professionals willing to
                learn Data Science{" "}
              </span>
            </SPAN2>
            <br />
            <SPAN2>
              <Image1 src={tick} />
              <span>
                Students aiming to secure their career in Data Science
              </span>
            </SPAN2>
            <br />
          </Col1>
        </Row2>
      </Wrapper4>
    </>
  );
}

export default CourseOverview;
const Wrapper1 = styled(Container)`
  min-height: 698px;
  background: #36374d;
  padding-bottom: 3rem;
`;
const Wrapper2 = styled(Container)`
  min-height: 493.17px;
  background: #ffffff;
  position: relative;
  padding-top: 6rem;
`;
const Wrapper4 = styled(Container)`
  min-height: 493.17px;
  background: #fbf9f8;
`;
const Row1 = styled(Row)`
  width: 83%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 3rem;
  @media (max-width: 480px) {
    width: 100%;
  }
`;
const Row2 = styled(Row)`
  background: #ffffff;
  box-shadow: 0px 10px 21px -5px rgba(196, 204, 214, 0.48);
  border-radius: 3px;
  border-top: 3.07px solid #383b41;
  min-height: 312.64px;
  margin-top: 3rem;

  width: 83%;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 480px) {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
`;
const Row3 = styled(Row)`
  width: 83%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  padding-top: 3rem;
  gap: 10px;
  @media (max-width: 480px) {
    width: 100%;
  }
`;
const Row4 = styled(Row)`
  max-width: 701.48px;
  min-height: 390px;
  background: #ffffff;
  box-shadow: 0px 10px 21px -5px rgba(196, 204, 214, 0.48);
  border-radius: 3px;
  border-top: 3.44px solid #383b41;
  margin-top: 3rem;
  margin-bottom: 4rem;
  padding: 30px;
`;
const Row5 = styled(Row)`
  max-width: 383px;
  min-height: 559px;
  display: flex;
  flex-direction: column;
  background: #fcaf17;
  border-radius: 6px;
`;
const Row6 = styled.div`
  // display:flex;
  // justify-content:center;
`;
// top
const Row9 = styled(Row)`
  width: 83%;
  min-height: 113.66px;

  background: #ffffff;
  top: -5%;
  left: 8%;
  box-shadow: 0px 26px 27px -8px rgba(214, 222, 230, 0.25);
  border-radius: 6px;
  border-bottom: 3.29px solid #fcaf17;
  position: absolute;
  //   display: flex;
  //   padding-top: 3rem;
  //   gap: 10px;
    @media (max-width: 870px) {
      flex-direction:column;
      display:flex;
      gap:20px;
  left: 0;
  width:100%;


      justify-content:center;
  position: relative;
  margin-left: auto;
  margin-right: auto;

    }
    @media (max-width: 480px) {
        width:100%
    }
`;
const Col7 = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Col8 = styled(Col)`
display: flex;
  justify-content: center;
  align-items: center;
  background: #373B41;
box-shadow: 0px 26px 27px rgba(214, 222, 230, 0.25);
`;
const Col9 = styled(Col)``;
const Col10 = styled(Col)``;

const SPAN14 = styled.span`
  display: flex;
  gap: 20px;
`;
const SPAN15 = styled.span`
font-family: 'Metropolis';
font-style: normal;
font-weight: 400;
font-size: 14px;
display: flex;
  gap: 20px;
line-height: 26px;
/* identical to box height, or 186% */

text-transform: capitalize;

color: #FFFFFF;
`;

const SPAN16 = styled.span``;

// wrapper1
const Row7 = styled(Row)`
  width: 83%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  padding-top: 3rem;
  gap: 10px;
  @media (max-width: 1025px) {
    margin-top: 5rem;
  }
  @media (max-width: 640px) {
    flex-direction: column;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;
const Row8 = styled(Row)`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;
const Col6 = styled(Col)`
  display: flex;
  // justify-content:space-between;
  gap: 20px;
  align-items: center;
  @media (max-width: 430px) {
    margin-top: 10px;
  }
`;

const Col4 = styled(Col)`
  flex: 2;
`;
const Col5 = styled(Col)`
  flex: 1;
`;
const SPAN8 = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  /* identical to box height, or 162% */
  display: flex;
  text-transform: capitalize;
  max-width: 606px;
  color: #ffffff;
`;
const SPAN9 = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 600;
  font-size: 56px;
  line-height: 60px;
  /* or 107% */

  color: #fcaf17;
`;
const SPAN10 = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
  /* identical to box height, or 144% */

  text-transform: capitalize;

  color: #ffffff;
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
const SPAN13 = styled.span``;
const Image3 = styled.img`
  @media (max-width: 640px) {
    width: 100%;
  }
`;

const Button2 = styled(Button)`
  width: 229px;
  min-height: 52px;
  background: #fcaf17;
  border-radius: 3px;
`;
//

const Col1 = styled(Col)`
  //   padding: 40px 10px 10px 42px;
  padding: 80px;

  @media (max-width: 850px) {
    padding: 55px;
  }
  @media (max-width: 480px) {
    padding: 40px;
  }
`;
const Col2 = styled(Col)`
  flex: 2;
`;
const Col3 = styled(Col)`
  flex: 1;
`;

const Button1 = styled(Button)`
  background: #383b41;
  border-radius: 5px;
  max-width: 149.98px;
  min-height: 48px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 2rem;
  @media (max-width: 407px) {
    margin-left: 1rem;
  }
`;
// span
const SPAN1 = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  /* identical to box height, or 125% */

  text-transform: capitalize;

  color: #303030;
`;
const SPAN2 = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  /* or 162% */
  display: flex;
  gap: 20px;
  text-transform: capitalize;

  color: #303030;
`;
const SPAN3 = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  /* identical to box height, or 125% */

  text-transform: capitalize;

  color: #303030;
`;
const Bold = styled.span`
  font-weight: 700;
`;
const Bold1 = styled.span`
  font-weight: 900;
  color:#FCAF17;
  font-size: 25px;
`;
const SPAN5 = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  /* or 175% */

  text-transform: capitalize;
  max-width: 657.28px;
  color: #303030;
`;
const SPAN6 = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  /* identical to box height, or 125% */

  text-transform: capitalize;

  color: #303030;
`;
const SPAN7 = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 89%;
  /* or 14px */

  text-transform: capitalize;

  color: #ffffff;
`;

const Image1 = styled.img`
  max-width: 20.04px;
  max-height: 20.04px;
`;
const Image2 = styled.img`
  // min-width:383.36px;
  // max-height:20.04px
  padding: 0px; ;
`;
const Image4 = styled.img`
  max-width:51.36px;
  max-height:51.15px;
  margin-top: 16px;
  
`;
const Input = styled.input`
  min-width: 328.43px;
  min-height: 50px;
  background: #ffffff;
  margin-top: 2rem;
  border-radius: 4px;
  border: none;
  padding-left: 1rem;
  margin-left: 1rem;
  @media (max-width: 780px) {
    // min-width:100%;
  }
  @media (max-width: 407px) {
    min-width: 100%;
    margin-left: 0;
  }
`;
const PhoneInput1 = styled(PhoneInput)`
  max-width: 328.43px;
  min-height: 50px;
  background: #ffffff;
  border-radius: 4px;
  margin-top: 2rem;
  margin-left: 1rem;

  border: none;
  & .form-control {
    height: 50px;
  }

  @media (max-width: 407px) {
    min-width: 300px;
    margin-left: 0;
  }
  @media (max-width: 370px) {
    min-width: 250px;
  }
`;
