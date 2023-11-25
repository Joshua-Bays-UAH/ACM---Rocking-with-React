import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn086(){
	const[btnColor086, setBtnColor086] = useState(localStorage.getItem("savedBtnColor086"));
	useEffect(() => { localStorage.setItem("savedBtnColor086", btnColor086);}, [btnColor086]);
	return(
		<div>
		<button
			className = {btnColor086} 
			onClick = {() => setBtnColor086((btnColor086) => (btnColor086 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn086
