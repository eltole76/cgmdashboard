"use client";

import { useState, ChangeEvent } from 'react';
import { FaSearch } from 'react-icons/fa';
import Image from "next/image";

interface SearchMenuProps {
  onSearch: (searchTerm: string) => void;
}

const SearchMenu: React.FC<SearchMenuProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="flex items-center justify-between p-4 bg-black-600 text-white">
      <Image src='/android-chrome-192x192.png' alt='logo'
                        width={50}
                        height={50}
                        priority={true}>
        </Image>
      <div className="relative">
        
        <input
          type="text"
          className="p-2 pl-10 rounded-md border border-gray-300 text-black"
          placeholder="Buscar Cama ..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <FaSearch className="absolute left-3 top-3 text-gray-500" />
      </div>
    </div>
  );
};

export default SearchMenu;
