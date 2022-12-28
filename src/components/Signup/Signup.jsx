import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Input } from "@mantine/core";
import { registerapi } from "../../apiRequests/authapis";



function Signup() {
  const Navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    mobile: Yup.number()
      .min(10, "Must be  minimum 10 characters ")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(6, "Must be  minimum 6 characters ")
      .required("Required"),
    confirmPassword: Yup.string()
      .min(6, "Must be  minimum 6 characters ")
      .required("Required")
      .oneOf([Yup.ref("password")], "Passwords must be same"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: async () => {
      const body = formik.values;

      body.mobile = parseInt(body.mobile, 10);
      const response = await registerapi(body);
      if (response.data.exist) {
        return Navigate("/login");
      }
      if (response.data.name) {
        
        return Navigate("/");
      }
      return undefined;
    },
  });

  // }
  return (
    <div className="bg-gradient-to-r from-navy via-blue to-login h-screen flex flex-col justify-center w-full ">
      <div className="max-w-[450px] w-full mx-auto bg-white p-8 px-8 rounded-lg">
        <h2 className="text-blue text-center text-3xl font-bold ">Register</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col text-gray-400  mt-3">
            <Input size="md"
              className="rounded-lg underline-offset-8   focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="text"
              placeholder="FullName"
              id="name"
              value={formik.values.name}
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label className="text-red-600" htmlFor="name">
              {formik.errors.name && formik.touched.name && formik.errors.name}
            </label>
          </div>
          <div className="flex flex-col text-gray-400  mt-3">
            <Input size="md"
           
              type="email"
              placeholder="youremail@gmail.com"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="rounded-lg    focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            />
            <label className="text-red-600" htmlFor="email">
              {formik.errors.email &&
                formik.touched.email &&
                formik.errors.email}
            </label>
          </div>
          <div className="flex flex-col text-gray-400  mt-3">
            <Input size="md"
              type="tel"
              placeholder="Mobile"
              id="mobile"
              name="mobile"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.mobile}
              className="rounded-lg bg-gray-700  focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            />
            <label className="text-red-600" htmlFor="mobile">
              {formik.errors.mobile &&
                formik.touched.mobile &&
                formik.errors.mobile}
            </label>
          </div>
          <div className="flex flex-col text-gray-400  mt-3">
            <Input size="md"
              type="Password"
              placeholder="Enter your Password"
              id="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className="rounded-lg bg-gray-700  focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            />
            <label className="text-red-600" htmlFor="Password">
              {formik.errors.password &&
                formik.touched.password &&
                formik.errors.password}
            </label>
          </div>

          <div className="flex flex-col text-gray-400  mt-3">
            <Input size="md"
              type="Password"
              placeholder="Repeat your Password "
              id="confirmpassword"
              name="confirmPassword"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
              className="rounded-lg bg-gray-700  focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            />
            <label className="text-red-600" htmlFor="confirmpassword">
              {formik.errors.confirmPassword &&
                formik.touched.confirmPassword &&
                formik.errors.confirmPassword}
            </label>
          </div>
          <button
            className="w-full my-5 py-3 bg-blue rounded-lg"
            type="submit"
            disabled={formik.isSubmitting}
          >
            Register
          </button>
        </form>

        <button
          className="w-full text-center text-gray-400 py-2"
          onClick={() => {
            Navigate("/login");
          }}
          type="button"
        >
          {" "}
          Already have an account ? Login
        </button>
      </div>
    </div>
  );
}
export default Signup;
