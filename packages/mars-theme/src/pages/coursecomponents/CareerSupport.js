import { styled } from 'frontity';
import React from 'react'
import { Button, Container, Row } from 'react-bootstrap';

function CareerSupport() {
  return (
    <Wrapper fluid>
        <Row1>
            <SPAN1>Career Support</SPAN1>
        </Row1>
        <Row1>
            <Row2>
                <Button1>
                    <SPAN2>Placement</SPAN2>
                </Button1>
                <Button2>
                    <SPAN2>Internship</SPAN2>
                </Button2>
            </Row2>
        </Row1>
    </Wrapper>
  )
}

export default CareerSupport;
const Wrapper = styled(Container)`
background: #F7FBFF;
max-width:1456px;
min-height:661.67px;
`;
const Row1 = styled(Row)`
width:83%;
margin-left:auto;
margin-right:auto;
`;
const Row2 = styled(Row)`
padding:10px;
max-width:467.54px;
min-height:61.55px;
margin-left:auto;
margin-right:auto;
margin-top:2rem;
background: #FFFFFF;
border: 1px solid #E3E3E3;
box-shadow: 0px 15px 15px -8px rgba(221, 229, 237, 0.74);
border-radius: 7px;
`;
const Button1 = styled(Button)`
width:221.13px;
`;
const Button2 = styled(Button)`
width:221.13px;

`;

const SPAN1 = styled.span`
font-family: 'Metropolis';
font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 40px;
/* identical to box height, or 125% */
text-align:center;
text-transform: capitalize;
margin-top:2rem;
color: #303030;
`;
const SPAN2 = styled.span`
font-family: 'Metropolis';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 40px;
/* identical to box height, or 222% */

text-transform: capitalize;

color: #FFFFFF;`;
const SPAN3 = styled.span``;

