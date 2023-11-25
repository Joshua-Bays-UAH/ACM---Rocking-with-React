import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn280(){
	const[btnColor280, setBtnColor280] = useState(localStorage.getItem("savedBtnColor280"));
	useEffect(() => { localStorage.setItem("savedBtnColor280", btnColor280);}, [btnColor280]);
	return(
		<div>
		<button
			className = {btnColor280} 
			onClick = {() => setBtnColor280((btnColor280) => (btnColor280 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn280
