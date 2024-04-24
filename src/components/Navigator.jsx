import { useContext, useState } from "react";
import { BsFillPinMapFill } from "react-icons/bs";
import {
  FaRegWindowMaximize,
  FaWalking,
  FaMotorcycle,
  FaCarSide,
} from "react-icons/fa";
import { LiaBicycleSolid } from "react-icons/lia";
import { TbTrain, TbBus } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { AuthContext } from "../context/AuthContext";

export default function Navigator() {
  const {
    openPinDetails,
    closePinDetails,
    pinDetailsExpanded,
    openModal,
    setCreateLocationModalActive,
  } = useContext(AuthContext);

  const openSavePinModal = () => {
    openModal();
    setCreateLocationModalActive(true);
  };

  return (
    <>
      {/* Overlay for when pin details is expanded */}
      {pinDetailsExpanded && (
        <div
          className="w-screen h-screen bg-black opacity-50 fixed inset-0"
          onClick={closePinDetails}
        ></div>
      )}
      <div className="p-4 bg-white shadow-lg rounded-t-2xl w-full max-w-[96vw] md:max-w-[420px] fixed bottom-0 md:left-[10vw] left-1/2 -translate-x-1/2 md:-translate-x-0 transition">
        {!pinDetailsExpanded ? (
          <button
            className="btn btn-lg btn-circle bg-pink-clr text-white absolute right-4 -top-8 border-4 border-white "
            onClick={openPinDetails}
          >
            <FaRegWindowMaximize className="text-2xl" />
          </button>
        ) : (
          <button
            className="btn btn-ghost absolute right-0 top-0 hover:bg-transparent"
            onClick={closePinDetails}
          >
            <IoClose className="text-2xl" />
          </button>
        )}
        <div className="flex p-2 gap-6 items-center">
          <BsFillPinMapFill className="text-pink-clr text-2xl" />
          <span>
            <h3 className="text-lg font-semibold">Aboru, Lagos, Nigeria</h3>
            <p className="text-sm font-light">lat: -72.124, long: 2.876</p>
          </span>
        </div>

        <div className="border-t border-b border-gray-100 px-2 flex items-center gap-2">
          <p>Distance from you:</p>
          <p className="font-semibold">700m</p>
        </div>

        {pinDetailsExpanded && (
          <>
            <div className="w-full aspect-video rounded-xl mt-4 overflow-hidden">
              <img
                src="https://media.istockphoto.com/id/172764130/photo/travel-destination.webp?b=1&s=170667a&w=0&k=20&c=jCxWlrUnoKrhKPImHZRctqwsC9sR1r8dalK68w2KbVI="
                alt="Mini Map"
                className="w-full h-full object-cover"
              />
            </div>

            <button
              className="btn btn-md w-full rounded-full uppercase text-white bg-pink-clr mt-4"
              onClick={openSavePinModal}
            >
              save location
            </button>

            <div className="mt-4">
              <div className="border-t border-b border-gray-100 px-2 flex items-center gap-2 mb-4">
                <p>Estimated journeying time </p>
              </div>

              <div className="flex items-center gap-4 my-2">
                <FaWalking className="text-gray-500 text-2xl" />
                <span>
                  <p className="text-sm font-semibold">2 hours, 30 mins</p>
                  <p className="text-xs text-gray-400">Avg speed: 22km/h</p>
                </span>
              </div>

              <div className="flex items-center gap-4 my-2">
                <LiaBicycleSolid className="text-gray-500 text-2xl" />
                <span>
                  <p className="text-sm font-semibold">2 hours, 30 mins</p>
                  <p className="text-xs text-gray-400">Avg speed: 22km/h</p>
                </span>
              </div>

              <div className="flex items-center gap-4 my-2">
                <FaMotorcycle className="text-gray-500 text-2xl" />
                <span>
                  <p className="text-sm font-semibold">2 hours, 30 mins</p>
                  <p className="text-xs text-gray-400">Avg speed: 22km/h</p>
                </span>
              </div>

              <div className="flex items-center gap-4 my-2">
                <TbTrain className="text-gray-500 text-2xl" />
                <span>
                  <p className="text-sm font-semibold">2 hours, 30 mins</p>
                  <p className="text-xs text-gray-400">Avg speed: 22km/h</p>
                </span>
              </div>

              <div className="flex items-center gap-4 my-2">
                <FaCarSide className="text-gray-500 text-2xl" />
                <span>
                  <p className="text-sm font-semibold">2 hours, 30 mins</p>
                  <p className="text-xs text-gray-400">Avg speed: 22km/h</p>
                </span>
              </div>

              <div className="flex items-center gap-4 my-2">
                <TbBus className="text-gray-500 text-2xl" />
                <span>
                  <p className="text-sm font-semibold">2 hours, 30 mins</p>
                  <p className="text-xs text-gray-400">Avg speed: 22km/h</p>
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}