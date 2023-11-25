import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn063(){
	const[btnColor063, setBtnColor063] = useState(localStorage.getItem("savedBtnColor063"));
	useEffect(() => { localStorage.setItem("savedBtnColor063", btnColor063);}, [btnColor063]);
	return(
		<div>
		<button
			className = {btnColor063} 
			onClick = {() => setBtnColor063((btnColor063) => (btnColor063 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn063
