import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn263(){
	const[btnColor263, setBtnColor263] = useState(localStorage.getItem("savedBtnColor263"));
	useEffect(() => { localStorage.setItem("savedBtnColor263", btnColor263);}, [btnColor263]);
	return(
		<div>
		<button
			className = {btnColor263} 
			onClick = {() => setBtnColor263((btnColor263) => (btnColor263 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn263
