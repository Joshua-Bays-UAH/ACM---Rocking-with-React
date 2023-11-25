import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn326(){
	const[btnColor326, setBtnColor326] = useState(localStorage.getItem("savedBtnColor326"));
	useEffect(() => { localStorage.setItem("savedBtnColor326", btnColor326);}, [btnColor326]);
	return(
		<div>
		<button
			className = {btnColor326} 
			onClick = {() => setBtnColor326((btnColor326) => (btnColor326 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn326
