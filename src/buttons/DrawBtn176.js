import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn176(){
	const[btnColor176, setBtnColor176] = useState(localStorage.getItem("savedBtnColor176"));
	useEffect(() => { localStorage.setItem("savedBtnColor176", btnColor176);}, [btnColor176]);
	return(
		<div>
		<button
			className = {btnColor176} 
			onClick = {() => setBtnColor176((btnColor176) => (btnColor176 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn176
