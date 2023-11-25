import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn139(){
	const[btnColor139, setBtnColor139] = useState(localStorage.getItem("savedBtnColor139"));
	useEffect(() => { localStorage.setItem("savedBtnColor139", btnColor139);}, [btnColor139]);
	return(
		<div>
		<button
			className = {btnColor139} 
			onClick = {() => setBtnColor139((btnColor139) => (btnColor139 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn139
