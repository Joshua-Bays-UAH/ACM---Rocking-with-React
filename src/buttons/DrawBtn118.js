import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn118(){
	const[btnColor118, setBtnColor118] = useState(localStorage.getItem("savedBtnColor118"));
	useEffect(() => { localStorage.setItem("savedBtnColor118", btnColor118);}, [btnColor118]);
	return(
		<div>
		<button
			className = {btnColor118} 
			onClick = {() => setBtnColor118((btnColor118) => (btnColor118 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn118
