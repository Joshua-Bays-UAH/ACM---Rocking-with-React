import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn258(){
	const[btnColor258, setBtnColor258] = useState(localStorage.getItem("savedBtnColor258"));
	useEffect(() => { localStorage.setItem("savedBtnColor258", btnColor258);}, [btnColor258]);
	return(
		<div>
		<button
			className = {btnColor258} 
			onClick = {() => setBtnColor258((btnColor258) => (btnColor258 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn258
