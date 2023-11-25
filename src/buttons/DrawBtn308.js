import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn308(){
	const[btnColor308, setBtnColor308] = useState(localStorage.getItem("savedBtnColor308"));
	useEffect(() => { localStorage.setItem("savedBtnColor308", btnColor308);}, [btnColor308]);
	return(
		<div>
		<button
			className = {btnColor308} 
			onClick = {() => setBtnColor308((btnColor308) => (btnColor308 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn308
