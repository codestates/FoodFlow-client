import React from 'react';
    
    
const LogOut = (props) => (
  <div className="logOuts">
      <div className="logOut__link" onClick={props.modalClick}>Log out</div>
      <div className="logOut" style={{display: props.modalDisplay}}>
        <div className="logOut__content">
          {/* <span className="logOut__closeButton" onClick={props.modalClose}>&times;</span> */}
            <p className="logOut__message">{`Good Bye. ${props.userInfo}`}</p>
        </div>
      </div>
  </div>
);
    
export default LogOut;