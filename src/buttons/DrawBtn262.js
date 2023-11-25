import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn262(){
	const[btnColor262, setBtnColor262] = useState(localStorage.getItem("savedBtnColor262"));
	useEffect(() => { localStorage.setItem("savedBtnColor262", btnColor262);}, [btnColor262]);
	return(
		<div>
		<button
			className = {btnColor262} 
			onClick = {() => setBtnColor262((btnColor262) => (btnColor262 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn262
