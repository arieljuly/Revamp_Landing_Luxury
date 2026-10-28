"use client";

import { FormEvent, useState } from "react";

const locations = [
  "Any",
  "Alamo",
  "Alton",
  "Amargosa Valley",
  "Beatty",
  "Beryl",
  "Blue Diamond",
  "Boulder City",
  "Brian Head",
  "Cal Nev Ari",
  "Caliente",
  "Cedar City",
  "Cold Creek",
  "Crystal",
  "Duck Creek Village",
  "Dyer",
  "Elko",
  "Ely",
  "Goldfield",
  "Goodsprings",
  "Hatch",
  "Henderson",
  "Indian Springs",
  "Jean",
  "Las Vegas",
  "Laughlin",
  "Logandale",
  "Mc Gill",
  "Mesquite",
  "Moapa",
  "Mount Charleston",
  "Mountain Springs",
  "Nelson",
  "North Las Vegas",
  "Other",
  "Overton",
  "Pahrump",
  "Palm Gardens",
  "Panaca",
  "Parowan",
  "Pioche",
  "Ruth",
  "Sandy Valley",
  "Searchlight",
  "Tonopah",
];

export function SearchListing() {
  const [message, setMessage] = useState("");

  function submit(e: FormEvent) {
    e.preventDefault();
    setMessage(
      "Search saved — Marci can help you narrow down the best matches.",
    );
  }

  return (
    <section className="py-24 md:py-32 bg-[#f5f2eb]" id="listings">
      <div className="w-full max-w-[1160px] mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center md:text-left mb-12">
          <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1] tracking-[-0.04em] text-[#bd6748] uppercase">
            Search Listings
          </h2>
        </div>

        {/* Form Container */}
        <form
          onSubmit={submit}
          className="bg-white p-6 md:p-10 shadow-[0_18px_50px_rgba(32,49,47,0.05)] border border-[#20312f]/10"
        >
          {/* Top Row: Location, Type, Sort By */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Location */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="location"
                className="text-[#20312f] font-medium text-sm"
              >
                Location
              </label>
              <div className="relative">
                <select
                  id="location"
                  defaultValue="Any"
                  className="w-full min-h-[56px] px-4 border border-[#dcded8] bg-white text-[#20312f] appearance-none outline-none focus:border-[#bd6748] focus:ring-1 focus:ring-[#bd6748] transition-all"
                >
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <svg
                    className="w-4 h-4 text-[#20312f]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Type */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="type"
                className="text-[#20312f] font-medium text-sm"
              >
                Type
              </label>
              <div className="relative">
                <select
                  id="type"
                  defaultValue="Any property"
                  className="w-full min-h-[56px] px-4 border border-[#20312f] bg-white text-[#20312f] appearance-none outline-none focus:border-[#bd6748] focus:ring-1 focus:ring-[#bd6748] transition-all"
                >
                  <option>Any property</option>
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Land</option>
                  <option>Residential Lease</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <svg
                    className="w-4 h-4 text-[#20312f]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Sort By */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="sort"
                className="text-[#20312f] font-medium text-sm"
              >
                Sort By
              </label>
              <div className="relative">
                <select
                  id="sort"
                  defaultValue=""
                  className="w-full min-h-[56px] px-4 border border-[#dcded8] bg-white text-[#20312f] appearance-none outline-none focus:border-[#bd6748] focus:ring-1 focus:ring-[#bd6748] transition-all"
                >
                  <option disabled value=""></option>
                  <option value="newest">Newest</option>
                  <option value="oldest">Oldest</option>
                  <option value="pra">Least Expensive to Most</option>
                  <option value="prd">Most Expensive to Least</option>
                  <option value="bda">Bedrooms (Low to High)</option>
                  <option value="bdd">Bedrooms (High to Low)</option>
                  <option value="tba">Bathrooms (Low to High)</option>
                  <option value="tbd">Bathrooms (High to Low)</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <svg
                    className="w-4 h-4 text-[#20312f]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: Bedrooms, Baths, Min Price, Max Price, Submit Button */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_auto] gap-6 items-end">
            {/* Bedrooms */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="beds"
                className="text-[#20312f] font-medium text-sm"
              >
                Bedrooms
              </label>
              <div className="relative">
                <select
                  id="beds"
                  defaultValue="Any Number"
                  className="w-full min-h-[56px] px-4 border border-[#dcded8] bg-white text-[#20312f] appearance-none outline-none focus:border-[#bd6748] focus:ring-1 focus:ring-[#bd6748] transition-all"
                >
                  <option>Any Number</option>
                  <option value="0">Studio</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                  <option value="6">6+</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <svg
                    className="w-4 h-4 text-[#20312f]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Baths */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="baths"
                className="text-[#20312f] font-medium text-sm"
              >
                Baths
              </label>
              <div className="relative">
                <select
                  id="baths"
                  defaultValue="Any Number"
                  className="w-full min-h-[56px] px-4 border border-[#dcded8] bg-white text-[#20312f] appearance-none outline-none focus:border-[#bd6748] focus:ring-1 focus:ring-[#bd6748] transition-all"
                >
                  <option>Any Number</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                  <option value="6">6+</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <svg
                    className="w-4 h-4 text-[#20312f]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Min Price */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="min-price"
                className="text-[#20312f] font-medium text-sm"
              >
                Min Price
              </label>
              <input
                id="min-price"
                type="number"
                placeholder="$"
                className="w-full min-h-[56px] px-4 border border-[#dcded8] bg-white text-[#20312f] outline-none focus:border-[#bd6748] focus:ring-1 focus:ring-[#bd6748] transition-all placeholder-[#20312f]/40"
              />
            </div>

            {/* Max Price */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="max-price"
                className="text-[#20312f] font-medium text-sm"
              >
                Max Price
              </label>
              <input
                id="max-price"
                type="number"
                placeholder="$"
                className="w-full min-h-[56px] px-4 border border-[#dcded8] bg-white text-[#20312f] outline-none focus:border-[#bd6748] focus:ring-1 focus:ring-[#bd6748] transition-all placeholder-[#20312f]/40"
              />
            </div>

            {/* Submit Button */}
            <div className="w-full">
              <button
                type="submit"
                className="w-full lg:w-auto min-h-[56px] px-10 rounded-full bg-[#dcded8] hover:bg-[#bd6748] hover:text-white text-[#20312f] text-[0.8rem] font-bold tracking-[0.1em] uppercase transition-all duration-300"
              >
                Search Now
              </button>
            </div>
          </div>
        </form>

        {/* Success Message */}
        {message && (
          <div className="mt-6 p-4 bg-[#bd6748]/10 border border-[#bd6748]/20 text-[#bd6748] rounded-md flex items-center gap-3 text-sm font-medium">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            {message}
          </div>
        )}
      </div>
    </section>
  );
}
