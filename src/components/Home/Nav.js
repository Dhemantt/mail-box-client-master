import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { RiShutDownLine } from "react-icons/ri";
import { RiAccountBoxLine } from "react-icons/ri";

import { logout } from "../../store/slices/auth-slice";
import { toggleSideNav } from "../../store/slices/ui-slice";

const NavBar = () => {
  const dispatch = useDispatch();
  const { email } = useSelector((state) => state.auth);
  return (
    <Navbar
      bg="primary"
      variant="dark"
      expand="sm"
      fixed="top"
      style={{
        zIndex: 99,
        background:
          "linear-gradient(169deg, rgba(113,114,192,0.9601139528076855) 0%, rgba(65,77,251,1) 28%, rgba(90,74,251,0.9096937847404587) 45%, rgba(169,70,252,0.892887062051383) 96%)",
      }}
    >
      <Container fluid>
        <motion.div
          whileTap={{
            scale: 1.15,
            rotate: 45,
            transition: {
              rotate: {
                type: "tween",
                duration: 0.15,
              },
            },
          }}
        >
          <Button
            className="rounded-pill border-0 me-3 fs-5"
            style={{
              backgroundColor: "transparent",
            }}
            onClick={() => {
              dispatch(toggleSideNav());
            }}
          >
            <GiHamburgerMenu />
          </Button>
        </motion.div>
        <Link
          to="/home/inbox"
          className="nav-link navbar-brand p-1 px-3 rounded-pill fw-bold"
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
          }}
        >
          MAILBOX CLIENT
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex justify-content-end ms-auto">
            <div className="me-3 d-flex justify-content-end align-items-center">
              <span className="text-altlight ms-1 d-flex justify-content-end align-items-center">
                <RiAccountBoxLine className="me-1 text-white fs-4" />
                <span
                  className="fw-bold"
                  style={{
                    fontSize: "1rem",
                  }}
                >
                  {email}
                </span>
              </span>
            </div>
            <Link
              to="/"
              variant="danger"
              className="text-light fs-3 ms-auto"
              onClick={() => {
                dispatch(logout());
              }}
            >
              <RiShutDownLine />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
