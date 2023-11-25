import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn190(){
	const[btnColor190, setBtnColor190] = useState(localStorage.getItem("savedBtnColor190"));
	useEffect(() => { localStorage.setItem("savedBtnColor190", btnColor190);}, [btnColor190]);
	return(
		<div>
		<button
			className = {btnColor190} 
			onClick = {() => setBtnColor190((btnColor190) => (btnColor190 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn190
