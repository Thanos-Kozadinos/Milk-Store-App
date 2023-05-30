import React, { useState } from 'react';
import Modal from 'react-modal';
import '../css/MultiSelectFilter.css'

type MultiSelectFilterProps = {
    options: string[];
    isOpen: boolean;
    onRequestClose: () => void;
    onFilterChange: (selectedOptions: string[]) => void;
  }

export const MultiSelectFilter = ({options, isOpen, onRequestClose, onFilterChange}:MultiSelectFilterProps) => {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionChange = (option: string) => {
    const updatedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((item) => item !== option)
      : [...selectedOptions, option];
    setSelectedOptions(updatedOptions);
    onFilterChange(updatedOptions);
  };
  const handleSelectAll = () => {
    if (selectedOptions.length === options.length) {
      setSelectedOptions([]);
      onFilterChange([]);
    } else {
      setSelectedOptions(options);
      onFilterChange(options);
    }
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="MultiSelect Filter Modal"
      className="custom-modal"
      overlayClassName="custom-modal-overlay"
    >
    <h3>Filter</h3>
    <div className='filterModal'>
      <label>
        <input
          type="checkbox"
          checked={selectedOptions.length === options.length}
          onChange={handleSelectAll}
        />
        Select All
      </label>
      {options.map((option) => (
        <label key={option}>
          <input
            type="checkbox"
            checked={selectedOptions.includes(option)}
            onChange={() => handleOptionChange(option)}
          />
          {option}
        </label>
      ))}
    </div>
    </Modal>
  );
};