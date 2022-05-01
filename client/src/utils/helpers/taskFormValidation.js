import * as yup from "yup";

// Validation Schema Using Yup
const validationSchema = yup.object().shape({
  search: yup
    .string()
    .required(
      "Search term is required, please specify search criteria and enter a search term"
    ),
});

export default validationSchema;

// USED FOR SCHEMA VALIDATION PURPOSE ONLY
// validationSchema
//   .validate({
//     search: "john",
//   })
//   .catch((err) => console.log(err));
