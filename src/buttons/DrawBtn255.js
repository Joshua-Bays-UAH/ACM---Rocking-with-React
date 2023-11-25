import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn255(){
	const[btnColor255, setBtnColor255] = useState(localStorage.getItem("savedBtnColor255"));
	useEffect(() => { localStorage.setItem("savedBtnColor255", btnColor255);}, [btnColor255]);
	return(
		<div>
		<button
			className = {btnColor255} 
			onClick = {() => setBtnColor255((btnColor255) => (btnColor255 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn255
