import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn186(){
	const[btnColor186, setBtnColor186] = useState(localStorage.getItem("savedBtnColor186"));
	useEffect(() => { localStorage.setItem("savedBtnColor186", btnColor186);}, [btnColor186]);
	return(
		<div>
		<button
			className = {btnColor186} 
			onClick = {() => setBtnColor186((btnColor186) => (btnColor186 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn186
