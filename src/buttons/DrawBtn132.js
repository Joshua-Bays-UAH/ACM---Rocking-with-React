import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn132(){
	const[btnColor132, setBtnColor132] = useState(localStorage.getItem("savedBtnColor132"));
	useEffect(() => { localStorage.setItem("savedBtnColor132", btnColor132);}, [btnColor132]);
	return(
		<div>
		<button
			className = {btnColor132} 
			onClick = {() => setBtnColor132((btnColor132) => (btnColor132 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn132
