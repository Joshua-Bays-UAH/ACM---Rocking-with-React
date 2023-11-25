import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn364(){
	const[btnColor364, setBtnColor364] = useState(localStorage.getItem("savedBtnColor364"));
	useEffect(() => { localStorage.setItem("savedBtnColor364", btnColor364);}, [btnColor364]);
	return(
		<div>
		<button
			className = {btnColor364} 
			onClick = {() => setBtnColor364((btnColor364) => (btnColor364 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn364
