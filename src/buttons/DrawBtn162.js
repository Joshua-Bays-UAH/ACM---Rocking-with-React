import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn162(){
	const[btnColor162, setBtnColor162] = useState(localStorage.getItem("savedBtnColor162"));
	useEffect(() => { localStorage.setItem("savedBtnColor162", btnColor162);}, [btnColor162]);
	return(
		<div>
		<button
			className = {btnColor162} 
			onClick = {() => setBtnColor162((btnColor162) => (btnColor162 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn162
