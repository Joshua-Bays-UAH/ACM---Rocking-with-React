import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn374(){
	const[btnColor374, setBtnColor374] = useState(localStorage.getItem("savedBtnColor374"));
	useEffect(() => { localStorage.setItem("savedBtnColor374", btnColor374);}, [btnColor374]);
	return(
		<div>
		<button
			className = {btnColor374} 
			onClick = {() => setBtnColor374((btnColor374) => (btnColor374 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn374
