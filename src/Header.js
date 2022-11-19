import React  from "react";
import MetamaskFox from "./images/MetamaskFox.svg";


export default function Header(props) {
  const {isLogined, currentAccount, handleLoginClick} = props;


  return (
    <div className="navbar">
      <div className="nav-head">
        <div className="header">
          <h1>Fortune Crypto Cookies</h1>
        </div>
        <div className="nav">
          <a href="https://goerlifaucet.com/" target="_blank"><h3>Goerli Faucet</h3></a>
        </div>
      </div>
      <div className="button">
        {isLogined ?
          (<button onClick={handleLoginClick} className="meta-logined">
          <div className="logined-button">
            <img src={MetamaskFox} height="35px" className="fox"/>
          <div>{currentAccount.slice(0, 5) + "..." + currentAccount.slice(-4)}</div>
          </div>
          </button>) 
          : 
          (<button onClick={handleLoginClick} className="meta">Connect Metamask</button>)
          }
      </div>
    </div>
  );
}
