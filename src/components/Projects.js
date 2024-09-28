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
      <div className="filters filter-button-group text-center mb-6">
        <h4 className="text-gray-600 text-xl">
          <ul className="flex  bg-black  justify-center space-x-4 p-5 mt-3">
            <li className={`cursor-pointer ${filter === '*' ? 'text-blue-600' : ''}`} onClick={() => handleFilterChange('*')}>
              All
            </li>
            <li className={`cursor-pointer ${filter === '.webdesign' ? 'text-blue-600' : ''}`} onClick={() => handleFilterChange('.webdesign')}>
              Web Design
            </li>
            <li className={`cursor-pointer ${filter === '.webdev' ? 'text-blue-600' : ''}`} onClick={() => handleFilterChange('.webdev')}>
              Web Development
            </li>
            <li className={`cursor-pointer ${filter === '.brand' ? 'text-blue-600' : ''}`} onClick={() => handleFilterChange('.brand')}>
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
