import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn288(){
	const[btnColor288, setBtnColor288] = useState(localStorage.getItem("savedBtnColor288"));
	useEffect(() => { localStorage.setItem("savedBtnColor288", btnColor288);}, [btnColor288]);
	return(
		<div>
		<button
			className = {btnColor288} 
			onClick = {() => setBtnColor288((btnColor288) => (btnColor288 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn288
