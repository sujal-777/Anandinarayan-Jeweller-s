import React from "react";

export default function loading() {
    return (
        <div className="fixed top-0 left-0 z-50 w-screen h-[100dvh] bg-white flex items-center justify-center">
            <div className="lds-ripple">
                <div />
                <div />
            </div>
        </div>
    );
}
