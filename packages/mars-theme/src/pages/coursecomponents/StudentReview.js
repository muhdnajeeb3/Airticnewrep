import { styled } from "frontity";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import LeftArrow from "../coursecomponents/LeftArrow";
import RightArrow from "../coursecomponents/RightArrow";
import vyd from "../courseimages/vyd.png";
import star from "../courseimages/star.png";
import pj from "../courseimages/pj.png";
import mh from "../courseimages/mh.png";
import bir from "../courseimages/bir.png";
import ic from "../courseimages/ic.png";
import hrp from "../courseimages/hrp.png";
function StudentReview() {
  const settings = {
    dots: true,
    infinite: false,
    // centerMode: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    // arrows: false,
    prevArrow: <LeftArrow />,
    nextArrow: <RightArrow />,
    responsive: [
      {
        breakpoint: 1074,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: false,
        },
      },

      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Wrapper fluid>
        <Row1>
          <SPAN1>
            Student <SPAN2>Reviews</SPAN2>
          </SPAN1>
          <SPAN3>
            Topics Covered: Data Science, Mathematics, Python Programming, Data
            Analytics Visualization, Machine learning, Artificial Intelligence,
            Business Intelligence-Powerbi, Database management.
          </SPAN3>
          <Sliderwrapper {...settings}>
            <Card1>
              <Row2>
                <Col1>
                  <Image src={vyd} />
                </Col1>
                <Col2>
                  <SPAN4>Veeraiah Yadav Doddaka</SPAN4>
                  <br />
                  <SPAN5>IT Manager, Samsung</SPAN5>
                  <br />
                  <Image1 src={star} />
                </Col2>
              </Row2>
              <Row3>
                <SPAN6>
                  I choose to learn Data Science and explored many options on
                  which institute to join, among that what I found is Airtics as
                  the best in terms of the course curriculum/on line content
                  they designed and most.....
                </SPAN6>
              </Row3>
              <Row4>
                <SPAN7>Read More</SPAN7>
              </Row4>
            </Card1>
            <Card1>
              <Row2>
                <Col1>
                  <Image src={pj} />
                </Col1>
                <Col2>
                  <SPAN4>Prasad Joshi</SPAN4>
                  <br />
                  <SPAN5>RF Optimization Engineer, Nokia</SPAN5>
                  <br />
                  <Image1 src={star} />
                </Col2>
              </Row2>
              <Row3>
                <SPAN6>
                  I was a Data Science student at Airtics Education, which
                  helped build a solid data science background and sharpen my
                  programming skills...
                </SPAN6>
              </Row3>
              <Row4>
                <SPAN7>Read More</SPAN7>
              </Row4>
            </Card1>
            <Card1>
              <Row2>
                <Col1>
                  <Image src={mh} />
                </Col1>
                <Col2>
                  <SPAN4>Mohamed Hanan</SPAN4>
                  <br />
                  <SPAN5>Procurement Assistant</SPAN5>
                  <br />
                  <Image1 src={star} />
                </Col2>
              </Row2>
              <Row3>
                <SPAN6>
                  The program in Data Science offered by Airtics Education is
                  rigorous and has provided me with a greater understanding of
                  the data science world...
                </SPAN6>
              </Row3>
              {/* <Row4> */}
              <SPAN7>Read More</SPAN7>
              {/* </Row4> */}
            </Card1>
          </Sliderwrapper>
        </Row1>
      </Wrapper>
      <Wrapper1 fluid>
        <Row5>
          <SPAN8>Projects</SPAN8>
          <br />
          <SPAN9>
            Projects will be a part of your Certification in Data Science With
            Python to consolidate your learning. It will ensure that you have
            real-world experience in Data Science With Python.
          </SPAN9>
        </Row5>
        <Row6>
          <Cols>
            <Div1>
              <Images1 src={hrp} />
            </Div1>
            <SPAN10>House rental Prediction</SPAN10>
          </Cols>
          <Cols>
            <Div1>
              <Images1 src={ic} />
            </Div1>

            <SPAN10>Image Classification</SPAN10>
          </Cols>
          <Cols>
            <Div1>
              <Images1 src={bir} />
            </Div1>

            <SPAN10>Business insights reporting</SPAN10>
          </Cols>
        </Row6>
      </Wrapper1>
    </>
  );
}

export default StudentReview;
const Wrapper = styled(Container)`
  background: #f7fbff;
  min-height: 793.62px;
  @media (max-width: 430px) {
    min-height: 993.62px;
  }
`;
const Wrapper1 = styled(Container)`
  background: #ffffff;
  //   min-height: 793.62px;
  //   @media(max-width:430px){
  //     min-height: 993.62px;

  //   }
`;
const Sliderwrapper = styled(Slider)`
  max-width: 85%;
  margin-top: 3rem;
  margin-left: auto;
  margin-right: auto;

  .slick-slide {
    margin: 10px 7px;
  }
  .slick-track {
    display: flex;
  }
  /* the parent */
  //   .slick-list {
  //     margin: 0 -27px;
  //   }
`;
const Row1 = styled(Row)`
  background: #f7fbff;
  max-width: 1440px;
  margin-left:auto;
  margin-right:auto;
  // min-height:693.62px;
`;
const Row2 = styled(Row)`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  // min-height:693.62px;
  @media (max-width: 430px) {
    flex-direction: column;
  }
`;
const Row3 = styled(Row)`
  padding: 25px;
`;
const Row4 = styled(Row)``;
const Row5 = styled(Row)`
  width: 83%;
  padding-top: 3rem;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 1458px) {
    max-width: 1456px;

  }
`;
const Row6 = styled(Row)`
  width: 83%;
  padding-top: 5rem;
  padding-bottom: 5rem;
  padding-left: 55px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  gap: 5rem;
  flex-wrap: wrap;
  @media (min-width: 1458px) {
    max-width: 1456px;

  }
  @media (max-width: 430px) {
    padding-left: 25px;
  }
`;
const Col1 = styled(Col)`
  width: 75px;
  padding: 20px;
  flex: 1 1 8%;
`;
const Col2 = styled(Col)`
  padding: 20px;
  flex: 2;
`;
const Cols = styled(Col)`
  position: relative;
  max-width: 304.51px;
  min-width: 304.51px;
  min-height: 62.39px;
  background: #f7fbff;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 430px) {
    max-width: 300px;
    min-width: 280px;
  }
`;
const Card1 = styled(Card)`
  width: 366px;
  position: relative;
  min-height: 325.07px;
  border-top: 6px solid #f5a508;
  background: #ffffff;
  box-shadow: 0px 10px 20px -13px rgba(172, 189, 205, 0.73);
  border-radius: 4px;
  @media (min-width: 1075px) and (max-width: 1325px) {
    min-height: 365.07px;
  }
  @media (min-width: 701px) and (max-width: 880px) {
    min-height: 355.07px;
  }
`;
const Div1 = styled.div`
  position: absolute;
  top: -8px;
  left: -41px;
`;
const Div2 = styled.div``;
const Div3 = styled.div``;
const SPAN1 = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  /* identical to box height, or 125% */
  text-align: center;
  margin-top: 5rem;
  text-transform: capitalize;
  color: #303030;
`;
const SPAN2 = styled.span`
  font-weight: 700;
`;
const SPAN3 = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  margin-top: 2rem;
  max-width: 818.53px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  /* or 175% */

  text-align: center;
  text-transform: capitalize;

  color: #303030;
`;
const SPAN4 = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height, or 133% */

  color: #303030;
  @media (max-width: 430px) {
    margin-left: 1.5rem;
  }
`;
const SPAN5 = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */

  color: #303030;
  @media (max-width: 430px) {
    margin-left: 1.5rem;
  }
`;
const SPAN6 = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  /* or 171% */
  padding-bottom: 1rem;
  color: #303030;
`;
const SPAN7 = styled.span`
  text-align: end;
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */
  padding-right: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  text-decoration-line: underline;
  position: absolute;
  bottom: 0;
  right: 0;

  color: #f5a508;
`;
const SPAN8 = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  /* identical to box height, or 125% */

  text-transform: capitalize;

  color: #303030;
`;
const SPAN9 = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  /* or 175% */
  max-width: 818.53px;
  text-transform: capitalize;
  margin-top: 1rem;
  color: #303030;
`;
const SPAN10 = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  /* identical to box height, or 156% */

  text-transform: capitalize;

  color: #303030;
`;

const Image = styled.img`
  padding-left: 2rem;
  @media (min-width: 1028px) {
    width: 100%;
  }
`;
const Image1 = styled.img`
  margin-top: 15px;
  @media (max-width: 430px) {
    margin-left: 1.5rem;
  }
`;
const Images1 = styled.img``;
