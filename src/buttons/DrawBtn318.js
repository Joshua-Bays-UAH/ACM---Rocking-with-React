import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn318(){
	const[btnColor318, setBtnColor318] = useState(localStorage.getItem("savedBtnColor318"));
	useEffect(() => { localStorage.setItem("savedBtnColor318", btnColor318);}, [btnColor318]);
	return(
		<div>
		<button
			className = {btnColor318} 
			onClick = {() => setBtnColor318((btnColor318) => (btnColor318 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn318
