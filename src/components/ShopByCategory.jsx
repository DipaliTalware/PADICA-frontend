import { createClient } from "contentful";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ShopByCategory = () => {
  const [data, setData] = useState([]);

  const client = createClient({
    space: import.meta.env.VITE_SPACE_ID,
    accessToken: import.meta.env.VITE_ACCESS_TOKEN,
  });

  const fetchData = () =>
    client
      .getEntries({ content_type: "category" })
      .then((response) => {
        setData(response.items);
        // console.log(response);
      })
      .catch(console.error);

  useEffect(() => {
    fetchData();
  }, []);

  return data ? (
		<div id='categories' className='pb-10'>
			<h2 className='pt-14 text-3xl text-center'>Shop by Category</h2>
			<div className='flex justify-center content-center pt-8 '>
				<div className='grid grid-cols-1 sm:flex sm:flex-row space-x-2 overflow-x-auto m-2 min-[320px]:grid min-[320px]:grid-cols-1 min-[320px]:px-4 min-[320px]:mb-4'>
					{data.map((eachData) => (
						<Link
							key={eachData.sys.id}
							className='card card-compact w-96 bg-base-100 shadow-xl min-[320px]:mb-4'
							to={`/category/${eachData.sys.id}`}
						>
							<div className='overflow-hidden'>
								<img
									className='h-30  shadow-lg transition-all duration-500 transform hover:scale-105 hover:rotate hover:shadow-xl'
									src={eachData.fields.image.fields.file.url}
									alt={eachData.fields.image.fields.file.fileName}
								/>
								<div className='card-body bg-slate-50'>
									<h2 className='card-title'>{eachData.fields.title}</h2>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	) : (
		<p>Loading...</p>
	);
};

export default ShopByCategory;
