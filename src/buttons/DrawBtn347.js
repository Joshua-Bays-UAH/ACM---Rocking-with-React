import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn347(){
	const[btnColor347, setBtnColor347] = useState(localStorage.getItem("savedBtnColor347"));
	useEffect(() => { localStorage.setItem("savedBtnColor347", btnColor347);}, [btnColor347]);
	return(
		<div>
		<button
			className = {btnColor347} 
			onClick = {() => setBtnColor347((btnColor347) => (btnColor347 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn347
