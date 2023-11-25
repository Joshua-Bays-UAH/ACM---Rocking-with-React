import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn353(){
	const[btnColor353, setBtnColor353] = useState(localStorage.getItem("savedBtnColor353"));
	useEffect(() => { localStorage.setItem("savedBtnColor353", btnColor353);}, [btnColor353]);
	return(
		<div>
		<button
			className = {btnColor353} 
			onClick = {() => setBtnColor353((btnColor353) => (btnColor353 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn353
