import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';


const BonusSection = () => {
    return (
        <div className="lg:max-w-[70vw] md:max-w-[90vw] mx-auto p-6 my-10 ">
            <h2 className="text-center max-w-[60vw] m-auto gradient-text text-3xl sm:text-5xl font-semibold mb-2">
                Enroll today & Get Premium Bonuses worth ₹20,000
            </h2>
            <p className="text-center sm:text-lg text-gray-700 my-8 mb-28">
                Supercharge your Pitches <span className="font-bold">Immediately</span> with these Done-For-You Bonuses
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="relative p-6 bg-white border-purple-200 transition duration-500 hover:border-red-500 border-dashed border-2 rounded-2xl shadow-md flex flex-col items-center text-start">
                    <div className="relative h-52 mb-4  -mt-28">
                        <Image height={200} width={200} src="/images/book.png" alt="" className="object-cover h-52  " />
                    </div>
                    <h3 className=" text-3xl sm:text-4xl font-semibold mb-2 text-gray-700">Agency Pricing Guide (E-Book)</h3>
                    <p className="text-gray-600 mb-2">
                        Learn the best practice of pricing your services no matter what the size of your agency (or freelancing business).
                    </p>
                    <span className="font-bold text-xl gradient-text">WORTH ₹5,000</span>
                </div>



                {/* Card 2 */}
                <div className="relative p-6 mt-20 md:mt-0 bg-white border-purple-200 transition duration-500 hover:border-red-500 border-dashed border-2 rounded-2xl shadow-md flex flex-col items-center text-start">
                    <div className="relative h-52 mb-4  -mt-28">
                        <Image height={200} width={200} src="/images/calculator.png" alt="" className="object-cover h-52  " />
                    </div>
                    <h3 className=" text-3xl sm:text-4xl font-semibold mb-2 text-gray-700">Retainer Calculator</h3>
                    <p className="text-gray-600 mb-2">
                        Remove the guesswork and get this ready-to-use calculator to determine how much you should charge your clients. Get calculations based on your resource allocation and margins.                    </p>
                    <span className="font-bold text-xl gradient-text">WORTH ₹5,000</span>
                </div>

                {/* Card 3 */}
                <div className="bg-gradient-to-r from-[#C81151] to-[#5A54A8] rounded-lg p-6 text-white flex flex-col justify-center text-start">
                    <h3 className="font-bold text-4xl mb-2">Secret Bonus</h3>
                    <p className="my-4 ">
                        Unlock this HUGE bonus inside the course. It will make your pitches look like those of the biggest agencies in the market.
                    </p>
                    <p className="font-bold text-xl">WORTH ₹10,000</p>
                </div>
            </div>

            <div className="text-center mt-8">
                <button className="relative inline-block text-lg sm:text-xl gap-2 m-auto bg-gradient-to-r from-[#C81151] to-[#5A54A8] text-white px-10 py-3 rounded-lg shadow transition-transform transform hover:-translate-y-1 duration-300">
                    <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 absolute top-4 left-3  text-white" />
                    GET INSTANT ACCESS AT JUST ₹999 <span className="line-through text-xs text-gray-300">₹3999</span>
                </button>

                <p className=" mt-2 text-gray-800">* GST applicable</p>
                <p className=" text-gray-800">🎉 Limited Time Launch Price!</p>
            </div>
        </div>
    );
};

export default BonusSection;
