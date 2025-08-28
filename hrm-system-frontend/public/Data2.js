
const SideBarMenuLink = [

    {
        id: 1,
        title: "Profitability Leaderboard"
    }
    , {
        id: 2,
        title: "Win Pct% Leaderboards"
    },
    {
        id: 3,
        title: "Other Leaderboards"
    }
]

const SideBarsubLink = [
    {
        id: 1,
        title: "Profitability Leaderboard"
        , item: [
            "Profitability"
        ]

    },
    {
        id: 2,
        title: "Win Pct% Leaderboards"
        , item: [
            "(-1000 & Below)", "(-999 to -400)", "(-399 to -140)"
        ]

    }
    , {
        id: 3,
        title: "Other Leaderboards"
        , item: [
            "Most Subscribed", "Most Ldbrd Apps", "Longest Profit Streak", ""
        ]

    }

]


const QuestionListArray = [
    {
        id: 1,
        title: "Total Compensation"
    }, 
    {
        id: 2,
        title: "Actual Salery"
    },
    {
        id: 3,
        title: "Bonus"
    },
    {
        id: 4,
        title: "Deduction"
    }
    ,
   
]

const AnswerListArray = [
    {
        id: 1,
        title: "80000"
    }, 
    {
        id: 2,
        title: "75000"
    },
    {
        id: 3,
        title: "5000"
    },
    {
        id: 4,
        title: "2 off on 16 jan"
    },
   
];




export default SideBarMenuLink;

export { SideBarsubLink,QuestionListArray,AnswerListArray };