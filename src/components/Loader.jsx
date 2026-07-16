import React from "react";

const Loaders = ({ show }) => {
    return (
        show && (
            <div className="text-center">
                <div className="loader"></div>

            </div>
        )
    );
};

export default Loaders;