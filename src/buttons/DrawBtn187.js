import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn187(){
	const[btnColor187, setBtnColor187] = useState(localStorage.getItem("savedBtnColor187"));
	useEffect(() => { localStorage.setItem("savedBtnColor187", btnColor187);}, [btnColor187]);
	return(
		<div>
		<button
			className = {btnColor187} 
			onClick = {() => setBtnColor187((btnColor187) => (btnColor187 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn187
