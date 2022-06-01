
import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Button, Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
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
      <Navbar className='fixed-top navbar '>
        <Container>
          <Link className='brandName' to="/">LabCare Warehouse</Link>
          <Nav className="ms-auto navItem">
            <Link to='/'>Home</Link>
            <Link to='/manageInventory'>Manage Items</Link>
            <Link to='/AddNew'>Add Items</Link>
            <Link to='/'>My Items</Link>
            <Link to='/blog'>Blogs</Link>

            {
              currentUser.email ? <Button className='logoutBtn' onClick={handleSignout}>LogOut</Button>
                : <Link className='LoginBtn' to="/login">Login</Link>
            }




          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;