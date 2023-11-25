import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn235(){
	const[btnColor235, setBtnColor235] = useState(localStorage.getItem("savedBtnColor235"));
	useEffect(() => { localStorage.setItem("savedBtnColor235", btnColor235);}, [btnColor235]);
	return(
		<div>
		<button
			className = {btnColor235} 
			onClick = {() => setBtnColor235((btnColor235) => (btnColor235 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn235
