import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn354(){
	const[btnColor354, setBtnColor354] = useState(localStorage.getItem("savedBtnColor354"));
	useEffect(() => { localStorage.setItem("savedBtnColor354", btnColor354);}, [btnColor354]);
	return(
		<div>
		<button
			className = {btnColor354} 
			onClick = {() => setBtnColor354((btnColor354) => (btnColor354 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn354
