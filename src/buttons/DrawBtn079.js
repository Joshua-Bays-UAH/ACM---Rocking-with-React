import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn079(){
	const[btnColor079, setBtnColor079] = useState(localStorage.getItem("savedBtnColor079"));
	useEffect(() => { localStorage.setItem("savedBtnColor079", btnColor079);}, [btnColor079]);
	return(
		<div>
		<button
			className = {btnColor079} 
			onClick = {() => setBtnColor079((btnColor079) => (btnColor079 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn079
