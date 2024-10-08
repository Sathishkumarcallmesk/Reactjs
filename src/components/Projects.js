import React, { useEffect, useRef, useState } from 'react';
import Isotope from 'isotope-layout';
import Experience from './asset/EXPERIENCE-WITH-STAND.png';

const portfolioItems = [
  { id: 1, category: 'webdesign', image: Experience },
  { id: 2, category: 'webdesign', image: Experience },
  { id: 3, category: 'brand', image: Experience },
  { id: 4, category: 'webdesign', image: Experience },
  { id: 5, category: 'webdesign', image: Experience },
  { id: 6, category: 'brand', image: Experience },
  { id: 7, category: 'webdesign', image: Experience },
  { id: 8, category: 'webdesign', image: Experience },
  { id: 9, category: 'webdev', image: Experience },
];

const Portfolio = () => {
  const [filter, setFilter] = useState('*');
  const gridRef = useRef(null);

  useEffect(() => {
    const iso = new Isotope(gridRef.current, {
      itemSelector: '.grid-item',
      layoutMode: 'fitRows',
    });

    iso.arrange({ filter });

    return () => {
      iso.destroy();
    };
  }, [filter]);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div className="px-4  max-w-screen-xl mx-auto" id="projects">
      <div className="filters   filter-button-group text-center mb-6">
        <h4 className="text-gray-600 text-xl ">
          <ul className="flex  justify-center mt-20 mb-20 bg-gray-500 p-4 mt-5 rounded-full shadow-lg space-x-6">
            <li
              className={`cursor-pointer px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${filter === '*'
                  ? 'bg-white text-black shadow-lg'
                  : 'text-white hover:bg-white hover:text-black'
                }`}
              onClick={() => handleFilterChange('*')}
            >
              All
            </li>
            <li
              className={`cursor-pointer px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${filter === '.webdesign'
                  ? 'bg-white text-black shadow-lg'
                  : 'text-white hover:bg-white hover:text-black'
                }`}
              onClick={() => handleFilterChange('.webdesign')}
            >
              Web Design
            </li>
            <li
              className={`cursor-pointer px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${filter === '.webdev'
                  ? 'bg-white text-black shadow-lg'
                  : 'text-white hover:bg-white hover:text-black'
                }`}
              onClick={() => handleFilterChange('.webdev')}
            >
              Web Development
            </li>
            <li
              className={`cursor-pointer px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${filter === '.brand'
                  ? 'bg-white text-black shadow-lg'
                  : 'text-white hover:bg-white hover:text-black'
                }`}
              onClick={() => handleFilterChange('.brand')}
            >
              Brand Identity
            </li>
          </ul>

        </h4>
      </div>

      <div className="content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" ref={gridRef}>
        {portfolioItems.map(item => (
          <div className={`single-content grid-item ${item.category} group`} key={item.id}>
            <img src={item.image} alt={`Portfolio Item ${item.id}`} className="w-[250px] h-auto p-2 rounded-lg transition-transform duration-200 ease-in-out transform group-hover:scale-105" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
