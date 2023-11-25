import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn400(){
	const[btnColor400, setBtnColor400] = useState(localStorage.getItem("savedBtnColor400"));
	useEffect(() => { localStorage.setItem("savedBtnColor400", btnColor400);}, [btnColor400]);
	return(
		<div>
		<button
			className = {btnColor400} 
			onClick = {() => setBtnColor400((btnColor400) => (btnColor400 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn400
