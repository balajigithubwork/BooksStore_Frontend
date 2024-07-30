import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { AddBookValidation } from "../../validations/addBooks";
import { useParams } from "react-router-dom";

const AddBooks = () => {
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AddBookValidation),
    defaultValues: {
      bookName: "",
      totalPage: "",
      autherName: "",
      price: "",
      offerPrice: "",
      discreption: "",
    },
  });
  const { id } = useParams();

  const onsubmit = (data) => {
    if (id !== undefined) {
      data.id = id;
      fetch("http://localhost:9000/bookEditById", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      alert("Book Edited Successfully");
      reset();
    } else {
      fetch("http://localhost:9000/addBook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      alert("Book Added Successfully");
    }
    reset();
  };

  const getFormData = async () => {
    const response = await fetch("http://localhost:9000/bookById", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    const data = await response.json();
    reset(data.data);
  };

  useEffect(() => {
    if (id !== undefined) {
      getFormData();
    }
  }, []);

  return (
    <div className="w-4/12 mt-2 m-auto">
      <h1 className="text-4xl font-bold">
        {" "}
        {id !== undefined ? `Edit Books` : `Add Books`}
      </h1>
      <form onSubmit={handleSubmit(onsubmit)}>
        <div className="flex flex-col">
          <label className="font-bold text-gray-700">Book Name</label>
          <Controller
            name="bookName"
            control={control}
            render={({ field }) => (
              <input
                className="w-full border rounded p-1 outline-none focus:shadow-outline"
                {...field}
                type="text"
              />
            )}
          />
          {errors.bookName && (
            <span className="text-red-600">{errors.bookName.message}</span>
          )}
        </div>
        <div className="flex flex-col">
          <label className="font-bold text-gray-700">Total Page</label>
          <Controller
            name="totalPage"
            control={control}
            render={({ field }) => (
              <input
                className="w-full border rounded p-1 outline-none focus:shadow-outline"
                {...field}
                type="text"
              />
            )}
          />
          {errors.totalPage && (
            <span className="text-red-600">{errors.totalPage.message}</span>
          )}
        </div>
        <div className="flex flex-col">
          <label className="font-bold text-gray-700">Auther Name</label>
          <Controller
            name="autherName"
            control={control}
            render={({ field }) => (
              <input
                className="w-full border rounded p-1 outline-none focus:shadow-outline"
                {...field}
                type="text"
              />
            )}
          />
          {errors.autherName && (
            <span className="text-red-600">{errors.autherName.message}</span>
          )}
        </div>
        <div className="flex flex-col">
          <label className="font-bold text-gray-700">price</label>
          <Controller
            name="price"
            control={control}
            render={({ field }) => (
              <input
                className="w-full border rounded p-1 outline-none focus:shadow-outline"
                {...field}
                type="text"
              />
            )}
          />
          {errors.price && (
            <span className="text-red-600">{errors.price.message}</span>
          )}
        </div>
        <div className="flex flex-col">
          <label className="font-bold text-gray-700">Offer Price</label>
          <Controller
            name="offerPrice"
            control={control}
            render={({ field }) => (
              <input
                className="w-full border rounded p-1 outline-none focus:shadow-outline"
                {...field}
                type="text"
              />
            )}
          />
          {errors.offerPrice && (
            <span className="text-red-600">{errors.offerPrice.message}</span>
          )}
        </div>
        <div className="flex flex-col">
          <label className="font-bold text-gray-700">Discreption</label>
          <Controller
            name="discreption"
            control={control}
            render={({ field }) => (
              <input
                className="w-full border rounded p-1 outline-none focus:shadow-outline"
                {...field}
                type="text"
              />
            )}
          />
          {errors.discreption && (
            <span className="text-red-600">{errors.discreption.message}</span>
          )}
        </div>
        <button
          type="submit"
          className="w-full mt-5 bg-red-600 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded"
        >
          submit
        </button>
      </form>
    </div>
  );
};
export default AddBooks;
