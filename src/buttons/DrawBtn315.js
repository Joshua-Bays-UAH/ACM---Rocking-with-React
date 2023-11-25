import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn315(){
	const[btnColor315, setBtnColor315] = useState(localStorage.getItem("savedBtnColor315"));
	useEffect(() => { localStorage.setItem("savedBtnColor315", btnColor315);}, [btnColor315]);
	return(
		<div>
		<button
			className = {btnColor315} 
			onClick = {() => setBtnColor315((btnColor315) => (btnColor315 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn315
