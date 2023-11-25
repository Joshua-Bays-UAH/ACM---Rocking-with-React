import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn305(){
	const[btnColor305, setBtnColor305] = useState(localStorage.getItem("savedBtnColor305"));
	useEffect(() => { localStorage.setItem("savedBtnColor305", btnColor305);}, [btnColor305]);
	return(
		<div>
		<button
			className = {btnColor305} 
			onClick = {() => setBtnColor305((btnColor305) => (btnColor305 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn305
