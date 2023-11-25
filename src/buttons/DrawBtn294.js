import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn294(){
	const[btnColor294, setBtnColor294] = useState(localStorage.getItem("savedBtnColor294"));
	useEffect(() => { localStorage.setItem("savedBtnColor294", btnColor294);}, [btnColor294]);
	return(
		<div>
		<button
			className = {btnColor294} 
			onClick = {() => setBtnColor294((btnColor294) => (btnColor294 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn294
