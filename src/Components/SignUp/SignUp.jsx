import { Card, Input, Checkbox, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import img from "../../assets/others/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext, useEffect } from "react";
import { AuthContext } from "../SheardItem/AuthProvider/AuthProvider";

const SignUp = () => {
  const {createUser , user} = useContext(AuthContext)
  console.log(user);

  useEffect(()=>{
        loadCaptchaEnginge(6);
    },[])
    
    const signUpHandler = (e) => {
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      const user = { name, email, password };
      console.log(user);

      createUser(email,password)
        .then(result=>{
          console.log(result);
        })
        .catch(err=>{
          console.log(err);
        })
    };
  return (
    <div className="flex justify-between items-center">
      <Card color="transparent" shadow={false} className="my-10">
        <Typography
          variant="h4"
          color="blue-gray"
          className="text-7xl font-medium mb-2"
        >
          Sign Up
        </Typography>

        <form
          onSubmit={signUpHandler}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Name
            </Typography>
            <Input
              size="lg"
              name="name"
              placeholder="name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 shadow-inner"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              size="lg"
              name="email"
              type="email"
              required
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 shadow-inner"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              name="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 shadow-inner"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
            <LoadCanvasTemplate />
            </Typography>
            <Input
              type="text"
              name="Type "
              size="lg"
              placeholder="Type The Upper Code"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 shadow-inner"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <input
            type="submit"
            value="SignUp"
            className="btn btn-outline w-full mt-4"
          />

          <p color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-sky-600">
              LogIn
            </Link>
          </p>
        </form>
      </Card>
      <img src={img} alt="" className="w-2/4" />
    </div>
  );
};

export default SignUp;
