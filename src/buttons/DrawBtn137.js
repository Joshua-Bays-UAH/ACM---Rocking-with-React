import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn137(){
	const[btnColor137, setBtnColor137] = useState(localStorage.getItem("savedBtnColor137"));
	useEffect(() => { localStorage.setItem("savedBtnColor137", btnColor137);}, [btnColor137]);
	return(
		<div>
		<button
			className = {btnColor137} 
			onClick = {() => setBtnColor137((btnColor137) => (btnColor137 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn137
