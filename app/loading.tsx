import React from "react";

export default function loading() {
    return (
        <div className="fixed top-0 left-0 z-50 w-screen h-[100dvh] bg-white flex items-center justify-center transition-all duration-200">
            {/* <div className="lds-ripple">
                <div />
                <div />
            </div> */}
            <div className="h-12 border-2 aspect-square rounded-full animate-spin border-t-[#aa8453]">

            </div>
        </div>
    );
}
