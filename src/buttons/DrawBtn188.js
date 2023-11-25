import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn188(){
	const[btnColor188, setBtnColor188] = useState(localStorage.getItem("savedBtnColor188"));
	useEffect(() => { localStorage.setItem("savedBtnColor188", btnColor188);}, [btnColor188]);
	return(
		<div>
		<button
			className = {btnColor188} 
			onClick = {() => setBtnColor188((btnColor188) => (btnColor188 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn188
