import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn332(){
	const[btnColor332, setBtnColor332] = useState(localStorage.getItem("savedBtnColor332"));
	useEffect(() => { localStorage.setItem("savedBtnColor332", btnColor332);}, [btnColor332]);
	return(
		<div>
		<button
			className = {btnColor332} 
			onClick = {() => setBtnColor332((btnColor332) => (btnColor332 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn332
