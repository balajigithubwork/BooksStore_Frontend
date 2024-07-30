import React from "react";
import { Link } from "react-router-dom";

const BooksCard = ({ data }) => {
  const { bookName, autherName, discreption, offerPrice, price, _id } = data;

  function onDelete() {
    fetch("http://localhost:9000/deletebookById", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: _id }),
    });
    alert("Book Deleted Successfully");
  }
  return (
    <div class="w-64 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <a href="">
        <img
          src="https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg?t=st=1721899044~exp=1721902644~hmac=30233f39de44c4234c271b92febb3ba3147133393d2203abba73ae71950b8b51&w=900"
          alt="Product"
          class="h-40 w-64 object-cover rounded-t-xl"
        />
        <div class="px-4 py-3 w-64">
          <span class="text-gray-400 mr-3 uppercase text-xs">{autherName}</span>
          <p class="text-lg font-bold text-black truncate block capitalize">
            {bookName}
          </p>
          <p class="text-sm text-gray-400 truncate block capitalize">
            {discreption}
          </p>
          <div class="flex items-center w-full justify-between">
            <div class="flex items-center w-full">
              <p class="text-lg font-semibold text-black cursor-auto my-3">
                ${offerPrice}
              </p>
              <del>
                <p class="text-sm text-gray-600 cursor-auto ml-2">${price}</p>
              </del>
              <div class="ml-auto gap-5 flex items-center">
                <Link to={`/editbook/${_id}`}>
                  <svg
                    class="feather feather-edit"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                  </svg>
                </Link>
                <button onClick={() => onDelete()}>
                  <svg
                    height="24"
                    viewBox="0 0 48 48"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 38c0 2.21 1.79 4 4 4h16c2.21 0 4-1.79 4-4V14H12v24zM38 8h-7l-2-2H19l-2 2h-7v4h28V8z" />
                    <path d="M0 0h48v48H0z" fill="none" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default BooksCard;
