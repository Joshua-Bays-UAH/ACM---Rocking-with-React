import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn074(){
	const[btnColor074, setBtnColor074] = useState(localStorage.getItem("savedBtnColor074"));
	useEffect(() => { localStorage.setItem("savedBtnColor074", btnColor074);}, [btnColor074]);
	return(
		<div>
		<button
			className = {btnColor074} 
			onClick = {() => setBtnColor074((btnColor074) => (btnColor074 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn074
