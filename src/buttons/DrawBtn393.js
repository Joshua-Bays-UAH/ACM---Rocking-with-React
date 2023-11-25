import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn393(){
	const[btnColor393, setBtnColor393] = useState(localStorage.getItem("savedBtnColor393"));
	useEffect(() => { localStorage.setItem("savedBtnColor393", btnColor393);}, [btnColor393]);
	return(
		<div>
		<button
			className = {btnColor393} 
			onClick = {() => setBtnColor393((btnColor393) => (btnColor393 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn393
