import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Bestseller from './components/Bestseller';
import SingleProductPage from './components/SingleProductPage';
import ShopByCategory from './components/ShopByCategory';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Motto from './components/Motto';
import Collection from './components/Collection';
import Error404 from './components/Error404';

function App() {
	return (
		<>
			<Header />

			<Routes>
				<Route
					path=''
					element={
						<div>
							<HeroSection />
							<Motto />
							<Bestseller />
							<Collection />
							<ShopByCategory />
							<AboutUs />
						</div>
					}
				/>

				<Route path='/bestseller/:id' element={<SingleProductPage />} />
				<Route path='*' element={<Error404 />} />
			</Routes>

			<Footer />
		</>
	);
}

export default App;
