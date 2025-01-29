function convertTo12HourTime(time) {
    let hour = parseInt(time.split(":")[0]);
    const minutes = time.split(":")[1];

    if (hour === 12) return time + " PM";
    if (hour === 0) return `12:${minutes} AM`
    if (hour > 12) {
        return `${String(hour - 12).padStart(2, "0")}:${minutes} PM`;
    } else {
        return time + " AM";
    }
}

console.log("Military time '00:30' in AM/PM time is ", convertTo12HourTime("00:30"));
console.log("Military time '12:30' in AM/PM time is ", convertTo12HourTime("12:30"));
console.log("Military time '01:30' in AM/PM time is ", convertTo12HourTime("01:30"));
console.log("Military time '18:00' in AM/PM time is ", convertTo12HourTime("18:00"));