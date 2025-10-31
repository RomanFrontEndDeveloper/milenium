import Image from 'next/image';
import React from 'react';
import milenium from '@/public/images/milenium.png';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
	return (
		<div className='pt-20 pb-12 bg-black '>
			<div className='w-[80%] mx-auto grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-8 border-b-[1.5px] border-white border-opacity-20'>
				{/* 1Footer Part */}
				<div className=''>
					<div className='flex items-center space-x-2'>
						<div className='md:w-16 md:h-14 w-10 h-10 text-white flex items-center justify-center flex-col'>
							<Image
								src={milenium}
								alt='Real Estate Agency Logo'
								width={50}
								height={50}
								priority
								className='object-contain'
							/>
						</div>
						<h1 className='text-white font-bold text-sm sm:text-base md:text-xl'>
							Milenium
						</h1>
					</div>
					<p className='text-gray-300 mt-6'>
						Найкраще агенство нерухомості у м.Хмельницький
					</p>
					<p className='text-gray-300 mt-4 font-semibold'>
						milenium69@gmail.com
					</p>
					<p className='text-gray-300 mt-2 font-semibold'>
						+38 067 380 11 64
					</p>
					{/* Social Links */}
					<div className='flex items-center space-x-4 mt-6'>
						<FaFacebookF className='w-6 h-6 text-blue-300 ' />
						<FaTiktok className='w-6 h-6 text-pink-200 ' />
						<FaInstagram className='w-6 h-6 text-pink-600 ' />
					</div>
				</div>
				{/* 2nd Part */}
				<div className='md:mx-auto'>
					<h1 className='text-lg text-white font-bold mb-7	 mt-4'>
						Популярний пошук
					</h1>
					<p className='text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-50 mb-3 w-fit'>
						Квартира в оренду
					</p>
					<p className='text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-50 mb-3 w-fit'>
						Квартира на будь-яку ціну та смак
					</p>
					<p className='text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-50 mb-3 w-fit'>
						Офіси (купівля)
					</p>
					<p className='text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-50 mb-3 w-fit'>
						Офіси (оренда)
					</p>
				</div>
				{/* 3nd Part */}
				<div className='lg:mx-auto'>
					<h1 className='text-lg text-white font-bold mb-7 mt-4'>
						Швидке посилання
					</h1>
					<p className='text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-50 mb-3 w-fit'>
						Умови використання
					</p>
					<p className='text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-50 mb-3 w-fit'>
						Політика конфіденційності
					</p>
					<p className='text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-50 mb-3 w-fit'>
						Тарифні плани
					</p>
					<p className='text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-50 mb-3 w-fit'>
						Наші послуги
					</p>
					<p className='text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-50 mb-3 w-fit'>
						Зверніться до служби підтримки
					</p>
					<p className='text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-50 mb-3 w-fit'>
						Кар'єра у нас
					</p>
					<p className='text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-50 mb-3 w-fit'>
						FAQ
					</p>
				</div>
				{/* 4nd Part */}
				<div className='md:mx-auto'>
					<h1 className='text-lg text-white font-bold mb-7 mt-4'>
						Відкрийте
					</h1>
					<p className='text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-50 mb-3 w-fit'>
						Дубове
					</p>
					<p className='text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-50 mb-3 w-fit'>
						Центр
					</p>
					<p className='text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-50 mb-3 w-fit'>
						Виставка
					</p>
					<p className='text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-50 mb-3 w-fit'>
						Ракове
					</p>
					<p className='text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-50 mb-3 w-fit'>
						Південно-західний
					</p>
					<p className='text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-50 mb-3 w-fit'>
						Озерна
					</p>
				</div>
			</div>
			<p className='text-center mt-4 text-base text-white opacity-70'>
				© Авторське право 2025 року належить Pushkar Andrew
			</p>
		</div>
	);
};

export default Footer;
