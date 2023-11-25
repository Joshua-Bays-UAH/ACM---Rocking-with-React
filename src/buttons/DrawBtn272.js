import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn272(){
	const[btnColor272, setBtnColor272] = useState(localStorage.getItem("savedBtnColor272"));
	useEffect(() => { localStorage.setItem("savedBtnColor272", btnColor272);}, [btnColor272]);
	return(
		<div>
		<button
			className = {btnColor272} 
			onClick = {() => setBtnColor272((btnColor272) => (btnColor272 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn272
