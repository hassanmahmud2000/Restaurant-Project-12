import { Card, Input, Checkbox, Typography } from "@material-tailwind/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import img from "../../assets/others/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext, useEffect } from "react";
import { AuthContext } from "../SheardItem/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser, user, GoogleSignUp, profileInfo } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  console.log(user);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const signUpHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const user = { name, photo, email, password };
    console.log(user);

    createUser(email, password)
      .then((result) => {
        profileInfo(name,photo)
         .then(()=>{
          Swal.fire({
            title: "Successfully SignUp!",
            text: "You clicked the button!",
            icon: "success"
          });
         })
         .catch((err)=>{console.log(err)})
        console.log(result);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
    
      
  };

  const GoogleHandler = () => {
    GoogleSignUp()
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
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
              Photo URL
            </Typography>
            <Input
              size="lg"
              name="photo"
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
        </form>
        <button onClick={GoogleHandler} className="btn btn-outline w-full my-2">
          Google <FcGoogle className="text-xl"></FcGoogle>
        </button>

        <p color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <Link to="/login" className="font-medium text-sky-600">
            LogIn
          </Link>
        </p>
      </Card>
      <img src={img} alt="" className="w-2/4" />
    </div>
  );
};

export default SignUp;
