import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn296(){
	const[btnColor296, setBtnColor296] = useState(localStorage.getItem("savedBtnColor296"));
	useEffect(() => { localStorage.setItem("savedBtnColor296", btnColor296);}, [btnColor296]);
	return(
		<div>
		<button
			className = {btnColor296} 
			onClick = {() => setBtnColor296((btnColor296) => (btnColor296 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn296
