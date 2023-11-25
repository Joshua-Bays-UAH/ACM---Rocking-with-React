import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn362(){
	const[btnColor362, setBtnColor362] = useState(localStorage.getItem("savedBtnColor362"));
	useEffect(() => { localStorage.setItem("savedBtnColor362", btnColor362);}, [btnColor362]);
	return(
		<div>
		<button
			className = {btnColor362} 
			onClick = {() => setBtnColor362((btnColor362) => (btnColor362 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn362
