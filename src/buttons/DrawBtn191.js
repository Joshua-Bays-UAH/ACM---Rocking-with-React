import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn191(){
	const[btnColor191, setBtnColor191] = useState(localStorage.getItem("savedBtnColor191"));
	useEffect(() => { localStorage.setItem("savedBtnColor191", btnColor191);}, [btnColor191]);
	return(
		<div>
		<button
			className = {btnColor191} 
			onClick = {() => setBtnColor191((btnColor191) => (btnColor191 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn191
