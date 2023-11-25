import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn048(){
	const[btnColor048, setBtnColor048] = useState(localStorage.getItem("savedBtnColor048"));
	useEffect(() => { localStorage.setItem("savedBtnColor048", btnColor048);}, [btnColor048]);
	return(
		<div>
		<button
			className = {btnColor048} 
			onClick = {() => setBtnColor048((btnColor048) => (btnColor048 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn048
