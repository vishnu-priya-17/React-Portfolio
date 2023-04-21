import React from 'react';
import { FiArrowDownCircle } from 'react-icons/fi';
function Home()
{
    return (
        <center>
        <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark" id="home">
            <p>HI I AM VISHNU PRIYA </p>
             <a
						download="Resume.pdf"
						href="/Resume.pdf"
						id="name"
						aria-label="Download Resume"
                        
					>
						<FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
						<span className="text-sm sm:text-lg font-general-medium duration-100">
							Download Resume
						</span>
					</a>
        </div>
        </center>
    );
}

export default Home;