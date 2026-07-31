import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import InfoCard from '@/Components/Common/InfoCard';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
export default function LeaveCards() {
    const user = useSelector((state) => state.user.currentUser);
    const [cardData, setCardData] = useState({
        remainingAnnualLeave: 0,
        totalAnnualLeave: 0,
        totalSickLeave: 0,
        remainingSickLeave: 0,
        totalCasualLeave: 0,
        remainingCasualLeave: 0,
    });
    useEffect(() => {
        axios.get(`/api/leave/get-leave-balance/${user.employeeId}`)
            .then((Response) => {
            const data = Response.data;
            setCardData(data);
        })
            .catch((err) => {
            console.log(err);
        });
    }, []);
    let annualLeave = cardData?.remainingAnnualLeave ?? 0;
    let monthly;
    let annual = 60 - annualLeave;
    if (annual > 5) {
        monthly = 0;
    }
    else {
        monthly = 5 - annual;
    }
    return (_jsx(_Fragment, { children: _jsxs("div", { className: 'flex flex-wrap gap-2 justify-center items-center mt-8 ', children: [_jsx(InfoCard, { title: "Annual", description: cardData?.totalAnnualLeave, subTitle: "Total", subTitle2: 'Remaning', description2: cardData?.remainingAnnualLeave }), _jsx(InfoCard, { title: "Monthly", description: 5, subTitle: "Total", subTitle2: 'Remaning', description2: monthly > 0 ? monthly : '0' }), _jsx(InfoCard, { title: "Sick Leave", description: cardData?.totalSickLeave, subTitle: "Total", subTitle2: 'Remaning', description2: cardData?.remainingSickLeave }), _jsx(InfoCard, { title: "Other", description: cardData?.totalCasualLeave, subTitle: "Total", subTitle2: 'Remaning', description2: cardData?.remainingCasualLeave })] }) }));
}
