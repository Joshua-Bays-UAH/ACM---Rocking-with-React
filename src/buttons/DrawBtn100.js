import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn100(){
	const[btnColor100, setBtnColor100] = useState(localStorage.getItem("savedBtnColor100"));
	useEffect(() => { localStorage.setItem("savedBtnColor100", btnColor100);}, [btnColor100]);
	return(
		<div>
		<button
			className = {btnColor100} 
			onClick = {() => setBtnColor100((btnColor100) => (btnColor100 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn100
