import { styled } from "frontity";
import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import v from "../courseimages/v.png";
function Questions() {
  const [open, setOpen] = useState({});

  const onToggle = (id) => {
    setOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  return (
    <Wrapper fluid>
      <Row1>
        <SPAN1>
          Frequently Asked <SPAN2>Questions</SPAN2>
        </SPAN1>
        <Row2>
          <Details onClick={() => onToggle(1)}>
            <Summary>
              <span>Why should I join the Data Science program?</span>
              <Div rotated={open[1]}>
                <img src={v} alt="" />
              </Div>
            </Summary>
            <P className="details-content">
              Data science isn’t just the way of the future, it’s the way of
              right now! It is being adopted in all sorts of industries, from
              health care to route planning, marketing &amp; sales to banking
              industries and beyond. Even industries such as retail that you
              might not associate with big data are getting on board. Data
              science is the fuel of the 21st Century.
            </P>
          </Details>
          <hr />
          <Details onClick={() => onToggle(2)}>
            <Summary>
              <span>
                Why should I sign up for this Data Science and AI certification
                course?
              </span>
              <Div rotated={open[2]}>
                <img src={v} alt="" />
              </Div>
            </Summary>
            <P className="details-content">
              Data science isn’t just the way of the future, it’s the way of
              right now! It is being adopted in all sorts of industries, from
              health care to route planning, marketing &amp; sales to banking
              industries and beyond. Even industries such as retail that you
              might not associate with big data are getting on board. Data
              science is the fuel of the 21st Century.
            </P>
          </Details>
          <hr />
          <Details onClick={() => onToggle(3)}>
            <Summary>
              <span>What if I fail to attend one or more lectures? </span>
              <Div rotated={open[3]}>
                <img src={v} alt="" />
              </Div>
            </Summary>
            <P className="details-content">
              Data science isn’t just the way of the future, it’s the way of
              right now! It is being adopted in all sorts of industries, from
              health care to route planning, marketing &amp; sales to banking
              industries and beyond. Even industries such as retail that you
              might not associate with big data are getting on board. Data
              science is the fuel of the 21st Century.
            </P>
          </Details>
          <hr />
          <Details onClick={() => onToggle(4)}>
            <Summary>
              <span>What will be the duration of the campus Immersion?</span>
              <Div rotated={open[4]}>
                <img src={v} alt="" />
              </Div>
            </Summary>
            <P className="details-content">
              Data science isn’t just the way of the future, it’s the way of
              right now! It is being adopted in all sorts of industries, from
              health care to route planning, marketing &amp; sales to banking
              industries and beyond. Even industries such as retail that you
              might not associate with big data are getting on board. Data
              science is the fuel of the 21st Century.
            </P>
          </Details>
          <hr />
          <Details onClick={() => onToggle(5)}>
            <Summary>
              <span>What if I fail to attend the classes?</span>
              <Div rotated={open[5]}>
                <img src={v} alt="" />
              </Div>
            </Summary>
            <P className="details-content">
              Data science isn’t just the way of the future, it’s the way of
              right now! It is being adopted in all sorts of industries, from
              health care to route planning, marketing &amp; sales to banking
              industries and beyond. Even industries such as retail that you
              might not associate with big data are getting on board. Data
              science is the fuel of the 21st Century.
            </P>
          </Details>
          <hr />
          <Details onClick={() => onToggle(6)}>
            <Summary>
              <span>
                How does Data Science differ from Big Data and Data Analytics?
              </span>
              <Div rotated={open[6]}>
                <img src={v} alt="" />
              </Div>
            </Summary>
            <P className="details-content">
              Data science isn’t just the way of the future, it’s the way of
              right now! It is being adopted in all sorts of industries, from
              health care to route planning, marketing &amp; sales to banking
              industries and beyond. Even industries such as retail that you
              might not associate with big data are getting on board. Data
              science is the fuel of the 21st Century.
            </P>
          </Details>
          <hr />
          <Details onClick={() => onToggle(7)}>
            <Summary>
              <span>What can I expect from the Data Science program?</span>
              <Div rotated={open[7]}>
                <img src={v} alt="" />
              </Div>
            </Summary>
            <P className="details-content">
              Data science isn’t just the way of the future, it’s the way of
              right now! It is being adopted in all sorts of industries, from
              health care to route planning, marketing &amp; sales to banking
              industries and beyond. Even industries such as retail that you
              might not associate with big data are getting on board. Data
              science is the fuel of the 21st Century.
            </P>
          </Details>
          <hr />
          <Details onClick={() => onToggle(8)}>
            <Summary>
              <span>Who can join the program?</span>
              <Div rotated={open[8]}>
                <img src={v} alt="" />
              </Div>
            </Summary>
            <P className="details-content">
              Data science isn’t just the way of the future, it’s the way of
              right now! It is being adopted in all sorts of industries, from
              health care to route planning, marketing &amp; sales to banking
              industries and beyond. Even industries such as retail that you
              might not associate with big data are getting on board. Data
              science is the fuel of the 21st Century.
            </P>
          </Details>
          <hr />
          <Details onClick={() => onToggle(9)}>
            <Summary>
              <span>
                Do I need prior experience in coding to learn the program?
              </span>
              <Div rotated={open[9]}>
                <img src={v} alt="" />
              </Div>
            </Summary>
            <P className="details-content">
              Data science isn’t just the way of the future, it’s the way of
              right now! It is being adopted in all sorts of industries, from
              health care to route planning, marketing &amp; sales to banking
              industries and beyond. Even industries such as retail that you
              might not associate with big data are getting on board. Data
              science is the fuel of the 21st Century.
            </P>
          </Details>
          <hr />
          <Details onClick={() => onToggle(10)}>
            <Summary>
              <span>
                What are the current capabilities of Artificial Intelligence
                (AI)?
              </span>{" "}
              <Div rotated={open[10]}>
                <img src={v} alt="" />
              </Div>
            </Summary>
            <P className="details-content">
              Data science isn’t just the way of the future, it’s the way of
              right now! It is being adopted in all sorts of industries, from
              health care to route planning, marketing &amp; sales to banking
              industries and beyond. Even industries such as retail that you
              might not associate with big data are getting on board. Data
              science is the fuel of the 21st Century.
            </P>
          </Details>
          <hr />
          <Details onClick={() => onToggle(11)}>
            <Summary>
              <span>What is the future of Artificial Intelligence (AI)?</span>
              <Div rotated={open[11]}>
                <img src={v} alt="" />
              </Div>
            </Summary>
            <P className="details-content">
              Data science isn’t just the way of the future, it’s the way of
              right now! It is being adopted in all sorts of industries, from
              health care to route planning, marketing &amp; sales to banking
              industries and beyond. Even industries such as retail that you
              might not associate with big data are getting on board. Data
              science is the fuel of the 21st Century.
            </P>
          </Details>
          <hr />
          <Details onClick={() => onToggle(12)}>
            <Summary>
              <span>What is Tensor Flow?</span>
              <Div rotated={open[12]}>
                <img src={v} alt="" />
              </Div>
            </Summary>
            <P className="details-content">
              Data science isn’t just the way of the future, it’s the way of
              right now! It is being adopted in all sorts of industries, from
              health care to route planning, marketing &amp; sales to banking
              industries and beyond. Even industries such as retail that you
              might not associate with big data are getting on board. Data
              science is the fuel of the 21st Century.
            </P>
          </Details>
          <hr />
          <Details onClick={() => onToggle(13)}>
            <Summary>
              <span>Can a data analyst become a data scientist?</span>
              <Div rotated={open[13]}>
                <img src={v} alt="" />
              </Div>
            </Summary>
            <P className="details-content">
              Data science isn’t just the way of the future, it’s the way of
              right now! It is being adopted in all sorts of industries, from
              health care to route planning, marketing &amp; sales to banking
              industries and beyond. Even industries such as retail that you
              might not associate with big data are getting on board. Data
              science is the fuel of the 21st Century.
            </P>
          </Details>
          <hr />
          <Details onClick={() => onToggle(14)}>
            <Summary>
              <span>Should I study Data Analytics or Data Science?</span>
              <Div rotated={open[14]}>
                <img src={v} alt="" />
              </Div>
            </Summary>
            <P className="details-content">
              Data science isn’t just the way of the future, it’s the way of
              right now! It is being adopted in all sorts of industries, from
              health care to route planning, marketing &amp; sales to banking
              industries and beyond. Even industries such as retail that you
              might not associate with big data are getting on board. Data
              science is the fuel of the 21st Century.
            </P>
          </Details>
          <hr />
          <Details onClick={() => onToggle(15)}>
            <Summary>
              <span>How tough is deep learning?</span>
              <Div rotated={open[15]}>
                <img src={v} alt="" />
              </Div>
            </Summary>
            <P className="details-content">
              Data science isn’t just the way of the future, it’s the way of
              right now! It is being adopted in all sorts of industries, from
              health care to route planning, marketing &amp; sales to banking
              industries and beyond. Even industries such as retail that you
              might not associate with big data are getting on board. Data
              science is the fuel of the 21st Century.
            </P>
          </Details>
          <hr />
          <Details onClick={() => onToggle(16)}>
            <Summary>
              <span>Is Machine Learning a good career?</span>
              <Div rotated={open[16]}>
                <img src={v} alt="" />
              </Div>
            </Summary>
            <P className="details-content">
              Data science isn’t just the way of the future, it’s the way of
              right now! It is being adopted in all sorts of industries, from
              health care to route planning, marketing &amp; sales to banking
              industries and beyond. Even industries such as retail that you
              might not associate with big data are getting on board. Data
              science is the fuel of the 21st Century.
            </P>
          </Details>
        </Row2>
      </Row1>
    </Wrapper>
  );
}

export default Questions;
// css
// wrapper
const Wrapper = styled(Container)`
  background: #fff;
  padding-top: 4rem;
  padding-bottom: 3rem;
`;
const Row1 = styled(Row)`
  padding-top: 3rem;
  padding-bottom: 2rem;

  width: 83%;
  background: #f7fbff;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 480px) {
    width: 100%;
  }
`;
const Row2 = styled(Row)`
  max-width: 1078px;
  margin-top: 3rem;
  margin-bottom: 3rem;
  min-height: 1097.35px;
  margin-left: auto;
  margin-right: auto;
  background: #ffffff;
  border: 1px solid #e7e7e7;
  box-shadow: 0px 19px 24px -12px rgba(196, 204, 214, 0.55);
  border-radius: 10px;
`;
const Div = styled.div`
  transform: ${(props) => (props.rotated ? "rotate(-180deg)" : "")};
`;
const SPAN1 = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  /* identical to box height, or 125% */
  padding-left: 3rem;
  text-transform: capitalize;

  color: #303030;
`;
const SPAN2 = styled.span`
  font-weight: 700;
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
  z-index:1;
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
  //   transform: ${(props) =>
    props.open ? "rotate(-45deg)" : "rotate(135deg)"};
  //   transition: transform 0.3s ease-in-out;
    @media (max-width: 650px) {
      // margin-left: 18rem;
      position: relative;
      top: -26px;
    }
    @media (max-width: 380px) {
      // margin-left: 14.5rem;
      position: relative;
      top: -26px;
    }
  }
  details[open] > summary::after {
    transform: rotate(-40deg);
  }
  summary {
    list-style: none;
    display: flex;
  z-index:1;

    justify-content: space-between;
    @media (max-width: 650px) {
      display: block;
      justify-content: auto;
    }
  }

  color: #303030;
`;
const Summary = styled.summary`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  /* identical to box height, or 156% */
  display: flex;
  justify-content: space-between;
  text-transform: capitalize;
  padding-top: 10px;

  color: #303030;
`;
const P = styled.p`
  margin-top: 20px;
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 26px;
  /* or 186% */

  text-transform: capitalize;

  color: #303030;
  transition: max-height 0.3s ease-out;
  overflow: hidden;
`;
