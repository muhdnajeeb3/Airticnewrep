import { styled } from "frontity";
import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import arrow from "../courseimages/arr.png";
import arr1 from "../courseimages/Yellow Arrow.png";
import PhoneInput from "react-phone-input-2";
// import "react-phone-number-input/style.css";

function CourseModules() {
  const [moduleOne, setModuleOne] = useState(true);
  const [moduleTwo, setModuleTwo] = useState(false);
  const [moduleThree, setModuleThree] = useState(false);
  const [moduleFour, setModuleFour] = useState(false);
  const [moduleFive, setModuleFive] = useState(false);
  const [moduleSix, setModuleSix] = useState(false);
  const [moduleSeven, setModuleSeven] = useState(false);
  const [value, setValue] = useState();

  return (
    <Wrapper fluid>
      <Row1>
        <SPAN1>
          Course <Bold>Modules</Bold>
        </SPAN1>
        <br />
        <SPAN2>
          Topics Covered: Data Science, Mathematics, Python Programming, Data
          Analytics Visualization, Machine learning, Artificial Intelligence,
          Business Intelligence-Powerbi, Database management.
        </SPAN2>
      </Row1>
      <Row2>
        <Row3>
          <Button1
            variant="warning"
            moduleone={moduleOne ? 1 : 0}
            onClick={() => setModuleOne(!moduleOne)}
          >
            Module 1
          </Button1>
          <Row4 onClick={() => setModuleOne(!moduleOne)}>
            <Div>
              <SPAN3>Core Python </SPAN3>
            </Div>
            <Div1>
              <Image moduleone={moduleOne ? 1 : 0} src={arrow} alt="" />
            </Div1>
          </Row4>
          {moduleOne ? (
            <>
              <Row5 moduleone={moduleOne ? 1 : 0}>
                <Image1 src={arr1} alt="" />
                <SPAN4>basics, conditional statements, loops</SPAN4>
              </Row5>
              <Row5 moduleone={moduleOne ? 1 : 0}>
                <Image1 src={arr1} alt="" />
                <SPAN4>lists, tuples, dictionaries, sets</SPAN4>
              </Row5>
              <Row5 moduleone={moduleOne ? 1 : 0}>
                <Image1 src={arr1} alt="" />
                <SPAN4>functions, classes</SPAN4>
              </Row5>
            </>
          ) : (
            ""
          )}
        </Row3>
        <Row3>
          <Button1
            variant="warning"
            moduleone={moduleTwo ? 1 : 0}
            onClick={() => setModuleTwo(!moduleTwo)}
          >
            Module 2
          </Button1>
          <Row4 onClick={() => setModuleTwo(!moduleTwo)}>
            <Div>
              <SPAN3>Python for data science </SPAN3>
            </Div>
            <Div1>
              <Image moduleone={moduleTwo ? 1 : 0} src={arrow} alt="" />
            </Div1>
          </Row4>
          {moduleTwo ? (
            <>
              <Row5 moduleone={moduleTwo ? 1 : 0}>
                <Image1 src={arr1} alt="" />
                <SPAN4>basics, conditional statements, loops</SPAN4>
              </Row5>
              <Row5 moduleone={moduleTwo ? 1 : 0}>
                <Image1 src={arr1} alt="" />
                <SPAN4>lists, tuples, dictionaries, sets</SPAN4>
              </Row5>
              <Row5 moduleone={moduleTwo ? 1 : 0}>
                <Image1 src={arr1} alt="" />
                <SPAN4>functions, classes</SPAN4>
              </Row5>
            </>
          ) : (
            ""
          )}
        </Row3>
        <Row3>
          <Button1
            variant="warning"
            moduleone={moduleThree ? 1 : 0}
            onClick={() => setModuleThree(!moduleThree)}
          >
            Module 3
          </Button1>
          <Row4 onClick={() => setModuleThree(!moduleThree)}>
            <Div>
              <SPAN3>Probability and statistics </SPAN3>
            </Div>
            <Div1>
              <Image moduleone={moduleThree ? 1 : 0} src={arrow} alt="" />
            </Div1>
          </Row4>
          {moduleThree ? (
            <>
              <Row5 moduleone={moduleThree ? 1 : 0}>
                <Image1 src={arr1} alt="" />
                <SPAN4>basics, conditional statements, loops</SPAN4>
              </Row5>
              <Row5 moduleone={moduleThree ? 1 : 0}>
                <Image1 src={arr1} alt="" />
                <SPAN4>lists, tuples, dictionaries, sets</SPAN4>
              </Row5>
              <Row5 moduleone={moduleThree ? 1 : 0}>
                <Image1 src={arr1} alt="" />
                <SPAN4>functions, classes</SPAN4>
              </Row5>
            </>
          ) : (
            ""
          )}
        </Row3>
        <Row3>
          <Button1
            variant="warning"
            moduleone={moduleFour ? 1 : 0}
            onClick={() => setModuleFour(!moduleFour)}
          >
            Module 4
          </Button1>
          <Row4 onClick={() => setModuleFour(!moduleFour)}>
            <Div>
              <SPAN3>Data cleaning and preprocessing</SPAN3>
            </Div>
            <Div1>
              <Image moduleone={moduleFour ? 1 : 0} src={arrow} alt="" />
            </Div1>
          </Row4>
          {moduleFour ? (
            <>
              <Row5 moduleone={moduleFour ? 1 : 0}>
                <Image1 src={arr1} alt="" />
                <SPAN4>basics, conditional statements, loops</SPAN4>
              </Row5>
              <Row5 moduleone={moduleFour ? 1 : 0}>
                <Image1 src={arr1} alt="" />
                <SPAN4>lists, tuples, dictionaries, sets</SPAN4>
              </Row5>
              <Row5 moduleone={moduleFour ? 1 : 0}>
                <Image1 src={arr1} alt="" />
                <SPAN4>functions, classes</SPAN4>
              </Row5>
            </>
          ) : (
            ""
          )}
        </Row3>
        <Row3>
          <Button1
            variant="warning"
            moduleone={moduleFive ? 1 : 0}
            onClick={() => setModuleFive(!moduleFive)}
          >
            Module 5
          </Button1>
          <Row4 onClick={() => setModuleFive(!moduleFive)}>
            <Div>
              <SPAN3>Introduction to machine learning</SPAN3>
            </Div>
            <Div1>
              <Image moduleone={moduleFive ? 1 : 0} src={arrow} alt="" />
            </Div1>
          </Row4>
          {moduleFive ? (
            <>
              <Row5 moduleone={moduleFive ? 1 : 0}>
                <Image1 src={arr1} alt="" />
                <SPAN4>basics, conditional statements, loops</SPAN4>
              </Row5>
              <Row5 moduleone={moduleFive ? 1 : 0}>
                <Image1 src={arr1} alt="" />
                <SPAN4>lists, tuples, dictionaries, sets</SPAN4>
              </Row5>
              <Row5 moduleone={moduleFive ? 1 : 0}>
                <Image1 src={arr1} alt="" />
                <SPAN4>functions, classes</SPAN4>
              </Row5>
            </>
          ) : (
            ""
          )}
        </Row3>
        <Row3>
          <Button1
            variant="warning"
            moduleone={moduleSix ? 1 : 0}
            onClick={() => setModuleSix(!moduleSix)}
          >
            Module 6
          </Button1>
          <Row4 onClick={() => setModuleSix(!moduleSix)}>
            <Div>
              <SPAN3>Unsupervised Machine learning </SPAN3>
            </Div>
            <Div1>
              <Image moduleone={moduleSix ? 1 : 0} src={arrow} alt="" />
            </Div1>
          </Row4>
          {moduleSix ? (
            <>
              <Row5 moduleone={moduleSix ? 1 : 0}>
                <Image1 src={arr1} alt="" />
                <SPAN4>basics, conditional statements, loops</SPAN4>
              </Row5>
              <Row5 moduleone={moduleSix ? 1 : 0}>
                <Image1 src={arr1} alt="" />
                <SPAN4>lists, tuples, dictionaries, sets</SPAN4>
              </Row5>
              <Row5 moduleone={moduleSix ? 1 : 0}>
                <Image1 src={arr1} alt="" />
                <SPAN4>functions, classes</SPAN4>
              </Row5>
            </>
          ) : (
            ""
          )}
        </Row3>
        <Row3>
          <Button1
            variant="warning"
            moduleone={moduleSeven ? 1 : 0}
            onClick={() => setModuleSeven(!moduleSeven)}
          >
            Module 7
          </Button1>
          <Row4 onClick={() => setModuleSeven(!moduleSeven)}>
            <Div>
              <SPAN3>ML Deployment</SPAN3>
            </Div>
            <Div1>
              <Image moduleone={moduleSeven ? 1 : 0} src={arrow} alt="" />
            </Div1>
          </Row4>
          {moduleSeven ? (
            <>
              <Row5 moduleone={moduleSeven ? 1 : 0}>
                <Image1 src={arr1} alt="" />
                <SPAN4>basics, conditional statements, loops</SPAN4>
              </Row5>
              <Row5 moduleone={moduleSeven ? 1 : 0}>
                <Image1 src={arr1} alt="" />
                <SPAN4>lists, tuples, dictionaries, sets</SPAN4>
              </Row5>
              <Row5 moduleone={moduleSeven ? 1 : 0}>
                <Image1 src={arr1} alt="" />
                <SPAN4>functions, classes</SPAN4>
              </Row5>
            </>
          ) : (
            ""
          )}
        </Row3>
      </Row2>
      <Row6>
        <SPAN5>Interested in This Program? Secure your spot now.</SPAN5>
        {/* <br /> */}
        <SPAN6>
          The application is free and takes only 5 minutes to complete.
        </SPAN6>
        <Row7>
          <Col1>
            <Input type="email" placeholder="Email" />
          </Col1>
          <Col1>
            <PhoneInput1
              country={"in"}
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
          </Col1>
          <Col1>
            <Button2 variant="dark">
              <SPAN7>Start Application</SPAN7>
            </Button2>
          </Col1>
        </Row7>
        <Row7>
          <SPAN8>
            By providing your contact details, you agree to our Terms of Use &
            Privacy Policy
          </SPAN8>
        </Row7>
      </Row6>
    </Wrapper>
  );
}

export default CourseModules;

// css
const Wrapper = styled(Container)`
  background: #ffffff;
  padding-bottom: 1rem;
`;
const Row1 = styled(Row)`
  padding-top: 4rem;
`;
const Row2 = styled(Row)`
  margin-top: 4rem;
  margin-bottom: 4rem;
`;
const Row3 = styled(Row)`
  display: flex;
  gap: 25px;
  justify-content: center;
  margin-top: 15px;
`;
const Row4 = styled(Row)`
  max-width: 635.21px;
  min-height: 65px;
  background: #f7fbff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 848px) {
    max-width: 450.21px;
  }
  @media (max-width: 660px) {
    max-width: 350.21px;
  }
  @media (max-width: 520px) {
    max-width: 235.21px;
  }
`;
const Row5 = styled(Row)`
  max-width: 635.21px;
  min-height: 65px;
  display: flex;
  // background: #F8AC17;
  align-items: center;
  animation: slow-motion 5s linear;
  margin-left: ${(props) => (props.moduleone ? "12.2rem" : "0")};

  @media (max-width: 850px) {
    margin-left: auto;
    margin-right: auto;
  }
  @media (max-width: 660px) {
    max-width: 515.21px;
  }
  @media (max-width: 480px) {
    margin-left: 3rem;
  }
  @keyframes slow-motion {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(3%);
    }
  }
`;
const Row6 = styled(Row)`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  // min-height:292px;
  background: linear-gradient(93.18deg, #ffd583 -6.41%, #f4a304 91.86%);
  border-radius: 10px;
  // transform: matrix(-1, 0, 0, 1, 0, 0);
  margin-bottom: 5rem;
`;
const Row7 = styled(Row)`
  margin-top: 2rem;
  margin-bottom: 1rem;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
`;
const Col1 = styled(Col)`
  max-width: 363.43px;
  min-height: 50px;
`;
const Col2 = styled(Col)``;
const Col3 = styled(Col)``;
const Button1 = styled(Button)`
  max-width: 181.74px;
  min-height: 65px;
  border: none;
  border-radius: 0;
  background: ${(props) => (props.moduleone ? "#F8AC17" : "#F7FBFF")};

  color: black;
  %:hover {
    background: #f8ac17;
  }

  @media (max-width: 600px) {
    max-width: 145.21px;
  }
  @media (max-width: 410px) {
    max-width: 95.21px;
  }
  @media (max-width: 360px) {
    max-width: 75.21px;
  }
`;
const Button2 = styled(Button)`
  background: #36374d;
  border-radius: 4px;
  min-width: 363.43px;
  min-height: 50px;
  @media (max-width: 407px) {
    width: 100%;
    min-width: 0;
  }
`;
const Phoneinput = styled(PhoneInput)`
  max-width: 28%;
  min-height: 50px;
`;

const Div = styled.div`
  width: 295px;
`;
const Div1 = styled.div`
  width: 32px;
`;
const SPAN1 = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  /* identical to box height, or 125% */
  text-align: center;

  text-transform: capitalize;

  color: #303030;
`;
const SPAN2 = styled.span`
  max-width: 818.53px;
  font-family: "Metropolis";
  padding-top: 1rem;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  /* or 175% */
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  text-transform: capitalize;

  color: #303030;
`;
const SPAN3 = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  /* identical to box height, or 156% */

  text-transform: capitalize;

  color: #303030;
`;
const SPAN4 = styled.span`
  width: 295px;
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  /* or 175% */

  text-transform: capitalize;

  color: #303030;
`;
const SPAN5 = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  min-height: 28px;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  /* identical to box height, or 117% */
  margin-top: 2rem;
  text-align: center;
  text-transform: capitalize;

  color: #000000;
`;
const SPAN6 = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  /* identical to box height, or 175% */
  margin-top: 1rem;
  text-align: center;
  text-transform: capitalize;

  color: #000000;
`;
const SPAN7 = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 28px;
  /* identical to box height, or 175% */

  text-align: center;
  text-transform: capitalize;

  color: #ffffff;
`;
const SPAN8 = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  /* identical to box height, or 200% */

  text-align: center;
  text-transform: capitalize;

  color: #303030;
`;
const Bold = styled.span`
  font-weight: 600;
`;
const Image1 = styled.img`
  width: 49.85px;
  @media (max-width: 480px) {
    width: 40.85px;
  }
`;
const Image = styled.img`
  transform: rotate(${(props) => (props.moduleone ? "" : "180deg")});
`;
// input
const Input = styled.input`
  min-width: 363.43px;
  min-height: 50px;
  background: #ffffff;
  border-radius: 4px;
  border: none;
  padding-left: 1rem;
  @media (max-width: 780px) {
    // min-width:100%;
  }
  @media (max-width: 407px) {
    min-width: 100%;
  }
`;

const PhoneInput1 = styled(PhoneInput)`
  min-width: 363.43px;
  min-height: 50px;
  background: #ffffff;
  border-radius: 4px;
  border: none;
  & .form-control {
    height: 50px;
  }

  @media (max-width: 407px) {
    min-width: 300px;
  }
  @media (max-width: 370px) {
    min-width: 250px;
  }
`;
