import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn133(){
	const[btnColor133, setBtnColor133] = useState(localStorage.getItem("savedBtnColor133"));
	useEffect(() => { localStorage.setItem("savedBtnColor133", btnColor133);}, [btnColor133]);
	return(
		<div>
		<button
			className = {btnColor133} 
			onClick = {() => setBtnColor133((btnColor133) => (btnColor133 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn133
