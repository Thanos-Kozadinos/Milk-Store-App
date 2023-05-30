import React, { useEffect, useState } from 'react';

type SearchByNameProps = {
    names: string[];
    onSearch: (filteredItems: string[]) => void;
    uNames: string[];
  }

export const SearchByName = ({names, onSearch, uNames}:SearchByNameProps) => {
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const filteredItems = names.filter((name) =>
          name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        onSearch(filteredItems);
      }, [searchQuery]);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(uNames);
        setSearchQuery(event.target.value);
      };

      
    return (
    <div>
        <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search by name"
        />
    </div>
    );


}