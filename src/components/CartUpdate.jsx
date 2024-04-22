const CartUpdate = ({ closeEvent, image }) => {
	return (
		<div className='w-96 h-screen bg-white fixed top-0 right-0 '>
			<div className='flex justify-between m-8'>
				<h3 className='text-xl'> 1 product is in the cart</h3>
				<button onClick={() => closeEvent()}>
					<svg
						className='CLOSE-Button h-5'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 512 512'
					>
						<path d='M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z' />
					</svg>
				</button>
			</div>
			<img src={image} alt='image' width={80} height={80} className='m-8' />
			<span className='flex justify-center'>
				<button className='CHECKOUT-button block w-11/12 p-3  bg-black text-white border-2 rounded-md text-lg font-semibold hover:bg-white hover:text-black transition duration-300 ease-in-out'>
					checkout
				</button>
			</span>
		</div>
	);
};

export default CartUpdate;
