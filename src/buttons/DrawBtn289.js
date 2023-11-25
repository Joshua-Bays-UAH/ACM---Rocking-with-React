import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn289(){
	const[btnColor289, setBtnColor289] = useState(localStorage.getItem("savedBtnColor289"));
	useEffect(() => { localStorage.setItem("savedBtnColor289", btnColor289);}, [btnColor289]);
	return(
		<div>
		<button
			className = {btnColor289} 
			onClick = {() => setBtnColor289((btnColor289) => (btnColor289 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn289
