import { styled } from 'frontity';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import isc from '../aboutimages/Group 739.png';
function UniversityCertificate() {
  return (
    <Wrapper1 fluid>
        <Row1>
            <SPAN1>
            International University Certification
            </SPAN1>
            <br />
            <SPAN2>
            A certification from AUX, the university extension of Acacia University, USA, gives more value than an ordinary organisation certification
            </SPAN2>

        </Row1>
        <Row2>
        <Col1>
            <Image src={isc} />
            <SPAN3>Machine Learning</SPAN3>
          </Col1>
          <Col1>
            <Image src={isc} />
            <SPAN3>Machine Learning</SPAN3>
          </Col1><Col1>
            <Image src={isc} />
            <SPAN3>Machine Learning</SPAN3>
          </Col1><Col1>
            <Image src={isc} />
            <SPAN3>Machine Learning</SPAN3>
          </Col1><Col1>
            <Image src={isc} />
            <SPAN3>Machine Learning</SPAN3>
          </Col1><Col1>
            <Image src={isc} />
            <SPAN3>Machine Learning</SPAN3>
          </Col1><Col1>
            <Image src={isc} />
            <SPAN3>Machine Learning</SPAN3>
          </Col1>
        </Row2>


    </Wrapper1>
  )
}

export default UniversityCertificate;

// css
const Wrapper1 = styled(Container)`
min-height:724px;
background: #FBF9F8;
`;
const Row1 = styled(Row)`
width: 90%;
margin-left: auto;
margin-right: auto;
display:flex;
padding-top:4rem;
justify-content:center;
// @media(max-width:565px) {
//   width:100%;
//   flex-direction:column;

// }
`;
const Row2 = styled(Row)`
width: 90%;
margin-top:3rem;
margin-left: auto;
margin-right: auto;
justify-content:center;
display:flex;
flex-wrap: wrap;
  gap: 50px;

`;

//span
const SPAN1 = styled.span`
font-family: 'Metropolis';
font-style: normal;
font-weight: 600;
font-size: 36px;
line-height: 50px;
/* identical to box height, or 139% */

text-align: center;

color: #000000;`;
const SPAN2 = styled.span`
max-width:634px;
font-family: 'Metropolis';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 28px;
/* or 175% */

text-align: center;

color: #303030;
`;
const SPAN3 = styled.span`
font-family: "Metropolis";
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */

text-align: center;
text-transform: capitalize;
width: 194px;
color: #303030;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, 73%);
`;
const Col1 = styled(Col)`
  min-width: 221.13px;
  max-width: 221.13px;
  height: 194.77px;
  background: #ffffff;
  box-shadow: 0px 12px 16px -6px rgba(208, 214, 222, 0.25);
  border-radius: 12px;
  position: relative;
  &:hover {
    background: #fcaf17;
  }
`;
const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -98%);
`;
