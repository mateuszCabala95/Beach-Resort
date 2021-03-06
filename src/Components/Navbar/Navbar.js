import React from "react";
import logo from '../../images/logo.svg';
import {Link} from "react-router-dom";


import {FaAlignRight} from 'react-icons/fa'


class Navbar extends React.Component {
    state = {
        isOpen: false
    };
    handleToggle = () => this.setState(prevState => ({
        isOpen: !prevState.isOpen
    }));


    render() {


        return (
            <nav className='navbar'>
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to='/'><img src={logo} alt="Beach Resort"/></Link>
                        <button className='nav-btn' onClick={this.handleToggle}><FaAlignRight/></button>
                    </div>
                    <ul className={this.state.isOpen ? 'nav-links show-nav':'nav-links'}>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/rooms'>Rooms</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }

}

export default Navbar
