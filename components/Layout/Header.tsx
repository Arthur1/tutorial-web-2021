import React, { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Navbar, Nav } from 'react-bootstrap'

const HeaderNav: FC = () => {
  const router = useRouter()
  const activeKey = router.pathname

  return (
    <Nav className="mr-auto" activeKey={activeKey}>
      <Link href="/" passHref>
        <Nav.Link eventKey="/">Home</Nav.Link>
      </Link>
      <Link href="/courses/basic" passHref>
        <Nav.Link eventKey="/courses/basic">WWW基礎</Nav.Link>
      </Link>
      <Link href="/courses/advanced" passHref>
        <Nav.Link eventKey="/courses/advanced">WWW発展</Nav.Link>
      </Link>
      <Link href="/courses/security" passHref>
        <Nav.Link eventKey="/courses/security">Webセキュリティ</Nav.Link>
      </Link>
    </Nav>
  )
}

const Header: FC = () => (
  <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
    <Link href="/" passHref>
      <Navbar.Brand>Web講習会2021</Navbar.Brand>
    </Link>
    <Navbar.Toggle aria-controls="navbar_nav" />
    <Navbar.Collapse id="navbar_nav">
      <HeaderNav />
    </Navbar.Collapse>
  </Navbar>
)

export default Header
