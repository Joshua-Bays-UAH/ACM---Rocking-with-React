import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn142(){
	const[btnColor142, setBtnColor142] = useState(localStorage.getItem("savedBtnColor142"));
	useEffect(() => { localStorage.setItem("savedBtnColor142", btnColor142);}, [btnColor142]);
	return(
		<div>
		<button
			className = {btnColor142} 
			onClick = {() => setBtnColor142((btnColor142) => (btnColor142 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn142
