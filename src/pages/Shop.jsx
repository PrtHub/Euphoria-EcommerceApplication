import {
  BigSavingZone,
  Hero,
  MenCategories,
  NewArrivals,
  SEO,
  LimeLight,
  Brand,
  WomenCategories,
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
        <NewArrivals />
        <BigSavingZone />
        <MenCategories />
        <WomenCategories />
        <Brand/>
        <LimeLight />
      </main>
    </>
  );
};

export default Shop;
