import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn246(){
	const[btnColor246, setBtnColor246] = useState(localStorage.getItem("savedBtnColor246"));
	useEffect(() => { localStorage.setItem("savedBtnColor246", btnColor246);}, [btnColor246]);
	return(
		<div>
		<button
			className = {btnColor246} 
			onClick = {() => setBtnColor246((btnColor246) => (btnColor246 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn246
