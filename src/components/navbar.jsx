import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand
} from 'reactstrap'

class NavBar extends Component {
    render() {
        return (
            <div style={{ direction: 'rtl' }}>
                <Navbar color='dark' dark expand='md'>
                    <NavbarBrand href='/'>سبد خرید</NavbarBrand>
                </Navbar>
            </div>
        );
    }
}
export default NavBar;
