import React, { useState } from "react";

const Home = () => {

	const [ color, setColor] = useState();

	const handleChangeBtn = (active) => {
		setColor(active);
	}

	return (
		<>
			<div className="tube"></div>
				<div className="container" id="Light">
					<div class="row">
						<div class="col-12 col-lg-12">
							<button 
								className={`fa-solid fa-circle text-danger colorRed ${color == "red" ? "active" : ""}`} 
								onClick={() => handleChangeBtn("red")}>
							</button>
							<button 
								className={`fa-solid fa-circle text-warning colorYellow ${color == "yellow" ? "active" : ""}`} 
								onClick={() => handleChangeBtn("yellow")}>
							</button>
							<button 
								className={`fa-solid fa-circle text-primary colorBlue ${color == "blue" ? "active" : ""}`} 
								onClick={() => handleChangeBtn("blue")}>							
							</button>
						</div>
					</div>
				</div>
		
		</>
	);
};

export default Home;
