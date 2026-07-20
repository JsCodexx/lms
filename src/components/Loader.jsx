import React from "react";

const Loaders = ({ show }) => {
    return (
        show && (
            <div className="text-center">
                <h1 className="loader"></h1>
                
            </div>
        )
    );
};

export default Loaders;