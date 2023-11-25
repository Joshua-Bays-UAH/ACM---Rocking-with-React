import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn219(){
	const[btnColor219, setBtnColor219] = useState(localStorage.getItem("savedBtnColor219"));
	useEffect(() => { localStorage.setItem("savedBtnColor219", btnColor219);}, [btnColor219]);
	return(
		<div>
		<button
			className = {btnColor219} 
			onClick = {() => setBtnColor219((btnColor219) => (btnColor219 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn219
