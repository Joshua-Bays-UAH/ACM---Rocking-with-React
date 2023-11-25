import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn330(){
	const[btnColor330, setBtnColor330] = useState(localStorage.getItem("savedBtnColor330"));
	useEffect(() => { localStorage.setItem("savedBtnColor330", btnColor330);}, [btnColor330]);
	return(
		<div>
		<button
			className = {btnColor330} 
			onClick = {() => setBtnColor330((btnColor330) => (btnColor330 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn330
