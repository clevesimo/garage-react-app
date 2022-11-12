import { Nav, Navbar } from 'react-bootstrap';

const VARIABLES = {
  navbarElementsId: 'navbarElementsId'
};

const HeaderNavbar = () => {

  return (
    <div className='app-headerNavbar py-4'>
      <div className='container'>
        <Navbar className='p-0' expand='md' variant='dark'>
          <Navbar.Brand href='#home'>
            Garage App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={VARIABLES.navbarElementsId} />
          <Navbar.Collapse id={VARIABLES.navbarElementsId}>
            <Nav className='ml-auto'>
              <Nav.Link href='#home'>
                Acceuil
              </Nav.Link>
              <Nav.Link href='#services'>
                Services
              </Nav.Link>
              <Nav.Link href='#contact'>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );

};

export default HeaderNavbar;
