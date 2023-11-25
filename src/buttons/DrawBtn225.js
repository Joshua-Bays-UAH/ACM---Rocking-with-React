import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn225(){
	const[btnColor225, setBtnColor225] = useState(localStorage.getItem("savedBtnColor225"));
	useEffect(() => { localStorage.setItem("savedBtnColor225", btnColor225);}, [btnColor225]);
	return(
		<div>
		<button
			className = {btnColor225} 
			onClick = {() => setBtnColor225((btnColor225) => (btnColor225 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn225
