import React from "react";

const WrapperMusic = ({ children }) => {
    return (
        <div className="container  mt-10 mx-auto w-[75%]">
            <header  className="text-4xl font-medium text-center my-6">All Tracks</header>
            <div className="grid grid-cols-3 gap-5">{children}</div>
        </div>
    );
};

export default WrapperMusic;
