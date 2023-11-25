import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn247(){
	const[btnColor247, setBtnColor247] = useState(localStorage.getItem("savedBtnColor247"));
	useEffect(() => { localStorage.setItem("savedBtnColor247", btnColor247);}, [btnColor247]);
	return(
		<div>
		<button
			className = {btnColor247} 
			onClick = {() => setBtnColor247((btnColor247) => (btnColor247 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn247
