import React from "react";

import { Button } from "@nextui-org/react";

export default function content() {
  return (
    <>
      <div className="my-10 ">
        <div className=" flex items-center justify-center ">
          <Button
            radius="none"
            size="lg"
            className=" text-white bg-[#AA8453] font-gilda text-4xl uppercase "
          >
            Feedback
          </Button>
        </div>
        <p className="flex items-center justify-center text-center mx-5 md:mx-40 lg:mx-96 font-barlow text-xl mt-3">
          Getting things right for you is an important part of what we do and
          really do like to hear your feedback about your stay with us.
        </p>
      </div>
    </>
  );
}
