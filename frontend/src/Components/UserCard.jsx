import React from "react";
import Swal from "sweetalert2";
import man from "../assets/man.svg";

export default function UserCard() {
  return (
    <div className="">
      <div className="card w-[350px] bg-lightBlue shadow-2xl shadow-black">
        <figure className="py-3">
          <img
            className="w-32 h-32 pt-3 rounded-full ring ring-primary ring-opacity-80 offset-base-100 ring-offset-2"
            src={man}
            sizes="50px"
            alt="Person"
          />
        </figure>
        <div className="card-body text-light">
          <div>
            Name :<span className="ml-2">Chadi Rabii</span>
          </div>
          <div>
            Departement :<span className="ml-2">IT</span>
          </div>
          <div>
            Email :<span className="ml-2">chadirabii@gmail.com</span>
          </div>
          <div>
            Phone :<span className="ml-2">12 345 678</span>
          </div>
          <div>
            Adresse :<span className="ml-2">Rue l'aeroport 2151, Gafsa</span>
          </div>

          <div className="justify-end card-actions">
            <button className="btn btn-primary">Modify</button>
            <button
              onClick={() =>
                Swal.fire({
                  title: "Are you sure?",
                  text: "You won't be able to revert this!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!",
                }).then((result) => {
                  if (result.isConfirmed) {
                    Swal.fire(
                      "Deleted!",
                      "User deleted successfully.",
                      "success"
                    );
                  }
                })
              }
              className="btn bg-danger border-none hover:bg-[#C62E2E]"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
