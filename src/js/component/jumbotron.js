import React from "react";

//include images into your bundle

//create your first component
export function Jumbotron() {
	return (
		<div className="text-center mt-5">
			<div className="jumbotron">
				<h1 className="display-4">Hello, world!</h1>
				<p className="lead">
					Shortstache is a Freelance Photographer that goes by the
					name of Garrett King. He's based in Los Angeles, California.
					He travels all around the world to get the best shots.
				</p>
				<hr className="my-4" />
				<p>Click "Learn more" to be directed to his website.</p>
				<a
					className="btn btn-primary btn-lg"
					href="https://www.shortstache.com/"
					role="button">
					Learn more
				</a>
			</div>
		</div>
	);
}
