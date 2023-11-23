import React from "react";
import Navbar from "../components/Navbar";
import underConstruction from "../images/underConstruction.png";

function ComingSoon() {
    return (
        <>
            <Navbar />
            {/* <div style={containerStyle}>
                <h1 style={h1Style}>Will be Updated soon..</h1>
            </div> */}
            <div className="flex flex-col justify-between h-screen">
                <div className="flex-1 flex items-center justify-center">
                    <img src={underConstruction} alt="Under Construction" />
                </div>
            </div>

        </>
    );
}

export default ComingSoon;
