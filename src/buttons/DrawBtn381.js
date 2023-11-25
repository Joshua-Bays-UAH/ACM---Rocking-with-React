import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn381(){
	const[btnColor381, setBtnColor381] = useState(localStorage.getItem("savedBtnColor381"));
	useEffect(() => { localStorage.setItem("savedBtnColor381", btnColor381);}, [btnColor381]);
	return(
		<div>
		<button
			className = {btnColor381} 
			onClick = {() => setBtnColor381((btnColor381) => (btnColor381 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn381
