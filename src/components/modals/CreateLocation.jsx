import React, { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { StateContext } from "../../context/StateContext";
import { createPin } from "../../utils/Functions";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function CreateLocation() {
  const { user, pin, setModal } = useContext(StateContext);

  const navigate = useNavigate();
  const lat = pin.lat;
  const lng = pin.lng;

  const closeUpdateProfileModal = () => {
    setModal({ open: false, type: "" });
  };

  const updateLocation = async (e) => {
    e.preventDefault();
    const pinInfo = Object.fromEntries(new FormData(e.target));

    const userId = user._id;
    const pinData = { userId, ...pinInfo };

    await createPin(pinData);
    closeUpdateProfileModal();
    navigate("/");
  };

  return (
    <>
      <div className="w-screen h-screen fixed inset-0 bg-black opacity-50"></div>
      <form
        method="post"
        onSubmit={updateLocation}
        className="flex items-center justify-center gap-6 flex-col bg-white rounded-xl py-12 px-6 w-[94vw] md:max-w-[460px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <button
          type="button"
          className="btn btn-ghost absolute right-0 top-0 hover:bg-transparent"
          onClick={closeUpdateProfileModal}
        >
          <IoClose className="text-2xl" />
        </button>
        <span className="text-center mb-2">
          <h1 className="text-4xl font-bold">Create Location</h1>
          <p className="text-sm">Enter information for this location</p>
        </span>

        <label htmlFor="title" className="form-control w-full">
          <p className="text-sm uppercase">LOCATION TITLE</p>
          <input
            type="text"
            id="title"
            name="title"
            required
            className="input input-bordered w-full"
          />
        </label>

        <div className="flex items-center gap-4">
          <label htmlFor="lat" className="form-control w-full">
            <p className="text-sm uppercase">latitude</p>
            <input
              type="text"
              id="lat"
              name="lat"
              required
              className="input input-bordered w-full"
              defaultValue={lat}
            />
          </label>

          <label htmlFor="long" className="form-control w-full">
            <p className="text-sm uppercase">longitude</p>
            <input
              type="text"
              id="long"
              name="long"
              required
              className="input input-bordered w-full"
              defaultValue={lng}
            />
          </label>
        </div>

        <button
          type="submit"
          className="uppercase btn text-white font-semibold bg-pink-clr w-full p-3 rounded-lg"
        >
          create location
        </button>
      </form>
    </>
  );
}
