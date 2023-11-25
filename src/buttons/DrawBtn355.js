import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn355(){
	const[btnColor355, setBtnColor355] = useState(localStorage.getItem("savedBtnColor355"));
	useEffect(() => { localStorage.setItem("savedBtnColor355", btnColor355);}, [btnColor355]);
	return(
		<div>
		<button
			className = {btnColor355} 
			onClick = {() => setBtnColor355((btnColor355) => (btnColor355 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn355
