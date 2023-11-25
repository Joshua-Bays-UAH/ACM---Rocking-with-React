import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn012(){
	const[btnColor012, setBtnColor012] = useState(localStorage.getItem("savedBtnColor012"));
	useEffect(() => { localStorage.setItem("savedBtnColor012", btnColor012);}, [btnColor012]);
	return(
		<div>
		<button
			className = {btnColor012} 
			onClick = {() => setBtnColor012((btnColor012) => (btnColor012 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn012
