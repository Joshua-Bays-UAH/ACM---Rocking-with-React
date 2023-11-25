import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn377(){
	const[btnColor377, setBtnColor377] = useState(localStorage.getItem("savedBtnColor377"));
	useEffect(() => { localStorage.setItem("savedBtnColor377", btnColor377);}, [btnColor377]);
	return(
		<div>
		<button
			className = {btnColor377} 
			onClick = {() => setBtnColor377((btnColor377) => (btnColor377 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn377
