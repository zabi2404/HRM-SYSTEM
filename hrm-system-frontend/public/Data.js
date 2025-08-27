import { RiHomeFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { PiCurrencyDollarSimpleBold } from "react-icons/pi";
import { PiPuzzlePieceFill } from "react-icons/pi";
import { FaPen } from "react-icons/fa";
import { BsCreditCardFill } from "react-icons/bs";
import { HiBell } from "react-icons/hi2";
import { IoSettings } from "react-icons/io5";
import { TbBrandWebflow } from "react-icons/tb";

// employee menu
const employeeMenu = [
  { id: 1, title: "Dashboard", icon: RiHomeFill, to: "/dashboard" },
  { id: 2, title: "Attendance", icon: FaStar, to: "/attendance" },
  { id: 3, title: "Leave", icon: FaUser, to: "/leave" },
  { id: 4, title: "Payroll", icon: PiCurrencyDollarSimpleBold, to: "/payroll" },
  { id: 5, title: "Messages", icon: PiPuzzlePieceFill, to: "/message" },
];

// hr menu
const hrMenu = [
  { id: 1, title: "Dashboard", icon: RiHomeFill, to: "/dashboard" },
  { id: 2, title: "Employee", icon: FaUser, to: "/employees" },
  { id: 3, title: "Leaves", icon: FaStar, to: "/hr/leaves" },
  { id: 4, title: "Attendance", icon: PiPuzzlePieceFill, to: "/hr/attendance" },
  { id: 5, title: "Payroll", icon: PiCurrencyDollarSimpleBold, to: "/hr/payroll" },
  { id: 6, title: "Announcements", icon: PiPuzzlePieceFill, to: "/hr/announcements" },
];

const adminMenu = [
  { id: 1, title: "Dashboard", icon: RiHomeFill, to: "/dashboard" },
  { id: 2, title: "Employee", icon: FaUser, to: "/employees" },
  { id: 3, title: "Leaves", icon: FaStar, to: "/hr/leaves" },
  { id: 4, title: "Attendance", icon: PiPuzzlePieceFill, to: "/hr/attendance" },
  { id: 5, title: "Payroll", icon: PiCurrencyDollarSimpleBold, to: "/hr/payroll" },
  { id: 6, title: "Announcements", icon: PiPuzzlePieceFill, to: "/hr/announcements" },
  { id: 7, title: "Company Profile", icon: PiPuzzlePieceFill, to: "/hr/announcements" },
];




const hrSubmenu = [
  {
    id: 1,
    title: "Employee",
    items: [
      { name: "Directory", path: "all-pages" },     
    ]
  },{
    id: 2,
    title: "Leaves",
    items: [
      { name: "My leave", path: "all-pages" }, 
      { name: "Employees Leave", path: "all-pages" }, 
          
    ]
  },
  {
    id: 3,
    title: "Attendance",
    items: [
      { name: "My attendance", path: "all-pages" },     
      { name: "Employees attendance", path: "all-pages" },     

    ]
  },
 
];

const adminSubmenu = [
  {
    id: 1,
    title: "Employee",
    items: [
      { name: "Directory", path: "all-pages" },     
    ]
  },{
    id: 2,
    title: "Leaves",
    items: [
      { name: "My leave", path: "all-pages" }, 
      { name: "Employees Leave", path: "all-pages" }, 
          
    ]
  },
  {
    id: 3,
    title: "Attendance",
    items: [
      { name: "My attendance", path: "all-pages" },     
      { name: "Employees attendance", path: "all-pages" },     

    ]
  },
  {
    id: 4,
    title: "Payroll",
    items: [
      { name: "Hr Payroll", path: "all-pages" },     
      { name: "Employees Payroll", path: "all-pages" },     

    ]
  },
 
];










const CredentialSubmenuArray=
[{
   
    title: "Personal Information",
    icon: FaPen ,
    to:'adduser'
  },
  {
   
    title: "Team",
    icon: FaUser,
    to:"team"
  },
{
   
    title: "Billing",
    icon: BsCreditCardFill,
    to:'billing'
  },

  {
   
    title: "Notifications",
    icon: HiBell,
    to:"notification"
  },

]






const orderTabledata =[
   { id: 1234, date: 'Jan 1 2024', total: 100, paid: false },
  { id: 1235, date: 'Jan 2 2024', total: 150, paid: false },
  { id: 1236, date: 'Jan 3 2024', total: 200, paid: true  },
  { id: 1237, date: 'Jan 4 2024', total: 200, paid: false },
  { id: 1238, date: 'Jan 5 2024', total: 200, paid: true  },
  { id: 1239, date: 'Jan 6 2024', total: 200, paid: false },
]

// ordersMock.js (or inline in the component)
const OrderStatusTabledata = [
  {
    orderNo: 10124,
    client: 'John Carter',
    email: 'hello@johncarter.com',
    date: '2025‑07‑14',
    status: 'Delivered',          // or 'Cancelled'
    country: 'United States',
    total: 100,
  },
  {
    orderNo: 10125,
    client: 'Mary Allen',
    email: 'mary@acme.io',
    date: '2025‑07‑13',
    status: 'Cancelled',
    country: 'Canada',
    total: 240,
  },
  {
    orderNo: 10126,
    client: 'Zoe Müller',
    email: 'zoe@rocketlabs.co',
    date: '2025‑07‑12',
    status: 'Delivered',
    country: 'Germany',
    total: 80,
  },
   {
    orderNo: 10127,
    client: 'John Carter',
    email: 'hello@johncarter.com',
    date: '2025‑07‑14',
    status: 'Delivered',          // or 'Cancelled'
    country: 'United States',
    total: 100,
  },
  {
    orderNo: 10128,
    client: 'Mary Allen',
    email: 'mary@acme.io',
    date: '2025‑07‑13',
    status: 'Cancelled',
    country: 'Canada',
    total: 240,
  },
   {
    orderNo: 10129,
    client: 'Zoe Müller',
    email: 'zoe@rocketlabs.co',
    date: '2025‑07‑12',
    status: 'Delivered',
    country: 'Germany',
    total: 80,
  },
];


const AllUserTabledata = Array.from({ length: 50 }, (_, index) => {
  const baseUsers = [
    {
      avatar: '/Images/Avatar Circle.svg',
      name: 'John Carter',
      email: 'hello@johncarter.com',
      phone: '(414) 907-1274',
      country: 'United States',
      company: 'Google',
      status: 'Online',
    },
    {
      avatar: '/Images/Avatar Circle.svg',
      name: 'Mary Allen',
      email: 'mary@acme.io',
      phone: '(212) 555-0199',
      country: 'Canada',
      company: 'Acme Corp',
      status: 'Referral',
    },
    {
      avatar: '/Images/Avatar Circle.svg',
      name: 'Zoe Müller',
      email: 'zoe@rocketlabs.co',
      phone: '(415) 808-4400',
      country: 'Germany',
      company: 'Rocket Labs',
      status: 'Event',
    },
  ];

  const user = baseUsers[index % baseUsers.length]; // Repeat pattern
  return { id: index + 1, ...user };
});




export default employeeMenu;
export {adminSubmenu, hrMenu,adminMenu,hrSubmenu,AllUserTabledata ,OrderStatusTabledata ,CredentialSubmenuArray ,orderTabledata };





