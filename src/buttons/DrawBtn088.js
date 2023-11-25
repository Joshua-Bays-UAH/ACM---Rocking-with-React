import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn088(){
	const[btnColor088, setBtnColor088] = useState(localStorage.getItem("savedBtnColor088"));
	useEffect(() => { localStorage.setItem("savedBtnColor088", btnColor088);}, [btnColor088]);
	return(
		<div>
		<button
			className = {btnColor088} 
			onClick = {() => setBtnColor088((btnColor088) => (btnColor088 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn088
