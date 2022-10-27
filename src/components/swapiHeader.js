import React from "react";
import { HashLink as Link } from "react-router-hash-link";

function SwapiHeader() {
	return (
		<div className="row yellow">
			<div className="app-header">
				<h1>SWAPI</h1>
				<p>The Star Wars API</p>
				
				<p>
					<Link to="/about#what-happened">(...looking for swapi.co?)</Link>
				</p>
			</div>
		</div>
	);
}

export default SwapiHeader;
