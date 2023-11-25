import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn248(){
	const[btnColor248, setBtnColor248] = useState(localStorage.getItem("savedBtnColor248"));
	useEffect(() => { localStorage.setItem("savedBtnColor248", btnColor248);}, [btnColor248]);
	return(
		<div>
		<button
			className = {btnColor248} 
			onClick = {() => setBtnColor248((btnColor248) => (btnColor248 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn248
