import { Suspense } from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { Await } from "react-router-dom";

export default function ProductDetails() {
	const product = useLoaderData();

	return (
		<Suspense fallback={<p>Loading Product data</p>}>
			<Await resolve={product.productData}>
				{(singleProduct) => {
					return (
						<>
							<div className="container-fluid">
								<div className="row banner">
									<div className="col-12">
										<p>
											<Link to="/">Home </Link>
											<span>/ Products</span>
										</p>
									</div>
								</div>
							</div>
							<div className="container mt-5 mb-5">
								<div className="row fdet">
									<div className="card mb-3">
										<div className="row g-0">
											<div className="col-md-6">
												<img
													src={singleProduct.image}
													className="img-fluid rounded-start"
													style={{ height: "60vh" }}
													width="500px"
												/>
											</div>
											<div className="col-md-6">
												<div className="card-body">
													<h5 className="card-title">{singleProduct.title}</h5>
													<h5 className="card-title">₦{singleProduct.price}</h5>
													<hr />
													<p className="card-text">
														{singleProduct.description}
													</p>
													<button className="btn" type="submit">
														Add to cart
													</button>
													<p className="fdetcat">
														Category: <span>{singleProduct.category}</span>
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</>
					);
				}}
			</Await>
		</Suspense>
	);
}

// {
//         "address": {
//             "geolocation": {
//                 "lat": "-37.3159",
//                 "long": "81.1496"
//             },
//             "city": "kilcoole",
//             "street": "new road",
//             "number": 7682,
//             "zipcode": "12926-3874"
//         },
//         "id": 1,
//         "email": "john@gmail.com",
//         "username": "johnd",
//         "password": "m38rmF$",
//         "name": {
//             "firstname": "john",
//             "lastname": "doe"
//         },
//         "phone": "1-570-236-7033",
//         "__v": 0
//     }
