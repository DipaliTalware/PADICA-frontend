import { NavLink } from "react-router-dom";
import image from "../assets/image.webp";

function Footer() {
  return (
		<>
			<div class='justify-center gap-14 pt-8 pb-8 bg-gray-100 hidden sm:flex'>
				<div class='flex flex-col'>
					<ul class='space-y-4 '>
						<li>
							<NavLink activeClassName='font-bold'>
								<span className='font-extrabold'>CUSTOMER SERVICE & FAQ</span>
							</NavLink>
						</li>
						<li>
							<NavLink activeClassName='font-bold'>
								Customer Service Overview
							</NavLink>
						</li>
						<li>
							<NavLink activeClassName='font-bold'>Order Status</NavLink>
						</li>
						<li>
							<NavLink activeClassName='font-bold'>Gift Card Balance</NavLink>
						</li>
						<li>
							<NavLink activeClassName='font-bold'>Shipping</NavLink>
						</li>
						<li>
							<NavLink activeClassName='font-bold'>Returns & Exchange</NavLink>
						</li>
						<li>
							<NavLink activeClassName='font-bold'>Contact Us</NavLink>
						</li>
						<li>
							<NavLink activeClassName='font-bold'>Size Guide</NavLink>
						</li>
						<li>
							<NavLink activeClassName='font-bold'>Store Finder</NavLink>
						</li>
					</ul>
				</div>
				<div class='flex flex-col bg-gray-100'>
					<ul class='space-y-4  '>
						<li>
							<NavLink activeClassName='font-bold'>
								<span className='font-extrabold'>MEMBERSHIP</span>
							</NavLink>
						</li>
						<li>
							<NavLink activeClassName='font-bold'>Register</NavLink>
						</li>
						<li>
							<NavLink activeClassName='font-bold'>PADICA Club</NavLink>
						</li>
						<li>
							<NavLink activeClassName='font-bold'>
								Crystal Society (SCS)
							</NavLink>
						</li>
					</ul>
				</div>
				<div class='flex flex-col'>
					<ul class='space-y-4 '>
						<li>
							<NavLink activeClassName='font-bold'>
								<span className='font-extrabold'>ABOUT US</span>
							</NavLink>
						</li>
						<li>
							<NavLink activeClassName='font-bold'>About PADICA</NavLink>
						</li>
						<li>
							<NavLink activeClassName='font-bold'>Sustainability</NavLink>
						</li>
						<li>
							<NavLink activeClassName='font-bold'>Jobs & Career</NavLink>
						</li>
						<li>
							<NavLink activeClassName='font-bold'>Alumni Community</NavLink>
						</li>
						<li>
							<NavLink activeClassName='font-bold'>Corporate Gifts</NavLink>
						</li>
						<li>
							<NavLink activeClassName='font-bold'>For Professionals</NavLink>
						</li>
						<li>
							<NavLink activeClassName='font-bold'>Sitemap</NavLink>
						</li>
						<li>
							<NavLink activeClassName='font-bold'>Code of Conduct</NavLink>
						</li>
					</ul>
				</div>
				<div class='flex flex-col'>
					<ul class='space-y-4 '>
						<li>
							<NavLink activeClassName='font-bold'>
								<span className='font-extrabold'>LEGAL</span>
							</NavLink>
						</li>
						<li>
							<NavLink activeClassName='font-bold'>Terms Of Use</NavLink>
						</li>
						<li>
							<NavLink activeClassName='font-bold'>Terms & Conditions</NavLink>
						</li>
						<li>
							<NavLink activeClassName='font-bold'>Privacy Policy</NavLink>
						</li>
						<li>
							<NavLink activeClassName='font-bold'>Cookie Consent</NavLink>
						</li>
						<li>
							<NavLink activeClassName='font-bold'>Imprint</NavLink>
						</li>
						<li>
							<NavLink activeClassName='font-bold'>
								Data Protection Consent Statement
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
			<hr />

			<div className='flex justify-center  bg-gray-100 pb-5'>
				<div className='flex pt-5 mr-5 p-2 gap-5 '>
					<NavLink>
						<svg
							className='h-6'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 512 512'
						>
							<path d='M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z' />
						</svg>
					</NavLink>
					<NavLink>
						<svg
							className='h-6'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 496 512'
						>
							<path d='M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3 .8-3.4 5-20.3 6.9-28.1 .6-2.5 .3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z' />
						</svg>
					</NavLink>
					<NavLink>
						<svg
							className='h-6'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 448 512'
						>
							<path d='M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z' />
						</svg>
					</NavLink>
					<NavLink>
						<svg
							className='h-6'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 448 512'
						>
							<path d='M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z' />
						</svg>
					</NavLink>
				</div>
			</div>
			<div className='flex justify-center pb-6 bg-gray-100 px-5'>
				<p>Copyright © 2024 PADICA JEWELRY. All rights reserved.</p>
			</div>
		</>
	);
}

export default Footer;
