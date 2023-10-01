import React from "react";
import { Helmet } from "react-helmet-async";
const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome to WJ's Shop!",
  description: "This is a ecommerce website built using MERN stack",
  keywords: "gadgets, electronics, game consoles",
};
export default Meta;
