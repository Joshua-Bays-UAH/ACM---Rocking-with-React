import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn232(){
	const[btnColor232, setBtnColor232] = useState(localStorage.getItem("savedBtnColor232"));
	useEffect(() => { localStorage.setItem("savedBtnColor232", btnColor232);}, [btnColor232]);
	return(
		<div>
		<button
			className = {btnColor232} 
			onClick = {() => setBtnColor232((btnColor232) => (btnColor232 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn232
