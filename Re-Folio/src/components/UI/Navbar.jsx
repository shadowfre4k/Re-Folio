import { Navbar,Nav, Container } from "react-bootstrap"

export default function Navigation({ links }){
    return(
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
         
          <Nav className="me-auto">
          <Navbar bg="dark" data-bs-theme="dark">
        <Container>
         
          <Nav className="me-auto">
          {links.map((link)=>link)}
          </Nav>
        </Container>
      </Navbar>  
          </Nav>
        </Container>
      </Navbar>
    )

}