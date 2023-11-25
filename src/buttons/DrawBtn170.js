import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn170(){
	const[btnColor170, setBtnColor170] = useState(localStorage.getItem("savedBtnColor170"));
	useEffect(() => { localStorage.setItem("savedBtnColor170", btnColor170);}, [btnColor170]);
	return(
		<div>
		<button
			className = {btnColor170} 
			onClick = {() => setBtnColor170((btnColor170) => (btnColor170 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn170
