import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn119(){
	const[btnColor119, setBtnColor119] = useState(localStorage.getItem("savedBtnColor119"));
	useEffect(() => { localStorage.setItem("savedBtnColor119", btnColor119);}, [btnColor119]);
	return(
		<div>
		<button
			className = {btnColor119} 
			onClick = {() => setBtnColor119((btnColor119) => (btnColor119 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn119
