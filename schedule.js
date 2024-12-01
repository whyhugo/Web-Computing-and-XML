// Schedules for each day
const schedules = {
    Monday: `
        <ul>
            <li>08:10 - 09:00: Linear Algebra (理圖003)</li>
            <li>09:10 - 10:00: Excel for Data Analysis (系所自排)</li>
        </ul>
    `,
    Tuesday: `
        <ul>
            <li>10:20 - 11:10: Network Computing and XML (B103)</li>
            <li>11:20 - 12:10: Network Computing and XML (B103)</li>
        </ul>
    `,
    Wednesday: `
        <ul>
            <li>10:20 - 11:10: Network Computing and XML (B103)</li>
            <li>11:20 - 12:10: Linear Algebra (理圖003)</li>
        </ul>
    `,
    Thursday: `
        <ul>
            <li>09:10 - 10:00: Linear Algebra (理圖003)</li>
            <li>10:20 - 11:10: Excel for Data Analysis (系所自排)</li>
        </ul>
    `,
    Friday: `
        <ul>
            <li>09:10 - 10:00: Excel for Data Analysis (系所自排)</li>
        </ul>
    `,
    Saturday: `
        <ul>
            <li>No classes scheduled.</li>
        </ul>
    `,
};

// Show the schedule for the selected day
function showSchedule(day) {
    const scheduleElement = document.getElementById('daySchedule');
    scheduleElement.innerHTML = `<h3>${day}'s Schedule</h3>` + schedules[day];
}
