import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function EmployeeAttendanceTable1({ newAllUserTabledata }) {
    const loggedTime = (checkin, checkout) => {
        const timeToSeconds = (time) => {
            const [hours, minutes, seconds] = time.split(':').map(Number);
            return hours * 3600 + minutes * 60 + seconds;
        };
        const secondsToHHMMSS = (seconds) => {
            const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
            const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
            const s = Math.floor(seconds % 60).toString().padStart(2, '0');
            return `${h}:${m}:${s}`;
        };
        const loggedSeconds = timeToSeconds(checkout) - timeToSeconds(checkin);
        return secondsToHHMMSS(loggedSeconds);
    };
    // calculte defiecit and over time
    const calculateOvertimeDeficit = (checkin, checkout) => {
        const timeToSeconds = (time) => {
            const [h, m, s] = time.split(':').map(Number);
            return h * 3600 + m * 60 + s;
        };
        const secondsToHHMMSS = (seconds) => {
            const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
            const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
            const s = Math.floor(seconds % 60).toString().padStart(2, '0');
            return `${h}:${m}:${s}`;
        };
        const worked = timeToSeconds(checkout) - timeToSeconds(checkin);
        const standard = 9 * 3600;
        if (worked > standard) {
            return { overtime: secondsToHHMMSS(worked - standard), deficit: '00:00:00' };
        }
        else if (worked < standard) {
            return { overtime: '00:00:00', deficit: secondsToHHMMSS(standard - worked) };
        }
        else {
            return { overtime: '00:00:00', deficit: '00:00:00' };
        }
    };
    return (_jsx("div", { className: "overflow-auto customScroll max-h-screen  w-full", children: _jsxs("table", { className: "min-w-[1040px] w-full text-white text-sm", children: [_jsx("thead", { children: _jsxs("tr", { className: 'bg-[#212121] ', children: [_jsx("th", { className: 'rounded-l-lg w-1/7', children: "EMP Code" }), _jsx("th", { className: 'p-6 ', children: "Date" }), _jsx("th", { className: 'w-1/7', children: "Clock In" }), _jsx("th", { className: 'w-1/7', children: "Clock Out" }), _jsx("th", { className: 'w-1/7', children: "Work Schedule" }), _jsx("th", { className: 'w-1/7', children: "Logged Time" }), _jsx("th", { className: 'w-1/7', children: "Over Time" }), _jsx("th", { className: 'w-1/7 rounded-r-lg', children: "Deficit" })] }) }), _jsx("tbody", { children: newAllUserTabledata?.map((item) => (_jsxs("tr", { className: 'text-center', children: [_jsx("td", { children: item?.emp_Ref.employeeCode }), _jsx("td", { className: 'p-8 text-nowrap', children: _jsx("p", { className: '', children: item?.date.split("T")[0] || '-' }) }), _jsx("td", { children: item?.checkin || "-" }), _jsx("td", { children: item?.checkout || '-' }), _jsx("td", { children: "9 Hours" }), _jsx("td", { children: loggedTime(item?.checkin, item?.checkout) }), _jsx("td", { children: calculateOvertimeDeficit(item?.checkin, item?.checkout).overtime }), _jsx("td", { children: calculateOvertimeDeficit(item?.checkin, item?.checkout).deficit })] }, item.id))) })] }) }));
}
