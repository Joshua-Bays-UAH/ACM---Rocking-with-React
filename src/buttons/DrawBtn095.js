import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn095(){
	const[btnColor095, setBtnColor095] = useState(localStorage.getItem("savedBtnColor095"));
	useEffect(() => { localStorage.setItem("savedBtnColor095", btnColor095);}, [btnColor095]);
	return(
		<div>
		<button
			className = {btnColor095} 
			onClick = {() => setBtnColor095((btnColor095) => (btnColor095 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn095
