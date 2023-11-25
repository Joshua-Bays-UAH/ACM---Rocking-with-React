import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn098(){
	const[btnColor098, setBtnColor098] = useState(localStorage.getItem("savedBtnColor098"));
	useEffect(() => { localStorage.setItem("savedBtnColor098", btnColor098);}, [btnColor098]);
	return(
		<div>
		<button
			className = {btnColor098} 
			onClick = {() => setBtnColor098((btnColor098) => (btnColor098 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn098
