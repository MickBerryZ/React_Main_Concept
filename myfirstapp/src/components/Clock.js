import React, { useState, useEffect } from "react";

function Clock() {
    const [time, setTime] = useState(new Date().toString())

    useEffect(() => {
        console.log("component mounted or updated");
        const internal = setInterval(showDate, 1000);

        return () => {
            console.log("cleanup of Interval");
            clearInterval(internal);
        };
    }, [time]);


    function showDate() {
        // console.log(new Date().toString());
        setTime(new Date().toString());
    }

    return <div>{time}</div>;
}
export default Clock;