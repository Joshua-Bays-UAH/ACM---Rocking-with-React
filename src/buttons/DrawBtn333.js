import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn333(){
	const[btnColor333, setBtnColor333] = useState(localStorage.getItem("savedBtnColor333"));
	useEffect(() => { localStorage.setItem("savedBtnColor333", btnColor333);}, [btnColor333]);
	return(
		<div>
		<button
			className = {btnColor333} 
			onClick = {() => setBtnColor333((btnColor333) => (btnColor333 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn333
