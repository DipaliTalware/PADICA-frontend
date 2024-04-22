import React from "react";
import collection from "../assets/collection.jpg";

const Collection = () => {
  return (
		<div
			id='collections'
			className='flex flex-col lg:flex-row bg-white ml-5 mr-5'
		>
			<img
				src={collection}
				alt='collection'
				className='w-full lg:w-1/2 rounded-md lg:rounded-l-md'
			/>
			<div className='flex flex-col justify-center lg:pl-8 lg:pr-10 lg:py-0 pt-6 lg:pt-0'>
				<h2 className='font-bold mb-2 text-3xl lg:text-4xl px-4 lg:px-0'>
					Bliss Collection
				</h2>
				<p className='px-4 lg:px-0 text-lg'>
					Drawing from the astrological chart, the Bliss Collection employs a
					modern yet intricate design language to capture the unique spirit of
					the zodiac symbols. Playful figurines are manifested in flawlessly
					faceted white crystal and engraved gold-tone details. ​Shining with
					character, they’re the ideal gifts.
				</p>
				<div className='px-4 lg:px-0 text-lg pt-6 underline decoration-solid cursor-pointer'>
					<p>Shop Bliss collection</p>
				</div>
			</div>
		</div>
	);
};

export default Collection;
