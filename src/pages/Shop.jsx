import {
  BigSavingZone,
  Deals,
  FemaleCategories,
  Hero,
  MenCategories,
  NewArrivals,
  SEO,
  Shopping,
} from "../components";

const Shop = () => {
  return (
    <>
      <SEO
        title="Online Shopping for Men, Women & Kids Fashion - Euphoria"
        desc="Online Shopping for Men, Women & Kids Fashion with exclusive deals"
      />
      <main className="w-full h-full">
        <Hero />
        {/* <Deals /> */}
        <NewArrivals />
        <BigSavingZone />
        <Shopping />
        <MenCategories />
        <FemaleCategories />
      </main>
    </>
  );
};

export default Shop;
