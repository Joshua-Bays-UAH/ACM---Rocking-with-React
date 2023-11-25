import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn361(){
	const[btnColor361, setBtnColor361] = useState(localStorage.getItem("savedBtnColor361"));
	useEffect(() => { localStorage.setItem("savedBtnColor361", btnColor361);}, [btnColor361]);
	return(
		<div>
		<button
			className = {btnColor361} 
			onClick = {() => setBtnColor361((btnColor361) => (btnColor361 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn361
