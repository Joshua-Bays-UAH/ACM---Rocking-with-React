import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn266(){
	const[btnColor266, setBtnColor266] = useState(localStorage.getItem("savedBtnColor266"));
	useEffect(() => { localStorage.setItem("savedBtnColor266", btnColor266);}, [btnColor266]);
	return(
		<div>
		<button
			className = {btnColor266} 
			onClick = {() => setBtnColor266((btnColor266) => (btnColor266 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn266
