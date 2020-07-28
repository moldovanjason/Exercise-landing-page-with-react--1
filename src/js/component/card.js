import React from "react";

//include images into your bundle

//create your first component
export function Card() {
	const cardTitles = [
		{
			title: "Summer Hike",
			imgUrl: "https://i.ytimg.com/vi/pYuhN1z_TD8/maxresdefault.jpg"
		},
		{
			title: "Take Off",
			imgUrl: "https://pbs.twimg.com/media/DZuZ9aeU8AA1nFo.jpg"
		},
		{
			title: "Adidas Shoot",
			imgUrl:
				"https://images.squarespace-cdn.com/content/v1/55c2347ae4b00645a8e6e502/1517293841057-R59E2TSZ4SDC9QM1RHAN/ke17ZwdGBToddI8pDm48kGwqNa-TSATgABi909OK27Z7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UQSxQa_pE67Ig1CszvlZo11NCLvqIlshiNC_JCcjnOmqOV4zqrbdg_2AqIEjj1Z3Fg/adidas-12.jpg"
		},
		{
			title: "Work Space",
			imgUrl:
				"https://images.squarespace-cdn.com/content/v1/55c2347ae4b00645a8e6e502/1584419047953-OSCG3326IY20Z4T1RKVC/ke17ZwdGBToddI8pDm48kAegX-1irUL6qWVp5YHdPlZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0kD6Ec8Uq9YczfrzwR7e2MhtiLfXVvImLpDdoVYmcyh_AcJVOluizfCsxozWDxokZg/Shortstache_About_Bio.jpg?format=2500w"
		}
	];
	const cardList = cardTitles.map(function(hand, i) {
		return (
			<div className="card m-3" style={{ width: "18rem" }} key={i}>
				<img src={hand.imgUrl} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{hand.title}</h5>
					<p className="card-text">
						{
							"Some quick example text to build on the card title and make up the bulk of the card's content."
						}
					</p>
					<a
						href="https://www.shortstache.com/"
						className="btn btn-primary">
						Learn More
					</a>
				</div>
			</div>
		);
	});

	return <div className="d-flex justify-content-center">{cardList}</div>;
}
