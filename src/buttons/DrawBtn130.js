import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn130(){
	const[btnColor130, setBtnColor130] = useState(localStorage.getItem("savedBtnColor130"));
	useEffect(() => { localStorage.setItem("savedBtnColor130", btnColor130);}, [btnColor130]);
	return(
		<div>
		<button
			className = {btnColor130} 
			onClick = {() => setBtnColor130((btnColor130) => (btnColor130 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn130
