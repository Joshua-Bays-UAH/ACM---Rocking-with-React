import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn004(){
	const[btnColor004, setBtnColor004] = useState(localStorage.getItem("savedBtnColor004"));
	useEffect(() => { localStorage.setItem("savedBtnColor004", btnColor004);}, [btnColor004]);
	return(
		<div>
		<button
			className = {btnColor004} 
			onClick = {() => setBtnColor004((btnColor004) => (btnColor004 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn004
