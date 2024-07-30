import React from "react";

const SearchBar = ({setFilterData}) => {
  return (
    <form method="GET" action="">
      <div class="bg-white border-2  shadow p-2 relative rounded-xl flex">
        <span class="w-auto flex justify-end  items-center text-gray-500 p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </span>
        <input
        onChange={(e) => setFilterData(e.target.value)}
          name="episodequery"
          id="title"
          class="border-white outline-none border-0 w-full rounded-xl p-2"
          type="text"
          placeholder="Try 'How to find product market fit?'"
        />
      </div>
    </form>
  );
};

export default SearchBar;
