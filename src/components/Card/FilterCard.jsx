/* eslint-disable react/prop-types */

import { MdClose } from "react-icons/md";

const FilterCard = ({ setOpenFilter, filteredProducts, onFilterChange, selectedFilters }) => {
  const uniqueTag = new Set();
  const uniquepriceRange = new Set();
  const uniqueColor = new Set();

  const uniqueFilterTags = filteredProducts.filter((fil) => {
    if (uniqueTag.has(fil.tag)) {
      return false;
    }
    uniqueTag.add(fil.tag);
    return true;
  });

  const uniqueFilterRange = filteredProducts.filter((fil) => {
    if (uniquepriceRange.has(fil.range)) {
      return false;
    }
    uniquepriceRange.add(fil.range);
    return true;
  });

  const uniqueFilterColor = filteredProducts.filter((fil) => {
    if (uniqueColor.has(fil.color)) {
      return false;
    }
    uniqueColor.add(fil.color);
    return true;
  });


  const handleTagFilterChange = (tag) => {
    onFilterChange({ tag: tag === selectedFilters.tag ? null : tag });
  };

  const handleRangeFilterChange = (range) => {
    onFilterChange({ range: range === selectedFilters.range ? null : range });
  }
 
  const handleColorFilterChange = (color) => {
    onFilterChange({ color: color === selectedFilters.color ? null : color });
  }

  return (
    <section className="w-full h-full p-5 sm:p-10 flex flex-col items-start justify-start gap-10">
      <header className="w-full flex items-center justify-between">
        <h1 className="text-lg font-semibold text-light-gray uppercase">
          Filters
        </h1>
        <MdClose
          className="w-6 h-6 text-light-gray cursor-pointer"
          onClick={() => setOpenFilter(false)}
        />
      </header>
      <section className="flex flex-col items-start justify-start gap-5">
        <section className="flex flex-col items-start justify-start gap-2">
          <h1 className="text-sm font-semibold text-black-100 uppercase">
            Categories
          </h1>
          {uniqueFilterTags.map((fil) => (
            <section key={fil.id} className="flex items-center gap-5">
              <input
                type="checkbox"
                name={fil.tag}
                id={fil.tag}
                checked={fil.tag === selectedFilters.tag}
                onChange={() => handleTagFilterChange(fil.tag)}
              />
              <label
                htmlFor={`${fil.tag}`}
                className="text-black-100 text-xs sm:text-base capitalize"
              >
                {fil.tag}
              </label>
            </section>
          ))}
        </section>
        <section className="flex flex-col items-start justify-start gap-2">
          <h1 className="text-sm font-semibold text-black-100 uppercase">
            Price
          </h1>
          <section className="flex flex-col items-start gap-2">
            {uniqueFilterRange.map((fil) => (
              <section key={fil.id} className="flex items-center gap-5">
                <input 
                type="checkbox" 
                name={fil.range}
                id={fil.range}
                checked={fil.range === selectedFilters.range}
                onChange={() => handleRangeFilterChange(fil.range)}
                />
                <label
                  htmlFor={fil.range}
                  className="text-black-100 text-xs sm:text-base capitalize"
                >
                  {fil.range}
                </label>
              </section>
            ))}
          </section>
        </section>
        <section className="flex flex-col items-start justify-start gap-2">
          <h1 className="text-sm font-semibold text-black-100 uppercase">
            Color
          </h1>
          <section className="flex flex-col items-start gap-2">
            {uniqueFilterColor.map((fil) => (
              <section key={fil.id} className="flex items-center gap-5">
                <input 
                type="checkbox" 
                name="catCheckbox" 
                id="catCheckbox" 
                checked={fil.color === selectedFilters.color}
                onChange={() => handleColorFilterChange(fil.color)}
                />
                <label
                  htmlFor="catCheckbox"
                  className="text-black-100 text-xs sm:text-base capitalize"
                >
                  {fil.color}
                </label>
              </section>
            ))}
          </section>
        </section>
      </section>
    </section>
  );
};

export default FilterCard;
