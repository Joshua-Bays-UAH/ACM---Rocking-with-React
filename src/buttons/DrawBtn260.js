import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn260(){
	const[btnColor260, setBtnColor260] = useState(localStorage.getItem("savedBtnColor260"));
	useEffect(() => { localStorage.setItem("savedBtnColor260", btnColor260);}, [btnColor260]);
	return(
		<div>
		<button
			className = {btnColor260} 
			onClick = {() => setBtnColor260((btnColor260) => (btnColor260 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn260
