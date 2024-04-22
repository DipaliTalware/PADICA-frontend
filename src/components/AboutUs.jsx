import about from '../assets/about.webp';

const AboutUs = () => {
	return (
		<div
			id='about'
			className='flex flex-col lg:flex-row bg-white pb-14 mr-5 ml-5'
		>
			<div className='flex flex-col justify-center items-center lg:w-1/2 pt-10 pb-8 lg:pb-0 lg:pr-8 text-center rounded-md'>
				<h2 className='text-3xl mb-2 font-bold'>About Us</h2>
				<p className='text-lg px-6 lg:px-0'>
					Welcome to PADICA Jewelry, where elegance meets craftsmanship. We are
					passionate about creating exquisite jewelry pieces that celebrate
					life's special moments.
					<br />
					With our attention to detail and commitment to quality, we strive to
					provide you with timeless treasures that will be cherished for
					generations.
				</p>
				<button className='border-solid border-black px-8 py-3 mt-4 font-semibold hover:bg-black hover:text-white transition duration-300 ease-in-out border-2'>
					Learn more
				</button>
			</div>
			<div className='flex justify-center lg:w-1/2'>
				<img src={about} alt='about' className='rounded-md' />
			</div>
		</div>
	);
};

export default AboutUs;
