import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./header.css";
import { Cart } from "react-bootstrap-icons";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import CartContext from "../../Context/CartContext";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const cartContext = useContext(CartContext);
  const { cartItems } = cartContext;

  return (
    <Navbar collapseOnSelect expand="md" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <Link to={"/"}>
            <img
              className="logo"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAnFBMVEX/////ZgD/YwD/YAD/WgD/+PX/UQD/XQD/z7//5t3/+/n//fz/VQD/qY7/bSL/hlr/0cb/m3b/8u7/pIL/39T/iGX/SQD/2cz/7Ob/w67/WxT/sZb/oov/fFL/v63/1cf/uKD/r5r/xbb/m4D/dDH/aBj/lHD/dj//gk3/fEX/bTD/jmb/hlT/ZiL/k3r/jmD/MgD/i3X/c0//Zj3dGWP0AAAFZElEQVR4nO2ZaXOjOBBA0YG45AvL4ooNwWBiO052dv//f9uWsI1JyEzV1M7A1uh9Mm4iHurWYcWyDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAbD/5ZwbIEhNuXYBgM49cwe2+ETCNP95KwQQmzmj23xAZBCPB/b4gNKynmdWAKVFGLe2Bp9qJZKxtbocyYgRddja/SJmC6qsTX62HKCUrGWOoyt0afgaqLKxtbo02CQktHYGn3UlIAvE9vAqGmKTm3x01ITy56Sok8TW/pACs+n1lEg5TwHY0t8BJHXiW0RAHyZ4C8Hsp9c8iyrfhx5U5lDewU1wU4z/DEEgao/3xPCb6++V44/CP809u5JcR0Wfvm2fxOwwd8ej7A/jNf7/errjUb8vN+//Yp9iKg4BWZXxSfmSNcKCoZpBSMYQ+jrRd3bckf+ijV/qXbNiGzaF7ZnFDHX8p85wkpqjjH+jtSCIP5fSvkiUh72miKMEW7yRykrZ1TOfrOUH7troT/FNcbNO0FO1pOCW/RTr1L9ar5f3aT61T5c+j8aEaHIXm8/512GaCYo/BYLH6XCKIq8Vgr5Yrkrl9eREC9dF65EeJfyveVutxTXppduWUI47j8xjly4J/ray9sdNtltyPjvjjovghSe8keppeTy0ErNk5pxzpp2z7FmcMFZvYquUk7SqPC8DSeSqzA5986gorOUjMm/vliBbfepaZ679whVQXsWqNGiJwUduNJSqKacwy8jQnVfZZgQAjVIT3YrhTDjFENYa5Qc4mojfnpYer1KrkvowadBKW+2SZ3Ce+jFEh6+tlUS2/wNSGGyc2c11tcgNT++HGsHIVZepUjhZicC41f3FD6+vKgwmXUP2fOzHg3+5/SFxaJhsgh7kQaKoryeO4hhKQnfBxk856JbicMw9PaOPs9p0xfAtFYjvNUvpcLhARzP3YMXUgymzU+OqcPZ+uP4lTAZCBgvryC3C4akcKXqL6ow4t2f7ehdiqnr+IhVOzeSy7XjNOIoP/vYcVFJRsnp8xG2Om/ATEoJaXAW4ZCU866kBFirqd2bzdXtFN2lqGrH3mI9UsKsuoYfpPKqL2XH3nJdSe449TYbKLMjQR3cG5Q6KylPSflWfoJCdhyHdFKOfnEl5VoCwrgNP0qd6P1zKPJytiCMYkznh2Jo4o0v0FFUA+3w3ZAUaXvqRUnZew5Pg+V7ge9S/N5TkbWHqeV1D+H6USpqup46HDFXzyK0eiqH14KMIHycaQ4OIk0wVFO1GhnuXNVUrNTUfJJ0hc5UAkQDNeWF0IijpoKkJ+Vtu0Xb0alx2LEQ9+/sfgqhTTyzfCCI4G4WD40+CgtQuII7G8uDdHOQimBdukmRlQ0LKFhsg/gM2YRyF2d8lfJyuDvYyPtxsDoJ4ux9GXdL1awoVg9a6v1O7jWTKhPFkBTBm80W5im2s2LoCrzdbNTR100KkYUOk5Xlv0G4acNaytuevkHyC+eizw8820KOJFn8kDdRCCHCQ/dNBk1tr5d6s4KH0nfkRE3SFMPL7ZiaTAl1OilSURUmPFRP12F+k3Jr0qhsv8vLqapOMrbSQ3/KCty8cKN1eD/Etr+ll/R+JurS9CI92OSlUq99KVdr3yVla8FTkqYLvVwWqfqc5U3KldQmTWtrngLtr8zkAmG6Fn+nqZIK/+GLtvFK3VOFn3YQYWkXZZKE3z8FDWzfhr8MYF5WFr5v69KIbln3Ra427357lypHSH2e31dTCNs63C753V55YI3RUmERreMfSP1u3BLeN3Gn9Y+RcFd4XjY4i45IGCWJmMpRR4c9sW4yGAwGg8FgMBgMBoPBYDAYDAaDwWAw/GH8CztoXC9Ylxa5AAAAAElFTkSuQmCC"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://aggressive-colt-hose.cyclic.app/addproduct">ADD Product</Nav.Link>
            <Nav.Link href="https://aggressive-colt-hose.cyclic.app/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button variant="primary" onClick={() => navigate("/cart")}>
          <Badge bg="warning">{cartItems.length}</Badge>
          <Cart />
        </Button>
      </Container>
    </Navbar>
  );
}

export default Header;
