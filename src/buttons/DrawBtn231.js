import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn231(){
	const[btnColor231, setBtnColor231] = useState(localStorage.getItem("savedBtnColor231"));
	useEffect(() => { localStorage.setItem("savedBtnColor231", btnColor231);}, [btnColor231]);
	return(
		<div>
		<button
			className = {btnColor231} 
			onClick = {() => setBtnColor231((btnColor231) => (btnColor231 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn231
