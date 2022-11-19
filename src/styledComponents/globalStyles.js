import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`

@keyframes trambling-animation {
    0%, 50%, 100% {
        transform: rotate(0deg);
    }
    10%, 30% {
        transform: rotate(-8deg);
    }
    20%, 40% {
        transform: rotate(8deg);
    }
}

body {
  font-family: 'Amatic SC', cursive;
  background-color: #fff7e5;
}
:root {
  --primary: #0000ff;
  --secondary: #5efc8d;
  --light-gray: #cccccc;
  
}

a:visited {
  color:#000000;
}

h1, h3{
  font-size: 4em;
  text-align: center;
  margin: 15px;
  padding: 0px;
}  
h3 {
  font-size: 2em;
  margin: 0px;
}

p {
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
  font-weight: lighter;
  margin: 8px;
}
.main-container, .navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  box-sizing: border-box;
  align-items:baseline;
}

.image{ 
  padding-bottom: -20px;
  margin-bottom:-20px;
}
.nav-head {
  display: flex;
  flex-direction: column;
  width: 60%;
  align-items: center;
  margin-bottom: 20px;
  padding: 0 0 0 0;
}
.header, .nav {
  padding: 5px
}

.nav {
	color: black; 
    position: relative;
    cursor: pointer;
    text-decoration: none;
    }

.nav:after {
	content: "";
    display: block;
    position: absolute;
    right: 0;
    bottom: -3px;
    width: 0;
    height: 2px; /* Высота линии */
    background-color: black; /* Цвет подчеркивания при исчезании линии*/
    transition: width 0.5s; 
}
.nav:hover:after {
	content: "";
    width: 100%;
    display: block;
    position: absolute;
    left: 0;
    bottom: -3px;
    height: 2px; /* Высота линии */
    background-color: black; /* Цвет подчеркивания при появлении линии*/
    transition: width 0.5s;  /* Время эффекта */
}    
.container {
  align-items: center;
    display: flex;
    height: 100%;
    justify-content: space-between;
}
.button {
  margin-top: 80px;
  display: flex;
  align-self: flex-start;
  color: #fff7e5;
}

.item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 30%;
  text-align: center
}

.cookie {
  margin-bottom: 30px;
}

.cookie:hover {
    animation: 2.2s ease-in-out 0s normal none infinite running trambling-animation;
}

.cookie-button, .cookie-button-notLogined{
  width: 140px;
  height: 55px;
  margin: 0 15px;
  font-size: 20px;
  letter-spacing: 1px;
  font-family: 'Montserrat', sans-serif;
  background-color: #714e94f4;
  border-radius: 13px;
  color: #fff7e5;
  border-color:#fad882;
  border:solid;
  transition: all 500ms ease; 
  
}
.cookie-button:hover {
	background: rgb(0, 0, 0, 0);
	color: #5b2a8cd8;
	box-shadow: inset 0 0 0 1px #5b2a8cd8;
  cursor: pointer;
}

.cookie-button-notLogined{
  background-color: #ac9ebaf4;
  border-color:#ac9ebaf4;
}
.meta, .meta-logined {
  min-width: 340px;
  min-height: 40px;
  max-height: 40px;
  margin: 0px 15px;
  font-size: 15px;
  letter-spacing: 1px;
  font-family: 'Montserrat', sans-serif;
  background-color: #6e6e6e;
  border-radius: 30px;
  color: #fff7e5;
  border-color:#fad882;
  border:solid;
  transition: all 500ms ease; 
} 
.meta:hover {
	background: #a6a6a6;
	color: white;
	box-shadow: inset 0 0 0 2px #a6a6a6;
  cursor: pointer;
}
.price {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
  letter-spacing: 1px;
}
.fox {
  margin-right: 20px;
}

.logined-button {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.modal{
  height: 100vh;
  width: 100vw;
  background-color: rgba(0,0,0,0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: 0.5s
}

.modal.active {
  opacity: 1;
  pointer-events: all;
}
.modal__content {
  padding: 20px;
  max-width: 800px;
  border-radius: 30px;
  background-color: white;
  transform: scale(0.5);
  transition: 0.4s all;
}
.modal__content.active{
  transform: scale(1)
}
.modal__words{
  font-size: 18px;
  letter-spacing: 0px;
  font-family: 'Montserrat', sans-serif;
  margin-bottom: 30px;
}`

export default Global
