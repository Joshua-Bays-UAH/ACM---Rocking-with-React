import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn051(){
	const[btnColor051, setBtnColor051] = useState(localStorage.getItem("savedBtnColor051"));
	useEffect(() => { localStorage.setItem("savedBtnColor051", btnColor051);}, [btnColor051]);
	return(
		<div>
		<button
			className = {btnColor051} 
			onClick = {() => setBtnColor051((btnColor051) => (btnColor051 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn051
