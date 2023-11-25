import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn107(){
	const[btnColor107, setBtnColor107] = useState(localStorage.getItem("savedBtnColor107"));
	useEffect(() => { localStorage.setItem("savedBtnColor107", btnColor107);}, [btnColor107]);
	return(
		<div>
		<button
			className = {btnColor107} 
			onClick = {() => setBtnColor107((btnColor107) => (btnColor107 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn107
