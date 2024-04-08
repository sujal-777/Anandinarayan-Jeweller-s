import React from "react";

import Image from "next/image";

export default function hero() {
    return (
        <>
            <Image
                src="/feedback.png"
                alt="hero"
                width={1921}
                height={650}
                className="block h-auto w-full"
            />
        </>
    );
}
