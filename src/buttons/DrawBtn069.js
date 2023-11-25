import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn069(){
	const[btnColor069, setBtnColor069] = useState(localStorage.getItem("savedBtnColor069"));
	useEffect(() => { localStorage.setItem("savedBtnColor069", btnColor069);}, [btnColor069]);
	return(
		<div>
		<button
			className = {btnColor069} 
			onClick = {() => setBtnColor069((btnColor069) => (btnColor069 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn069
