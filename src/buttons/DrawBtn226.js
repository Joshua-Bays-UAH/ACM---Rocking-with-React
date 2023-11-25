import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn226(){
	const[btnColor226, setBtnColor226] = useState(localStorage.getItem("savedBtnColor226"));
	useEffect(() => { localStorage.setItem("savedBtnColor226", btnColor226);}, [btnColor226]);
	return(
		<div>
		<button
			className = {btnColor226} 
			onClick = {() => setBtnColor226((btnColor226) => (btnColor226 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn226
