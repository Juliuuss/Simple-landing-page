import React from "react";

export function Jumbotron(props){
    return (
        <div className="container-fluid  d-inline  text-start">
            <div className="jumbotron m-3 bg-light p-5">
                <h1 class="display-4">{props.title}</h1>
                <p class="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate neque quas quia accusantium totam. Natus culpa ipsum eaque.  
                </p>
                <button class="btn btn-primary">
					Call to action!
				</button>
            </div>
        </div>
    )
}