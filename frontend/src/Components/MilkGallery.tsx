import { milks } from "../Services/api"
import { CardMilk } from "./CardMilk"
import '../css/MilkGallery.css'
import { useEffect, useState } from "react"
import { MultiSelectFilter } from "./MultiSelectFilter"
import { SearchByName } from "./SearchByName"

type MilkGalleryProps = {
    data: milks[]
}

export const MilkGallery = ({data}:MilkGalleryProps) => {
    const uniqueTypes = Array.from(new Set(data.flatMap(mlk=> mlk.type)))
    const uniqueNames = Array.from(new Set(data.flatMap(mlk=> mlk.name)))
    const [selectedFilters, setSelectedFilters] = useState<string[]>(uniqueTypes);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [names, setNames] = useState<string[]>(uniqueNames);

    const handleFilterChange = (selectedOptions: string[]) => {
        setSelectedFilters(selectedOptions);
      };
      const openModal = () => {
        setIsModalOpen(true);
      }; 
      const closeModal = () => {
        setIsModalOpen(false);
      };

      const handleSearch = (filteredNames: string[]) => {
        setNames(filteredNames);
      };

    const milkCarton = data.filter(milk => selectedFilters.includes(milk.type)).filter(ilk => names.includes(ilk.name)).map(mlk => <CardMilk data={mlk}/> )

    console.log(names)
    return (
        <>
        <SearchByName names={names} onSearch={handleSearch} uNames={uniqueNames} />
        <button onClick={openModal}>Open Filter Modal</button>
        <MultiSelectFilter options={uniqueTypes} isOpen={isModalOpen} onRequestClose={closeModal} onFilterChange={handleFilterChange} />

        <div className="gallery">
            {milkCarton}
        </div>
        </>
      )
}