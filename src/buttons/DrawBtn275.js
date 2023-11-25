import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn275(){
	const[btnColor275, setBtnColor275] = useState(localStorage.getItem("savedBtnColor275"));
	useEffect(() => { localStorage.setItem("savedBtnColor275", btnColor275);}, [btnColor275]);
	return(
		<div>
		<button
			className = {btnColor275} 
			onClick = {() => setBtnColor275((btnColor275) => (btnColor275 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn275
