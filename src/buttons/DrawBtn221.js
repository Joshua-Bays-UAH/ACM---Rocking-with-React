import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn221(){
	const[btnColor221, setBtnColor221] = useState(localStorage.getItem("savedBtnColor221"));
	useEffect(() => { localStorage.setItem("savedBtnColor221", btnColor221);}, [btnColor221]);
	return(
		<div>
		<button
			className = {btnColor221} 
			onClick = {() => setBtnColor221((btnColor221) => (btnColor221 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn221
