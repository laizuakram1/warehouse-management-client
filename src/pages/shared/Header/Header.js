
import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase.init';
import { signOut } from "firebase/auth";
import './Header.css';





const Header = () => {
  const navigate = useNavigate();
  const [currentUser, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // ...
      } else {
        setUser({});
      }
    });
  }, [])

  const handleSignout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">LabCare Warehouse</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Manage Items</Nav.Link>
            <Nav.Link href="#features">Add Items</Nav.Link>
            {
              currentUser.email ? <Button onClick={handleSignout}>LogOut</Button>
                : <Link to="/login">Login</Link>
            }




          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;