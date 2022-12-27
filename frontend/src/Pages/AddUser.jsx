import React from "react";
import { Input } from "@material-tailwind/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddUser = () => {
  const successToast = () => {
    toast.success("User added successfully!", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="px-24 py-10">
      <div className="bg-light w-[650px] p-8 m-auto rounded-xl shadow-2xl ">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
          theme="light"
        />
        <div className=" grid grid-cols-2 justify-center items-center gap-5 ">
          <Input
            required
            variant="outlined"
            label="First Name"
            name="firstname"
          />
          <Input
            required
            variant="outlined"
            label="Last Name"
            name="lastname"
          />
          <Input
            required
            variant="outlined"
            label="Departement"
            name="departement"
          />
          <Input required variant="outlined" label="Email" name="email" />
          <Input required variant="outlined" label="Phone" name="phone" />
          <Input required variant="outlined" label="Adress" name="adress" />
          <Input required variant="outlined" label="State" name="state" />
          <Input required variant="outlined" label="ZIP" name="zip" />
        </div>
        <button
          onClick={successToast}
          className="btn bg-primary hover:bg-blue-500 border-none w-full mt-5"
        >
          Add User
        </button>
      </div>
    </div>
  );
};
export default AddUser;
