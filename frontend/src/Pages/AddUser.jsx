import React, { useState } from "react";
import { Input } from "@material-tailwind/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddUser() {
  const navigate = useNavigate();
  const [setError] = useState("");

  const [form, setForm] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prevData) => ({ ...prevData, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    // submit the form data here, for example with Axios
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const user = {
  //     firstname: form.firstname,
  //     lastname: form.lastname,
  //     departement: form.departement,
  //     email: form.email,
  //     phone: form.phone,
  //     adress: form.adress,
  //     state: form.state,
  //     zip: form.zip,
  //     file: form.file,
  //   };
  //   console.log(user);
  //   navigate("/");
  // try {
  //   const response = await axios.post("/api/users", users);
  //   if (response.status === 201) {
  //     successToast();
  //     console.log("User added");
  //     navigate("/");
  //   } else {
  //    errorToast();
  //     setError("Error!");
  //   }
  // } catch (err) {
  //   setError(err.message);
  // }
  // };

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
  const errorToast = () => {
    toast.error("Error! User not added.", {
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
    <div className="px-24 py-16">
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
            value={form.firstname}
            onChange={handleChange}
            required
            variant="outlined"
            label="First Name"
            name="firstname"
          />
          <Input
            value={form.lastname}
            onChange={handleChange}
            required
            variant="outlined"
            label="Last Name"
            name="lastname"
          />
          <Input
            value={form.departement}
            onChange={handleChange}
            required
            variant="outlined"
            label="Departement"
            name="departement"
          />
          <Input
            value={form.email}
            onChange={handleChange}
            required
            variant="outlined"
            label="Email"
            name="email"
          />
          <Input
            value={form.phone}
            onChange={handleChange}
            required
            variant="outlined"
            label="Phone"
            name="phone"
          />
          <Input
            value={form.adress}
            onChange={handleChange}
            required
            variant="outlined"
            label="Adress"
            name="adress"
          />
          <Input
            value={form.state}
            onChange={handleChange}
            required
            variant="outlined"
            label="State"
            name="state"
          />
          <Input
            value={form.zip}
            onChange={handleChange}
            required
            variant="outlined"
            label="ZIP"
            name="zip"
          />
        </div>
        <div className="flex flex-row items-start  mt-5 gap-x-2">
          <input
            type="file"
            name="file"
            className="file-input file-input-bordered file-input-primary w-full"
          />
          <button
            onSubmit={(e) => handleSubmit(e)}
            className="btn bg-primary hover:bg-blue-500 border-none w-[30%] max-w-xs "
          >
            Add User
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddUser;
