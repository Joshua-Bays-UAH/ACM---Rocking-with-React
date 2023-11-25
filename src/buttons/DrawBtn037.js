import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn037(){
	const[btnColor037, setBtnColor037] = useState(localStorage.getItem("savedBtnColor037"));
	useEffect(() => { localStorage.setItem("savedBtnColor037", btnColor037);}, [btnColor037]);
	return(
		<div>
		<button
			className = {btnColor037} 
			onClick = {() => setBtnColor037((btnColor037) => (btnColor037 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn037
