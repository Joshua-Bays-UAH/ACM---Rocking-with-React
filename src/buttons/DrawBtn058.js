import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn058(){
	const[btnColor058, setBtnColor058] = useState(localStorage.getItem("savedBtnColor058"));
	useEffect(() => { localStorage.setItem("savedBtnColor058", btnColor058);}, [btnColor058]);
	return(
		<div>
		<button
			className = {btnColor058} 
			onClick = {() => setBtnColor058((btnColor058) => (btnColor058 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn058
