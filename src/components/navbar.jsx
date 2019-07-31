// import React, { Component } from 'react';
import React from 'react'
import {connect} from 'react-redux'

import {
    Navbar,
    NavbarBrand,
    Badge
} from 'reactstrap'

const NavBar = ({totalCounters}) => {
    return (
        <div style={{ direction: 'rtl' }}>
            <Navbar color='dark' dark expand='md'>
                <NavbarBrand href='/'>سبد خرید</NavbarBrand>
                <Badge color='info' pill className='m-2'>
                    {totalCounters}
                </Badge>
            </Navbar>
        </div>
    );
}

export default connect(state=>{
    return{
        totalCounters:state.filter(c=>c.value>0).length
    }
})(NavBar);

// class NavBar extends Component {
//     render() {
//         return (
//             <div style={{ direction: 'rtl' }}>
//                 <Navbar color='dark' dark expand='md'>
//                     <NavbarBrand href='/'>سبد خرید</NavbarBrand>
//                     <Badge color='info' pill className='m-2'></Badge>
//                 </Navbar>
//             </div>
//         );
//     }
// }


// export default NavBar;
