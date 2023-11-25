import './App.css';
import { useState, useEffect } from 'react'

function DrawBtn131(){
	const[btnColor131, setBtnColor131] = useState(localStorage.getItem("savedBtnColor131"));
	useEffect(() => { localStorage.setItem("savedBtnColor131", btnColor131);}, [btnColor131]);
	return(
		<div>
		<button
			className = {btnColor131} 
			onClick = {() => setBtnColor131((btnColor131) => (btnColor131 === "baseColor" ? "changeColor" : "baseColor"))}
		></button>
		</div>
	);
}

export default DrawBtn131
