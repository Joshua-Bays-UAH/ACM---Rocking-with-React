import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn239(){
	const[btnColor239, setBtnColor239] = useState(localStorage.getItem("savedBtnColor239"));
	useEffect(() => { localStorage.setItem("savedBtnColor239", btnColor239);}, [btnColor239]);
	return(
		<div>
		<button
			className = {btnColor239} 
			onClick = {() => setBtnColor239((btnColor239) => (btnColor239 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn239
