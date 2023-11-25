import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn229(){
	const[btnColor229, setBtnColor229] = useState(localStorage.getItem("savedBtnColor229"));
	useEffect(() => { localStorage.setItem("savedBtnColor229", btnColor229);}, [btnColor229]);
	return(
		<div>
		<button
			className = {btnColor229} 
			onClick = {() => setBtnColor229((btnColor229) => (btnColor229 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn229
