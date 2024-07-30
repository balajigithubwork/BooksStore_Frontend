import * as yup from "yup";

export const AddBookValidation = yup.object({
  bookName: yup.string().required("Book Name is Required"),
  totalPage: yup.number().required("Total Page is Required"),
  autherName: yup.string().required("Auther Name is Required"),
  price: yup.number().required("Price is Required"),
  offerPrice: yup.number().required("Offer Price is Required"),
  discreption: yup.string().required("Discreption is Required"),
});
