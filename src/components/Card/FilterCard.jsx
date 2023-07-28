/* eslint-disable react/prop-types */
import { MdClose } from "react-icons/md";
import { Categories } from "../../data/data";


const FilterCard = ({ setOpenFilter, category }) => {
  const filterCategory = Categories?.filter((cat) => cat.category === category);

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
          {filterCategory.map((cat) => (
            <section key={cat.id} className="flex items-center gap-5">
              <input
                type="checkbox"
                name={`${cat.title}`}
                id={`${cat.title}`}
              />
              <label
                htmlFor={`${cat.title}`}
                className="text-black-100 text-xs sm:text-base"
              >
                {cat.title}
              </label>
            </section>
          ))}
        </section>
        {/* <section className="flex flex-col items-start justify-start gap-2">
        <h1 className="text-sm font-semibold text-black-100 uppercase">
            Price
          </h1>
          <section className="flex flex-col items-center gap-2">
          {filteredProducts.map((fil) => (
            <section key={fil.id} className="flex items-center gap-5">
              <input type="checkbox" name="catCheckbox" id="catCheckbox" />
              <label
                htmlFor="catCheckbox"
                className="text-black-100 text-xs sm:text-base"
              >
                {fil.range}
              </label>
            </section>
          ))}
          </section>
        </section> */}
      </section>
    </section>
  );
};

export default FilterCard;
