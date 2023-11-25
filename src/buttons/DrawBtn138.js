import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn138(){
	const[btnColor138, setBtnColor138] = useState(localStorage.getItem("savedBtnColor138"));
	useEffect(() => { localStorage.setItem("savedBtnColor138", btnColor138);}, [btnColor138]);
	return(
		<div>
		<button
			className = {btnColor138} 
			onClick = {() => setBtnColor138((btnColor138) => (btnColor138 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn138
