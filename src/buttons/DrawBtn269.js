import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn269(){
	const[btnColor269, setBtnColor269] = useState(localStorage.getItem("savedBtnColor269"));
	useEffect(() => { localStorage.setItem("savedBtnColor269", btnColor269);}, [btnColor269]);
	return(
		<div>
		<button
			className = {btnColor269} 
			onClick = {() => setBtnColor269((btnColor269) => (btnColor269 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn269
