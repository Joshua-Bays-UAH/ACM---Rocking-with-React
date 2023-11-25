import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn135(){
	const[btnColor135, setBtnColor135] = useState(localStorage.getItem("savedBtnColor135"));
	useEffect(() => { localStorage.setItem("savedBtnColor135", btnColor135);}, [btnColor135]);
	return(
		<div>
		<button
			className = {btnColor135} 
			onClick = {() => setBtnColor135((btnColor135) => (btnColor135 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn135
