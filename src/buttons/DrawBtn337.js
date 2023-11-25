import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn337(){
	const[btnColor337, setBtnColor337] = useState(localStorage.getItem("savedBtnColor337"));
	useEffect(() => { localStorage.setItem("savedBtnColor337", btnColor337);}, [btnColor337]);
	return(
		<div>
		<button
			className = {btnColor337} 
			onClick = {() => setBtnColor337((btnColor337) => (btnColor337 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn337
