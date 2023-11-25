import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn208(){
	const[btnColor208, setBtnColor208] = useState(localStorage.getItem("savedBtnColor208"));
	useEffect(() => { localStorage.setItem("savedBtnColor208", btnColor208);}, [btnColor208]);
	return(
		<div>
		<button
			className = {btnColor208} 
			onClick = {() => setBtnColor208((btnColor208) => (btnColor208 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn208
