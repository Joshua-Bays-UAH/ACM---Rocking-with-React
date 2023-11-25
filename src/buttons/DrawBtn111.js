import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn111(){
	const[btnColor111, setBtnColor111] = useState(localStorage.getItem("savedBtnColor111"));
	useEffect(() => { localStorage.setItem("savedBtnColor111", btnColor111);}, [btnColor111]);
	return(
		<div>
		<button
			className = {btnColor111} 
			onClick = {() => setBtnColor111((btnColor111) => (btnColor111 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn111
