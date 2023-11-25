import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn389(){
	const[btnColor389, setBtnColor389] = useState(localStorage.getItem("savedBtnColor389"));
	useEffect(() => { localStorage.setItem("savedBtnColor389", btnColor389);}, [btnColor389]);
	return(
		<div>
		<button
			className = {btnColor389} 
			onClick = {() => setBtnColor389((btnColor389) => (btnColor389 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn389
