/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet-async";

export const SEO = ({ title, desc }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={desc} />
    </Helmet>
  );
};
