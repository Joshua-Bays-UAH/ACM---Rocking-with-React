import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn185(){
	const[btnColor185, setBtnColor185] = useState(localStorage.getItem("savedBtnColor185"));
	useEffect(() => { localStorage.setItem("savedBtnColor185", btnColor185);}, [btnColor185]);
	return(
		<div>
		<button
			className = {btnColor185} 
			onClick = {() => setBtnColor185((btnColor185) => (btnColor185 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn185
