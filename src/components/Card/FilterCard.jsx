/* eslint-disable react/prop-types */

import { MdClose } from "react-icons/md";
import { logToBugfender } from "../../utils/Bugfender";

const FilterCard = ({
  setOpenFilter,
  filteredProducts,
  onFilterChange,
  selectedFilters,
}) => {
  const uniqueTag = new Set();
  const uniquepriceRange = new Set();
  const uniqueColor = new Set();
  const uniqueBrand = new Set();
  const uniquekids = new Set();

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

  const uniqueFilterBrand = filteredProducts.filter((fil) => {
    if (uniqueBrand.has(fil.brand)) {
      return false;
    }
    uniqueBrand.add(fil.brand);
    return true;
  });

  const uniqueFilterKids = filteredProducts.filter((fil) => {
    if (uniquekids.has(fil.gender)) {
      return false;
    }
    uniquekids.add(fil.gender);
    return true;
  });

  const handleTagFilterChange = (tag) => {
    onFilterChange({ tag: tag === selectedFilters.tag ? null : tag });

    logToBugfender('FilterCard Component', 'Tag filter changed:', {
      newTagFilter: tag,
      selectedTagFilter: selectedFilters.tag,
    });
  };

  const handleRangeFilterChange = (range) => {
    onFilterChange({ range: range === selectedFilters.range ? null : range });

    logToBugfender('FilterCard Component', 'Price Range filter changed:', {
      newTagFilter: range,
      selectedTagFilter: selectedFilters.range,
    });
  };

  const handleColorFilterChange = (color) => {
    onFilterChange({ color: color === selectedFilters.color ? null : color });

    logToBugfender('FilterCard Component', 'Color filter changed:', {
      newTagFilter: color,
      selectedTagFilter: selectedFilters.color,
    });
  };
  const handleBrandFilterChange = (brand) => {
    onFilterChange({ brand: brand === selectedFilters.brand ? null : brand });

    logToBugfender('FilterCard Component', 'Brand filter changed:', {
      newTagFilter: brand,
      selectedTagFilter: selectedFilters.brand,
    });
  };
  const handleKidsFilterChange = (gender) => {
    onFilterChange({
      gender: gender === selectedFilters.gender ? null : gender,
    });

    logToBugfender('FilterCard Component', 'Gender filter changed:', {
      newTagFilter: gender,
      selectedTagFilter: selectedFilters.gender,
    });
  };

  return (
    <section className="w-full h-full p-5 sm:p-10 flex flex-col items-start justify-start gap-10 py-10">
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
        <section className="flex flex-col items-start gap-2">
          {uniqueFilterKids.map(
            (fil) =>
              fil.gender && (
                <section key={fil.id} className="flex items-center gap-5">
                  <input
                    type="checkbox"
                    name={fil.gender}
                    id={fil.gender}
                    checked={fil.gender === selectedFilters.gender}
                    onChange={() => handleKidsFilterChange(fil.gender)}
                  />
                  <label
                    htmlFor={fil.gender}
                    className="text-black-100 text-xs sm:text-base capitalize"
                  >
                    {fil.gender}
                  </label>
                </section>
              )
          )}
        </section>
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
                htmlFor={fil.tag}
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
        <section className="flex flex-col items-start justify-start gap-2">
          <h1 className="text-sm font-semibold text-black-100 uppercase">
            Brand
          </h1>
          <section className="flex flex-col items-start gap-2">
            {uniqueFilterBrand.map((fil) => (
              <section key={fil.id} className="flex items-center gap-5">
                <input
                  type="checkbox"
                  name="catCheckbox"
                  id="catCheckbox"
                  checked={fil.brand === selectedFilters.brand}
                  onChange={() => handleBrandFilterChange(fil.brand)}
                />
                <label
                  htmlFor="catCheckbox"
                  className="text-black-100 text-xs sm:text-base capitalize"
                >
                  {fil.brand}
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
