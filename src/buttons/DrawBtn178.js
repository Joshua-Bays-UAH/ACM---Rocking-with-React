import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn178(){
	const[btnColor178, setBtnColor178] = useState(localStorage.getItem("savedBtnColor178"));
	useEffect(() => { localStorage.setItem("savedBtnColor178", btnColor178);}, [btnColor178]);
	return(
		<div>
		<button
			className = {btnColor178} 
			onClick = {() => setBtnColor178((btnColor178) => (btnColor178 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn178
