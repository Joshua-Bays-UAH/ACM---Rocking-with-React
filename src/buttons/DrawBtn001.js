import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn001(){
	const[btnColor001, setBtnColor001] = useState(localStorage.getItem("savedBtnColor001"));
	useEffect(() => { localStorage.setItem("savedBtnColor001", btnColor001);}, [btnColor001]);
	return(
		<div>
		<button
			className = {btnColor001} 
			onClick = {() => setBtnColor001((btnColor001) => (btnColor001 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn001
