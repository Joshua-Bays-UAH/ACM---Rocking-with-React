import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn270(){
	const[btnColor270, setBtnColor270] = useState(localStorage.getItem("savedBtnColor270"));
	useEffect(() => { localStorage.setItem("savedBtnColor270", btnColor270);}, [btnColor270]);
	return(
		<div>
		<button
			className = {btnColor270} 
			onClick = {() => setBtnColor270((btnColor270) => (btnColor270 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn270
