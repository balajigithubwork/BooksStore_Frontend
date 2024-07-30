import React, { useEffect, useState } from "react";
import SearchBar from "../../components/searchBar";
import BooksCard from "../../components/booksCard";

const Dashboard = () => {
  const [filterData, setFilterData] = useState(null);
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("http://localhost:9000/getAllBooks")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <>
      <div className="w-5/12 m-auto pt-2">
        <SearchBar setFilterData={setFilterData} />
      </div>
      <div className="flex gap-10 w-11/12 flex-wrap m-auto my-5">
        {data?.data
          ?.filter((e) =>
            e?.bookName?.toLowerCase()?.includes(filterData?.toLowerCase())
          )
          ?.map((data, index) => (
            <BooksCard key={index} data={data} />
          ))}
      </div>
    </>
  );
};

export default Dashboard;
