import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn368(){
	const[btnColor368, setBtnColor368] = useState(localStorage.getItem("savedBtnColor368"));
	useEffect(() => { localStorage.setItem("savedBtnColor368", btnColor368);}, [btnColor368]);
	return(
		<div>
		<button
			className = {btnColor368} 
			onClick = {() => setBtnColor368((btnColor368) => (btnColor368 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn368
