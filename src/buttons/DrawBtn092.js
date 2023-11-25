import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn092(){
	const[btnColor092, setBtnColor092] = useState(localStorage.getItem("savedBtnColor092"));
	useEffect(() => { localStorage.setItem("savedBtnColor092", btnColor092);}, [btnColor092]);
	return(
		<div>
		<button
			className = {btnColor092} 
			onClick = {() => setBtnColor092((btnColor092) => (btnColor092 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn092
