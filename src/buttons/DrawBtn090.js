import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn090(){
	const[btnColor090, setBtnColor090] = useState(localStorage.getItem("savedBtnColor090"));
	useEffect(() => { localStorage.setItem("savedBtnColor090", btnColor090);}, [btnColor090]);
	return(
		<div>
		<button
			className = {btnColor090} 
			onClick = {() => setBtnColor090((btnColor090) => (btnColor090 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn090
