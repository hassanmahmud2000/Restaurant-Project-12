import SectionTitle from "../../../SheardItem/SectionTitle/SectionTitle";
import { Input } from "@material-tailwind/react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import AxiosPublic from "../../../Hook/AxiosPublic";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hook/AxiosSecure";
import Swal from "sweetalert2";

const AddItems = () => {
  const { register, handleSubmit ,reset} = useForm();
  const axiosPublic = AxiosPublic();
  const axiosSecure = useAxiosSecure();
  const IMG_API_Hosting_Key = import.meta.env.VITE_API_KEY;
  const Hosting_Api = `https://api.imgbb.com/1/upload?key=${IMG_API_Hosting_Key}`;

  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.photo[0] };
    const res = await axiosPublic.post(Hosting_Api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuItem ={
        name:data.recipeName,
        category: data.category,
        recipe: data.recipeDetails,
        image: res.data.data.display_url,
        price: parseFloat(data.price)
      }
      const menuRes = await axiosSecure.post('/menu', menuItem )
        console.log(menuRes.data);
        if(menuRes.data.insertedId){
          reset();
          Swal.fire({
            title: `${data.name} Added in Menu `,
            text: "Good Job!",
            icon: "success"
          });
        
        }
    }
  };
  return (
    <div>
      <div>
        <SectionTitle
          heder="ADD AN ITEM"
          subHeader="---What's new?---"
        ></SectionTitle>
      </div>
      <div className="bg-gray-50 h-[830px] w-[990px]">
        <form onSubmit={handleSubmit(onSubmit)} className="p-[60px]">
          <Input
            size="lg"
            {...register("recipeName")}
            name="recipeName"
            placeholder="Recipe name"
            variant="outlined"
            label="Recipe name"
            className="w-full p-2"
          />
          {/* Drop Down Select */}
          <div className="flex gap-4 mt-6">
            <select
              {...register("category")}
              className="select select-bordered w-full max-w-xs"
            >
              {/* <option >
                Select The Category?
              </option> */}
              <option>salad</option>
              <option>pizza</option>
              <option>soup</option>
              <option>dessert</option>
              <option>drinks</option>
            </select>
            <Input
              size="lg"
              type="number"
              {...register("price")}
              name="price"
              placeholder="Price"
              variant="outlined"
              label="Price"
              className="w-full p-2"
            />
          </div>
          {/* Text Areas */}
          <p className="mt-6">
            <label>Recipe Details</label>
          </p>
          <textarea
            placeholder="Recipe Details"
            className="p-4 rounded-lg mt-6"
            {...register("recipeDetails")}
            name="recipeDetails"
            id=""
            cols="100"
            rows="10"
          ></textarea>
          {/* File input */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Pick a file</span>
            </label>
            <input
              type="file"
              {...register("photo")}
              name="photo"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </div>
          <div className="flex">
            <input
              type="submit"
              value="Add Item"
              className="btn mt-6 bg-gradient-to-r from-[#835D23] to-[#B58130] text-white"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddItems;
