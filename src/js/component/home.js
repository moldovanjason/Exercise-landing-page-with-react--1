import React from "react";
import { Navbar } from "./navbar";
//include images into your bundle

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<Navbar />
		</div>
	);
}
