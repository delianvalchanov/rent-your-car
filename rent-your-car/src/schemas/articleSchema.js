import * as yup from "yup";

const pricePattern = /^\d{1,3}(?:\.\d{1,5})?$/;
const yearPattern = /^(19[0-9][0-9]|20[01][0-9]|2023)$/;
const urlPattern = /^data:image\/([a-zA-Z]*);base64,([^"]*)$/;

export const ArticleSchema = yup.object().shape({
  model: yup.string().required("Field is required!"),
  price: yup
    .string()
    .matches(pricePattern, { message: "Price must be between 1$ and 1000$!" })
    .required("Field is required!"),
  bodyType: yup.string().required("Field is required!"),
  carImage: yup
    .string()
    .required("Field is required!")
    .matches(urlPattern, { message: "Enter valid image URL!" }),
  year: yup
    .string()
    .matches(yearPattern, { message: "Year must be between 1900-2023!" })
    .required("Field is required!"),
  fuel: yup.string().required("Field is required!"),
  description: yup.string().required("Field is required!"),
});
