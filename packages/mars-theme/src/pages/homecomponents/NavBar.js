import { styled } from "frontity";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../images/LOGO.png";
import Logo2 from "../images/airtics.png";
import { Button } from "react-bootstrap";
function NavBar({ coursepage }) {
  const [mobile, setMobile] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <NavbarWrapper bg="" expand="lg" cp={coursepage ? 'true' : 'false'}>
        <Container style={{display:"flex",justifyContent:"space-between"}}>
          <Navbar.Brand
            href="/"
            style={{ display: "flex", justifyContent: "flex-start" }}
          >
            {mobile ? (
              <Image
                src={Logo2}
                alt="Logo"
                style={{ width: "166px", height: "52px" }}
              />
            ) : coursepage ? (
              <Image
                src={Logo2}
                alt="Logo"
                style={{ width: "166px", height: "52px" }}
              />
            ) : (
              <Image
                src={Logo}
                alt="Logo"
                style={{ width: "166px", height: "52px" }}
              />
            )}
            {/* <Image  alt="Logo"  style={{width:"166px",height:"52px"}}/> */}
          </Navbar.Brand>
          <StyledNavbarToggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{display:"flex",justifyContent:"space-between",marginLeft:'auto'}} >
              <Nav.Link href="/" >
                <SPAN1 style={{ color: coursepage ? "#ffffff" : "" }}>
                  Home
                </SPAN1>
              </Nav.Link>
              <Nav.Link href="/about">
                <SPAN1 style={{ color: coursepage ? "#ffffff" : "" }}>
                  About
                </SPAN1>
              </Nav.Link>
              <Nav.Link href="/about" style={{ color: "black" }}>
                <SPAN1 style={{ color: coursepage ? "#ffffff" : "" }}>
                  Our Programs
                </SPAN1>
              </Nav.Link>
              <Nav.Link href="/about">
                <SPAN1 style={{ color: coursepage ? "#ffffff" : "" }}>
                  Blogs
                </SPAN1>
              </Nav.Link>
              {coursepage ? (
                <>
                
              <Nav.Link href="/about">
                <SPAN1 style={{ color: coursepage ? "#ffffff" : "" }}>
                Coding Challenge '22
                </SPAN1>
              </Nav.Link>
              <Button1><SPAN2>Contact Us</SPAN2></Button1>

                </>
              ) : ''}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </NavbarWrapper>
    </>
  );
}

export default NavBar;

const NavbarWrapper = styled(Navbar)`
  position: relative;
  min-height: 5rem;
  padding-left: 50px;
  z-index: 11110;
  @media(min-width:1025px){
    width:${(props) => (props.cp === 'true' ? "90%" : "")};
  margin-left:${(props) => (props.cp === 'true' ? "auto" : "")};
  margin-right:${(props) => (props.cp === 'true' ? "auto" : "")};
  }

  @media (max-width: 1024px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    background: linear-gradient(
      265.64deg,
      #18191c 14.9%,
      #292c31 82.76%,
      #464a50 99.51%
    );
  }
`;
const Image = styled.img`
height: 52.15119552612305;
width: 166.99468994140625;
left: 117px;
top: 85px;
border-radius: 0px;
margin-left:30rem


position: absolute;
left: 8.12%;
right: 80.28%;
top: 0.67%;
bottom: 98.91%;


`;
const SPAN1 = styled.span`
  color: black;
  @media (max-width: 1024px) {
    color: #ffffff;
  }
`;
const SPAN2 = styled.span`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 21px;
/* identical to box height */


color: #FFFFFF;

`;
const Button1 =styled(Button)`
border: 1px solid #F8AC17;
background: transparent;
border-radius: 8px;
max-width:118.14px;
min-height:40px;
margin-left:10px;

`;
const StyledNavbarToggle = styled(Navbar.Toggle)`
  @media (max-width: 1024px) {
    background-color: #ffffff;
  }
`;
