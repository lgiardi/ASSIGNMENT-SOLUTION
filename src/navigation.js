import React, { Component } from 'react';



class Navigation extends Component {


  render() {

    const sections = ['Home' , 'About' , 'Contact', 'Footer','Header'];
    const navLinks = sections.map( section => {

        return (
            <li><a href={ '#' + section }>{section}</a></li>
        )
    
        
 } );
    return (
     <nav><ul>
        {navLinks}
        </ul>
     </nav>
    );
  }
}

export default Navigation;
