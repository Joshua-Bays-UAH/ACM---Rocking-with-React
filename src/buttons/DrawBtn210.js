import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn210(){
	const[btnColor210, setBtnColor210] = useState(localStorage.getItem("savedBtnColor210"));
	useEffect(() => { localStorage.setItem("savedBtnColor210", btnColor210);}, [btnColor210]);
	return(
		<div>
		<button
			className = {btnColor210} 
			onClick = {() => setBtnColor210((btnColor210) => (btnColor210 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn210
