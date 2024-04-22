import React from "react";
import background from '../assets/background.jpg';

const HeroSection = () => {
	return (
		<section className='relative h-96 overflow-hidden'>
			<div className='absolute inset-0 z-0'>
				<img src={background} alt='background' className='object-cover w-full h-full filter brightness-75 shadow-lg' />
			</div>
			<div className='flex flex-col items-center justify-center text-center text-white h-full relative z-10'>
				<h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl pt-4'>
					Your style, Your story, Your jewelry!
				</h1>
				<button className='mt-6 px-14 py-3 bg-transparent border border-white  rounded-md text-lg font-semibold hover:bg-white hover:text-black transition duration-300 ease-in-out'>
					Shop Now
				</button>
			</div>
		</section>
	);
};

export default HeroSection;
// className='object-cover w-full h-full filter brightness-75 shadow-lg'