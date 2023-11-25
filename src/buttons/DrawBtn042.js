import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn042(){
	const[btnColor042, setBtnColor042] = useState(localStorage.getItem("savedBtnColor042"));
	useEffect(() => { localStorage.setItem("savedBtnColor042", btnColor042);}, [btnColor042]);
	return(
		<div>
		<button
			className = {btnColor042} 
			onClick = {() => setBtnColor042((btnColor042) => (btnColor042 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn042
