import React from 'react';
import {faBell,faComment} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPinterest} from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';


const Navbar = (props) => {
  return (
    <div
     
      style={{ ...stylesNavbar.GBox }}
    >
      <FontAwesomeIcon icon={faPinterest} style={{ ...stylesNavbar.Picon }}/>
      <span style={{ ...stylesNavbar.Inicio}}>Inicio</span>
      <span style={{ ...stylesNavbar.Hoy}}>Hoy</span>
      <FontAwesomeIcon icon={faSearch} style={{ ...stylesNavbar.SearchBarICON }}/>
      <input type="text" placeholder="Buscar"style={{ ...stylesNavbar.SearchBar }}/>     
      <FontAwesomeIcon icon={faBell} style={{ ...stylesNavbar.Bell}}/>
      <FontAwesomeIcon icon={faComment} style={{ ...stylesNavbar.CIcon}}/>
      <FontAwesomeIcon icon={faUser} style={{ ...stylesNavbar.AVR}}/>
      <FontAwesomeIcon icon={faSortDown} style={{ ...stylesNavbar.Sdown}}/>
      </div>
  );
};

const stylesNavbar = {
  padding:'1em',
  GBox: {
    padding:'1em ',
   backgroundColor: 'white',
        
  },
  Picon:{
    margin:'0px 10px ',
    color:'red',
    width: '22px',
    height: '22px',
    cursor: 'pointer',
  },

  Inicio: {
  padding:'0.7em 0.8em',
  color: 'white',
  width: '40px',
  height: '40px',
  borderRadius:'20px 20px',
  backgroundColor: 'black',
  cursor: 'pointer',
  hover: 'true',
  },
 
  Hoy:{
    padding:'0.7em 0.9em 0em',
    borderRadius:'60px',
    cursor: 'pointer',
     Hover:{
      opacity:'0.7',
     }
  },

  SearchBarICON:{   
    position: 'absolute',
    transform: 'translateX(16px) translateY(20px)',
    color:'black',
    width: '18px',
    height: '18px',
  },

  SearchBar:{
    paddingLeft:'40px',
    backgroundColor: '#eaeaea',
    height:'20px',
    border:'0',
    borderRadius: '20px 20px',
    width: '1330px',
    height:'40px',
    margin:'left(20px)',
    
  },

 Bell:{
  padding:'0.7em 0.7em 0em',
  width: '23px',
  height: '23px',
  onclick: 'pointer',
  cursor: 'pointer',
  },

 CIcon:{
  padding:'0.7em 0.7em 0em',
  width: '23px',
  height: '23px',
  cursor: 'pointer',
  },
AVR:{
  padding:'0.7em 0.7em 0em',
  width: '23px',
  height: '23px',
  cursor: 'pointer',
},

Sdown:{
  width: '23px',
  height: '23px',
  cursor: 'pointer',
}
 
};

export default Navbar;
