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
  title: "Welcome to StuffedCompanions",
  description: "This is a website for stuffed animals",
  keywords: "stuffed animals, plushies, toys, stuffed toys",
};
export default Meta;
