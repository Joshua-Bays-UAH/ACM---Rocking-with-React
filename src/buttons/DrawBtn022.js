import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn022(){
	const[btnColor022, setBtnColor022] = useState(localStorage.getItem("savedBtnColor022"));
	useEffect(() => { localStorage.setItem("savedBtnColor022", btnColor022);}, [btnColor022]);
	return(
		<div>
		<button
			className = {btnColor022} 
			onClick = {() => setBtnColor022((btnColor022) => (btnColor022 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn022
