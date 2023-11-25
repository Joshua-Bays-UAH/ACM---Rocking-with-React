import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn128(){
	const[btnColor128, setBtnColor128] = useState(localStorage.getItem("savedBtnColor128"));
	useEffect(() => { localStorage.setItem("savedBtnColor128", btnColor128);}, [btnColor128]);
	return(
		<div>
		<button
			className = {btnColor128} 
			onClick = {() => setBtnColor128((btnColor128) => (btnColor128 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn128
