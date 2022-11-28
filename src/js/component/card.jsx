import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";

export function Cards(props) {
	return (
		<div className="col-md card-deck">
			<div className="card m-3">
				<img
					className="card-img-top"
					src={rigoImage}
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">{props.espacio}</h5>
					<p className="card-text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, illum ipsum? 
					</p>
				</div>
				<div className="card-footer text-center">
					<button type="button" className="btn btn-primary">
						Find Out More!
					</button>
				</div>
			</div>
		</div>
	);
};