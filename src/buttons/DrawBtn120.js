import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn120(){
	const[btnColor120, setBtnColor120] = useState(localStorage.getItem("savedBtnColor120"));
	useEffect(() => { localStorage.setItem("savedBtnColor120", btnColor120);}, [btnColor120]);
	return(
		<div>
		<button
			className = {btnColor120} 
			onClick = {() => setBtnColor120((btnColor120) => (btnColor120 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn120
