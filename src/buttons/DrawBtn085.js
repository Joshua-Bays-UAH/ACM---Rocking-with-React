import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn085(){
	const[btnColor085, setBtnColor085] = useState(localStorage.getItem("savedBtnColor085"));
	useEffect(() => { localStorage.setItem("savedBtnColor085", btnColor085);}, [btnColor085]);
	return(
		<div>
		<button
			className = {btnColor085} 
			onClick = {() => setBtnColor085((btnColor085) => (btnColor085 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn085
