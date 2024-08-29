import { FaSearchengin } from "react-icons/fa";
import React from 'react';
import MenuItem from "./MenuItem";
import Avatar from "../Avatar";

const Search = () => {
  return (
    <div
      className="
        border-[1px]
        w-full
        md:w-auto
        py-2
        rounded-full
        shadow-sm
        hover:shadow-md
        transition
        cursor-pointer
      "
    >
      <div
        className="
          flex
          flex-row
          items-center
          justify-between
        "
      >
        <div
          className="
            text-sm
            font-semibold
            px-6
          "
        >
          Location Label
        </div>
        <div
          className="
            hidden
            sm:block
            text-sm
            font-semibold
            px-6
            border-x-[1px]
            flex-1
            text-center
          "
        >
          Duration Label
        </div>
        <div
          className="
            text-sm
            pl-6
            pr-2
            text-gray-600
            flex
            flex-row
            items-center
            gap-3
          "
        >
          <div className="hidden sm:block">Guest Label</div>
          <div
            className="
              p-2
              bg-white
              rounded-full
              text-black
            "
          >
            <FaSearchengin size={18} />
            <Avatar/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;