const Error404 = () => {
	const goBack = () => {
		window.history.back();
	};

	return (
		<div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
			<div className='flex flex-col items-center'>
				<h1 className='text-6xl font-bold mb-4 text-gray-800'>404</h1>
				<p className='text-2xl text-gray-600 mb-8'>Oops! Page not found.</p>
				<button
					onClick={goBack}
					className='mt-6 px-14 py-3 bg-transparent border border-white rounded-md text-lg font-semibold hover:bg-white hover:text-black transition duration-300 ease-in-out'
				>
					Go Back
				</button>
			</div>
		</div>
	);
};

export default Error404;
