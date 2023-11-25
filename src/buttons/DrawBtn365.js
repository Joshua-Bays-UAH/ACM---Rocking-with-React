import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn365(){
	const[btnColor365, setBtnColor365] = useState(localStorage.getItem("savedBtnColor365"));
	useEffect(() => { localStorage.setItem("savedBtnColor365", btnColor365);}, [btnColor365]);
	return(
		<div>
		<button
			className = {btnColor365} 
			onClick = {() => setBtnColor365((btnColor365) => (btnColor365 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn365
