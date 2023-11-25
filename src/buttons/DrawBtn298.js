import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn298(){
	const[btnColor298, setBtnColor298] = useState(localStorage.getItem("savedBtnColor298"));
	useEffect(() => { localStorage.setItem("savedBtnColor298", btnColor298);}, [btnColor298]);
	return(
		<div>
		<button
			className = {btnColor298} 
			onClick = {() => setBtnColor298((btnColor298) => (btnColor298 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn298
