import React, { useState } from "react";
import Layout from "@/components/Layout";
import HeroComp from "@/components/HeroComp";

const pageURLs = [
  "/about-us",
  "/contact",
  "/forms",
  "/",
  "/investment-process",
  "/our-team",
  "/prices",
  "/services",
  "/vunani",
];

const Search = () => {
  const breadcrumbs = [
    { href: "/", label: "Home" },
    { href: "/search", label: "Search" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false); // Track if a search has been performed

  const searchPages = async (query) => {
    setLoading(true);
    const results = [];
    for (const url of pageURLs) {
      const response = await fetch(url);
      const content = await response.text();
      const matches = content.match(new RegExp(query, "gi"));

      if (matches) {
        results.push({ url, matches });
      }
    }
    setResults(results);
    setLoading(false);
    setSearched(true); // Set searched to true after search is performed
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    await searchPages(searchTerm);
  };

  return (
    <div>
      <Layout>
        <HeroComp
          image="slider-4-2.jpg"
          title="What are you looking for?"
          tagline="Browse through our site to learn more about our products and services"
          breadcrumbs={breadcrumbs}
        />
        <div className="py-10 px-3 max-w-6xl mx-auto">
          <form onSubmit={handleSearch} className="max-w-md mx-auto">
            <label
              for="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only "
            >
              Search
            </label>

            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="default-search"
                placeholder="Search..."
                value={searchTerm}
                required
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-none bg-gray-50 focus:ring-teal-500 focus:border-teal-500 "
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-teal-950 rounded-none hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-2 "
              >
                Search
              </button>
            </div>
          </form>

          {loading && <p className="font-bold">Loading results...</p>}

          {searched && results.length > 0 && (
            <ul className="list-disc list-inside">
              {results.map((result) => (
                <li key={result.url} className="bg-teal-50 border my-2 p-4">
                  <a
                    href={result.url}
                    className="text-blue-500 hover:underline"
                  >
                    {result.url}
                  </a>
                  <p className="text-gray-600">
                    Found: {result.matches.length} matches
                  </p>
                </li>
              ))}
            </ul>
          )}

          {searched && results.length === 0 && (
            <p className="text-gray-500">No results found for "{searchTerm}"</p>
          )}
        </div>
      </Layout>
    </div>
  );
};

export default Search;
