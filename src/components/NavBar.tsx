import { Navbar, Nav, Container } from "react-bootstrap";

type CustomNavbar = {
  username?: string;
  avatar?: string;
  googleUserData?:
    | {
        picture: string;
        given_name: string;
      }
    | undefined;
};

const CustomNavbar = ({ googleUserData }: CustomNavbar) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home" style={{ fontSize: "30px" }}>
          Your Dashboard
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#home">
            Hello {googleUserData?.given_name ?? "Admin"}
          </Nav.Link>
          {googleUserData && (
            <Nav.Link href="#link">
              <img
                src={googleUserData.picture}
                alt="User Avatar"
                style={{ width: "30px", borderRadius: "50%" }}
              />
            </Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
