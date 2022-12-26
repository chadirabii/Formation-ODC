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
    <div className="bg-light w-[650px] p-8 m-auto rounded-xl shadow-2xl">
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
        <Input variant="outlined" label="First Name" />
        <Input required variant="outlined" label="Last Name" />
        <Input required variant="outlined" label="Departement" />
        <Input required variant="outlined" label="Email" />
        <Input required variant="outlined" label="Phone" />
        <Input required variant="outlined" label="Adresse" />
        <Input required variant="outlined" label="State" />
        <Input required variant="outlined" label="ZIP" />
      </div>
      <button
        onClick={successToast}
        className="btn bg-primary hover:bg-blue-500 border-none w-full mt-5"
      >
        Add User
      </button>
    </div>
  );
};
export default AddUser;
