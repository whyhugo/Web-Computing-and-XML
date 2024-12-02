// Schedules for each day
const schedules = {
    Monday: `
        <ul>
            <li>09:10 - 10:00: Linear Algebra (理圖 003)</li>
            <li>10:20 - 11:10: Linear Algebra (理圖 003)</li>
            <li>11:20 - 12:10: Linear Algebra (理圖 003)</li>
            <li>13:20 - 14:10: Data Processing with Excel (NTU)</li>
            <li>14:20 - 15:10: Data Processing with Excel (NTU)</li>
            <li>17:30 - 18:20: Web Computing and XML (B103)</li>
            <li>18:40 - 19:30: Web Computing and XML (B103)</li>
            <li>19:35 - 20:25: Web Computing and XML (B103)</li>
        </ul>
    `,
    Tuesday: `
        <ul>
            <li>09:10 - 10:00: Computer Programming I (理圖 807)</li>
            <li>10:20 - 11:10: Computer Programming I (理圖 807)</li>
            <li>11:20 - 12:10: Computer Programming I (理圖 807)</li>
            <li>15:30 - 16:20: Introduction to Philosophy of Biology (B101)</li>
            <li>16:30 - 17:20: Introduction to Philosophy of Biology (B101)</li>
        </ul>
    `,
    Wednesday: `
        <ul>
            <li>13:20 - 14:10: Introduction to Management (誠 302)</li>
            <li>14:20 - 15:10: Introduction to Management (誠 302)</li>
        </ul>
    `,
    Thursday: `
        <ul>
            <li>13:20 - 14:10: Calculus B I (E201)</li>
            <li>14:20 - 15:10: Calculus B I (E201)</li>
            <li>15:30 - 16:20: Calculus B I (E201)</li>
            <li>16:30 - 17:20: Principals and Practical Applications of Color Scheme (NTUST)</li>
            <li>17:30 - 18:20: Principals and Practical Applications of Color Scheme (NTUST)</li>
        </ul>
    `,
    Friday: `
        <ul>
            <li>10:20 - 11:10: English III (S602)</li>
            <li>11:20 - 12:10: English III (S602)</li>
            <li>15:30 - 16:20: Beginning Badminton (體育館一 4F)</li>
            <li>16:30 - 17:20: Beginning Badminton (體育館一 4F)</li>
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

    // Remove 'active' class from all buttons
    const buttons = document.querySelectorAll('.schedule-buttons button');
    buttons.forEach(button => button.classList.remove('active'));

    // Add 'active' class to the clicked button
    const activeButton = document.querySelector(`button[onclick="showSchedule('${day}')"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}
