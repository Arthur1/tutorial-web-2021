import React, { FC } from 'react'
import Link from 'next/link'
import { Navbar, Nav } from 'react-bootstrap'

const Header: FC = () => (
  <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
    <Link href="/" passHref>
      <Navbar.Brand>Web講習会2021</Navbar.Brand>
    </Link>
    <Navbar.Toggle aria-controls="navbar_nav" />
    <Navbar.Collapse id="navbar_nav">
      <Nav className="mr-auto">
        <Link href="/" passHref>
          <Nav.Link>Home</Nav.Link>
        </Link>
        <Link href="/courses/basic" passHref>
          <Nav.Link>WWW基礎</Nav.Link>
        </Link>
        <Link href="/courses/advanced" passHref>
          <Nav.Link>WWW発展</Nav.Link>
        </Link>
        <Link href="/courses/security" passHref>
          <Nav.Link>Webセキュリティ</Nav.Link>
        </Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
