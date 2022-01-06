import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

export const NaveBare = () => {
    return (
        <div>
            <Navbar bg="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src="/images/logo.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}
