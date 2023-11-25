import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn091(){
	const[btnColor091, setBtnColor091] = useState(localStorage.getItem("savedBtnColor091"));
	useEffect(() => { localStorage.setItem("savedBtnColor091", btnColor091);}, [btnColor091]);
	return(
		<div>
		<button
			className = {btnColor091} 
			onClick = {() => setBtnColor091((btnColor091) => (btnColor091 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn091
