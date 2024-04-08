import React from "react";

import { Image } from "@nextui-org/react";

const header = "/awards/hero.png";

const hero = () => {
    return (
        <div className="w-full">
            <Image
                radius="none"
                src={header}
                alt="hero"
                className="h-auto w-full"
            />
        </div>
    );
};

export default hero;
