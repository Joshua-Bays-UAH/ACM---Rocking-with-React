import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn342(){
	const[btnColor342, setBtnColor342] = useState(localStorage.getItem("savedBtnColor342"));
	useEffect(() => { localStorage.setItem("savedBtnColor342", btnColor342);}, [btnColor342]);
	return(
		<div>
		<button
			className = {btnColor342} 
			onClick = {() => setBtnColor342((btnColor342) => (btnColor342 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn342
