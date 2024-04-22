import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CartUpdate from './CartUpdate';

const SingleProductPage = () => {
	const [data, setData] = useState(null);
	// const [selected, setSelected] = useState(0);
	const [buttonText, setButtonText] = useState('Add To Cart');
	const [showPopUp, setShowPopUp] = useState(false);
	const { id } = useParams();

	const fetchData = async () => {
		await axios(`http://localhost:8080/${id}`).then((res) => {
			console.log(res.data);
			setData(res.data);
		});
	};

	useEffect(() => {
		fetchData();
	}, []);

	function buttonClicked() {
		setButtonText('add more');
		setShowPopUp(true);
	}
	function closePopUp() {
		setShowPopUp(false);
	}

	return (
		<div>
			{data ? (
				<div className='wrapper py-14'>
					<div className=' flex m-10 '>
						<div className='w-2/5'>
							<img src={data.img} alt='image' />
						</div>
						<div className='p-5 w-1/2 '>
							<span className='font-semibold'>
								{data.title} - {data.price} EUR
							</span>
							<br />
							<span></span>
							<br />
							<span className='flex border-2 bg-stone-300 p-3'>
								<svg
									className='h-5 px-2'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 448 512'
								>
									<path d='M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z' />
								</svg>
								<p>In stock - delivery in 2-3 working days</p>
							</span>

							<button
								onClick={() => buttonClicked()}
								className={`block w-full mt-6 px-14 py-3 bg-black text-white border-2 rounded-md text-lg font-semibold transition duration-300 ease-in-out ${
									showPopUp
										? 'pointer-events-none'
										: ' hover:bg-white hover:text-black '
								}`}
							>
								{buttonText}
							</button>
							{showPopUp && (
								<CartUpdate closeEvent={closePopUp} image={data.img} />
							)}
							<br />
							<span className='text-balance'>{data.description}</span>
						</div>
					</div>
				</div>
			) : (
				<p>Loading</p>
			)}
		</div>
	);
};

export default SingleProductPage;
