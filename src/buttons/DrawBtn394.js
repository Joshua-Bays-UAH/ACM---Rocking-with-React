import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn394(){
	const[btnColor394, setBtnColor394] = useState(localStorage.getItem("savedBtnColor394"));
	useEffect(() => { localStorage.setItem("savedBtnColor394", btnColor394);}, [btnColor394]);
	return(
		<div>
		<button
			className = {btnColor394} 
			onClick = {() => setBtnColor394((btnColor394) => (btnColor394 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn394
