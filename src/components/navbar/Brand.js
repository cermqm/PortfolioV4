import React from 'react'
// import styled from "styled-components";
import logo from "../../assets/logo-new.gif";

const Brand = () => {
  return (
    <div>
      <div>
        <img className="reactlogo" src={logo} alt="Company Logo" />
        <div className="myname">Michael A. Mink</div>
      </div>
    </div>
  )
}

export default Brand

// const Image = styled.img`
//   height: 85%;
//   margin: auto 0;
// `;