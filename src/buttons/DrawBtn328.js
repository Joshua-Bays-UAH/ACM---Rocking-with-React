import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn328(){
	const[btnColor328, setBtnColor328] = useState(localStorage.getItem("savedBtnColor328"));
	useEffect(() => { localStorage.setItem("savedBtnColor328", btnColor328);}, [btnColor328]);
	return(
		<div>
		<button
			className = {btnColor328} 
			onClick = {() => setBtnColor328((btnColor328) => (btnColor328 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn328
