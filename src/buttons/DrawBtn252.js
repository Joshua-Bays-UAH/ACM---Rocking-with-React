import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn252(){
	const[btnColor252, setBtnColor252] = useState(localStorage.getItem("savedBtnColor252"));
	useEffect(() => { localStorage.setItem("savedBtnColor252", btnColor252);}, [btnColor252]);
	return(
		<div>
		<button
			className = {btnColor252} 
			onClick = {() => setBtnColor252((btnColor252) => (btnColor252 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn252
