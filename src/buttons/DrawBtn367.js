import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn367(){
	const[btnColor367, setBtnColor367] = useState(localStorage.getItem("savedBtnColor367"));
	useEffect(() => { localStorage.setItem("savedBtnColor367", btnColor367);}, [btnColor367]);
	return(
		<div>
		<button
			className = {btnColor367} 
			onClick = {() => setBtnColor367((btnColor367) => (btnColor367 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn367
