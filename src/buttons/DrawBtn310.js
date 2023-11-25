import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn310(){
	const[btnColor310, setBtnColor310] = useState(localStorage.getItem("savedBtnColor310"));
	useEffect(() => { localStorage.setItem("savedBtnColor310", btnColor310);}, [btnColor310]);
	return(
		<div>
		<button
			className = {btnColor310} 
			onClick = {() => setBtnColor310((btnColor310) => (btnColor310 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn310
