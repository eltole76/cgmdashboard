"use client";

import { useState } from 'react';
import SearchMenu from './searchmenu'
import Image from 'next/image';

interface Item {
  id: number;
  url: string;
  token: string;
  title: string;
}

interface Data {
  cgm: Item[];
}

interface CardsProps {
  data: Data;
}

const Cards: React.FC<CardsProps> = ({ data }) => {
  const [filteredData, setFilteredData] = useState<Item[]>(data.cgm);

  const handleSearch = (searchTerm: string) => {
    const filtered = data.cgm.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div>
      <SearchMenu onSearch={handleSearch} />
      <div className="grid grid-cols-4 gap-4 p-8">
        {filteredData.map((item, index) => (
          <div
            key={index}
            className="rounded-lg bg-black hover:border hover:border-blue-500 hover:shadow-xl transition duration-500 p-4"
          >
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <h2 className="text-lg font-semibold mb-2 text-blue-700">
                {item.title}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
            </a>
            <div>
              <Image
                src={item.url}
                alt={item.title}
                width={363}
                height={322}
                className="rounded-md"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
