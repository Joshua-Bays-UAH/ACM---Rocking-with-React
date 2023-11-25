import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn180(){
	const[btnColor180, setBtnColor180] = useState(localStorage.getItem("savedBtnColor180"));
	useEffect(() => { localStorage.setItem("savedBtnColor180", btnColor180);}, [btnColor180]);
	return(
		<div>
		<button
			className = {btnColor180} 
			onClick = {() => setBtnColor180((btnColor180) => (btnColor180 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn180
