import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn181(){
	const[btnColor181, setBtnColor181] = useState(localStorage.getItem("savedBtnColor181"));
	useEffect(() => { localStorage.setItem("savedBtnColor181", btnColor181);}, [btnColor181]);
	return(
		<div>
		<button
			className = {btnColor181} 
			onClick = {() => setBtnColor181((btnColor181) => (btnColor181 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn181
