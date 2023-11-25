import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn061(){
	const[btnColor061, setBtnColor061] = useState(localStorage.getItem("savedBtnColor061"));
	useEffect(() => { localStorage.setItem("savedBtnColor061", btnColor061);}, [btnColor061]);
	return(
		<div>
		<button
			className = {btnColor061} 
			onClick = {() => setBtnColor061((btnColor061) => (btnColor061 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn061
