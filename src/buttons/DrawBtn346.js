import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn346(){
	const[btnColor346, setBtnColor346] = useState(localStorage.getItem("savedBtnColor346"));
	useEffect(() => { localStorage.setItem("savedBtnColor346", btnColor346);}, [btnColor346]);
	return(
		<div>
		<button
			className = {btnColor346} 
			onClick = {() => setBtnColor346((btnColor346) => (btnColor346 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn346
