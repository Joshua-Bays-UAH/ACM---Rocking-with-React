import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn293(){
	const[btnColor293, setBtnColor293] = useState(localStorage.getItem("savedBtnColor293"));
	useEffect(() => { localStorage.setItem("savedBtnColor293", btnColor293);}, [btnColor293]);
	return(
		<div>
		<button
			className = {btnColor293} 
			onClick = {() => setBtnColor293((btnColor293) => (btnColor293 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn293
