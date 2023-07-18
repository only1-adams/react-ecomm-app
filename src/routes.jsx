import HomePage from "./pages/HomePage.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import RootLayout from "./components/layouts/RootLayout.jsx";
import ProductNotFound from "./components/ProductNotFound.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import localStorageHelper from "./helpers/localstorage.js";
import { json } from "react-router-dom";
import NavigationGuard from "./components/NavigationGuard.jsx";
import { getSingleProduct } from "./libs/product.js";
import { defer } from "react-router-dom";

const routes = [
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				id: "auth",

				loader: () => {
					const token = localStorageHelper.getFromLocalStorage("token");

					if (token !== null) {
						return json({ token: token, isLoggedIn: true });
					} else {
						return json({ token: null, isLoggedIn: false });
					}
				},

				children: [
					{
						index: true,
						element: (
							<NavigationGuard>
								<HomePage />
							</NavigationGuard>
						),
					},
					{
						path: "product/:productId",
						errorElement: <ProductNotFound />,
						loader: async ({ params }) => {
							const productDataPromise = getSingleProduct(
								`https://fakestoreapi.com/products/${params.productId}`
							);

							return defer({ productData: productDataPromise });
						},
						element: (
							<NavigationGuard>
								<ProductDetails />
							</NavigationGuard>
						),
					},
					{
						path: "login",
						element: <LoginPage />,
					},
				],
			},
		],
	},
];

export default routes;
