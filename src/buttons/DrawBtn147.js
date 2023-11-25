import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn147(){
	const[btnColor147, setBtnColor147] = useState(localStorage.getItem("savedBtnColor147"));
	useEffect(() => { localStorage.setItem("savedBtnColor147", btnColor147);}, [btnColor147]);
	return(
		<div>
		<button
			className = {btnColor147} 
			onClick = {() => setBtnColor147((btnColor147) => (btnColor147 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn147
