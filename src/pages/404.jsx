import React from "react";
import Button from "../components/Elements/Button/Button";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section className="flex items-center justify-center bg-white dark:bg-gray-900 min-h-screen">
  <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
    <div className="mx-auto max-w-screen-sm text-center">
      <h1 className="text-primary-600 dark:text-primary-500 mb-4 text-7xl font-extrabold tracking-tight text-[#7126B5] lg:text-9xl">
        404
      </h1>
      <p className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">
        Something's missing.
      </p>
      <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
        Sorry, we can't find that page. You'll find lots to explore on the home
        page.
      </p>
      <div className="flex items-center justify-center">
        <Link to="/">
        <Button type="" children="Back to Home Page" />
        </Link >
      </div>
    </div>
  </div>
</section>

  );
};

export default NotFoundPage;
