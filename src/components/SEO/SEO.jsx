/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet-async";

export const SEO = ({ title }) => {
  return (
    <Helmet>
      <title className="capitalize">{title}</title>
      <meta name="description" content="Discover the latest trends in fashion for men, women, and kids with our diverse collection of stylish and comfortable clothing." />
    </Helmet>
  );
};
