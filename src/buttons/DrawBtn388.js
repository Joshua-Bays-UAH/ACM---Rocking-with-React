import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn388(){
	const[btnColor388, setBtnColor388] = useState(localStorage.getItem("savedBtnColor388"));
	useEffect(() => { localStorage.setItem("savedBtnColor388", btnColor388);}, [btnColor388]);
	return(
		<div>
		<button
			className = {btnColor388} 
			onClick = {() => setBtnColor388((btnColor388) => (btnColor388 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn388
