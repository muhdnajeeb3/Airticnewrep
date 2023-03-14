import { styled } from 'frontity';
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2';
import Arr from '../courseimages/Arrow 20.png';


function Enquiry() {
  return (
    <Wrapper fluid>
      <Row1>
        <Col1>
        <SPAN1>What is included in this course?</SPAN1>
        <br />
        <SPAN2 style={{marginTop:'30px'}}>
          <Image1 src={Arr}/>
        <span>Live Trainings</span>
        </SPAN2>
        <br />
        <SPAN2>
          <Image1 src={Arr}/>
        <span>Internships & Guaranteed interviews </span>
        </SPAN2>
        <br />
        <SPAN2>
          <Image1 src={Arr}/>
        <span>Expert Mentoring</span>
        </SPAN2>
        <br />
        <SPAN2>
          <Image1 src={Arr}/>
        <span>Flexible payment plans </span>
        </SPAN2>
        <br />
        <SPAN2>
          <Image1 src={Arr}/>
        <span>Curriculum designed by industry experts</span>
        </SPAN2>
        <br />
        <SPAN2>
          <Image1 src={Arr}/>
        <span>Internationally valued certification</span>
        </SPAN2>
        <br />
        </Col1>
        <Col2>
        <SPAN3>
        I’m Interested in This Program
        </SPAN3>
        <br />
        <Input1 type='text' placeholder='Full Name'/>
        <PhoneInput1
              country={"in"}
              specialLabel={""}
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
        <Input1 type='email' placeholder='Email'/>
        <Button1 variant='warning'><SPAN4>Download Curriculum</SPAN4></Button1>
        <SPAN5>
        By providing your contact details, you agree to our Terms of Use & Privacy Policy
        </SPAN5>
        </Col2>
      </Row1>
    </Wrapper>
  )
}

export default Enquiry;

// css
// wrapper
const Wrapper = styled(Container)`
background:#ffffff;
padding-bottom:5rem;
`;
// row
const Row1 = styled(Row)`
width:83%;
margin-left:auto;
margin-right:auto;
display:flex;

@media(max-width:480px){
  width:100%;
  
  }
`;
const Col1 = styled(Col)`
background: linear-gradient(93.18deg, #FFD583 -6.41%, #F4A304 91.86%);
border-radius: 10px 0px 0px 10px;
min-height:472.76px;
padding: 50px 0 0 46px;
// flex: 1 0 40%;

`;
const Col2 = styled(Col)`
background: #FFFFFF;
box-shadow: 5px 6px 23px -5px rgba(208, 212, 216, 0.63);
border-radius: 0px 10px 10px 0px;
min-height:472.76px;
display:flex;
flex-direction:column;
justify-content:center;
padding:50px 10px 0 30px;
border-top:6px solid #36374D;

`;
const Button1 =styled(Button)`
background: linear-gradient(93.18deg, #FFD583 -6.41%, #F4A304 91.86%);
border-radius: 4px;
margin-top:25px;
width:202.28px;
height:48px;
margin-left:auto;
margin-right:auto;
@media(min-width:1400px){
  margin-left:4.2rem;

}
`;
const SPAN1 = styled.span`
font-family: 'Metropolis';
font-style: normal;
font-weight: 600;
font-size: 28px;
line-height: 28px;
/* identical to box height, or 100% */

text-transform: capitalize;
padding-bottom: 20px;

color: #FFFFFF;
`;
// span
const SPAN2 = styled.span`
font-family: 'Metropolis';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 28px;
/* or 140% */
display:flex;
gap:20px;
text-transform: capitalize;
margin-top: 10px;
color: #FFFFFF;

`;
const SPAN3 = styled.span`
font-family: 'Metropolis';
font-style: normal;
font-weight: 600;
font-size: 28px;
line-height: 28px;
/* identical to box height, or 100% */
text-align:center;
text-transform: capitalize;


`;
const SPAN4 = styled.span`
font-family: 'Metropolis';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 89%;
/* or 12px */

letter-spacing: -0.015em;

color: #383B40;
`;
const SPAN5 = styled.span`
font-family: 'Metropolis';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 20px;
/* or 167% */
// margin-left:4.2rem;
margin-bottom:4.2rem;
margin-top:1.2rem;
text-transform: capitalize;
text-align:center;
color: #707070;

`;
const SPAN6 = styled.span``;
// images
const Image1 = styled.img`
max-width:16.85px;
max-height: 29px;
`;
// input
const Input1 = styled.input`
width:421px;
height:48px;
background: #FAFAFA;
border: 1px solid #DEDEDE;
border-radius: 4px;
padding-left:15px;
margin-top:15px;
margin-left:auto;
margin-right:auto;
@media(max-width:600px){
width:100%;

}
`;
const PhoneInput1 = styled(PhoneInput)`
width:421px;
height:48px;
background: #FAFAFA;
border: 1px solid #DEDEDE;
border-radius: 4px;
padding-left:15px;
margin-top:15px;
margin-left:auto;
margin-right:auto;
  & .form-control {
    height: 46px;
    border:none;
// width:421px;
@media(max-width:600px){
  width:100%;
  
  }

  }
  @media(max-width:600px){
    width:100%;
    
    }

  // @media (max-width: 407px) {
  //   min-width: 300px;
  // }
  // @media (max-width: 370px) {
  //   min-width: 250px;
  // }
`;

