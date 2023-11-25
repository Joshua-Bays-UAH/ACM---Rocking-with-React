import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn122(){
	const[btnColor122, setBtnColor122] = useState(localStorage.getItem("savedBtnColor122"));
	useEffect(() => { localStorage.setItem("savedBtnColor122", btnColor122);}, [btnColor122]);
	return(
		<div>
		<button
			className = {btnColor122} 
			onClick = {() => setBtnColor122((btnColor122) => (btnColor122 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn122
