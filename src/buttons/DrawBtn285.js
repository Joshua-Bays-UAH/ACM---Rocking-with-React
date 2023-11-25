import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn285(){
	const[btnColor285, setBtnColor285] = useState(localStorage.getItem("savedBtnColor285"));
	useEffect(() => { localStorage.setItem("savedBtnColor285", btnColor285);}, [btnColor285]);
	return(
		<div>
		<button
			className = {btnColor285} 
			onClick = {() => setBtnColor285((btnColor285) => (btnColor285 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn285
