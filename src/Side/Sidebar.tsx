// import React, { useState, ReactNode } from 'react';
// import {
//     FaTh,
//     FaBars,
//     FaHospital ,
//     FaRegChartBar,
//     FaBriefcaseMedical
// }from "react-icons/fa";
// import { NavLink } from 'react-router-dom';
// interface SidebarProps {
//     children: ReactNode;
//   }

// const Sidebar: React.FC<SidebarProps> = ({children}) => {
//     const[isOpen ,setIsOpen] = useState(false);
//     const toggle = () => setIsOpen (!isOpen);
//     const menuItem=[
//         {
//             path:"/",
//             name:"MetricsCard",
//             icon:<FaTh/>
//         },
//         {
//             path:"/outcomesChart",
//             name:"OutcomesChart",
//             icon:<FaHospital />
//         },
//         {
//             path:"/treatmentEffectiveness",
//             name:"TreatmentEffectiveness",
//             icon:<FaRegChartBar/>
//         },
//         {
//             path:"/utilizationMetrics",
//             name:"UtilizationMetrics",
//             icon:<FaBriefcaseMedical/>
//         }
//     ]
//     return (
//         <div className="container">
//            <div style={{width: isOpen ? "260px" : "50px"}} className="sidebar">
//                <div className="top_section">
//                    <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
//                    <div style={{marginLeft: isOpen ? "140px" : "0px"}} className="bars">
//                        <FaBars onClick={toggle}/>
//                    </div>
//                </div>
//                {
//                    menuItem.map((item, index)=>(
//                        <NavLink to={item.path} key={index} className="link" activeClassName="active">
//                            <div className="icon">{item.icon}</div>
//                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
//                        </NavLink>
//                    ))
//                }
//            </div>
//            <main>{children}</main>
//         </div>
//     );
// };

// export default Sidebar;






import React, { useState, ReactNode, useEffect } from 'react';
import {
    FaTh,
    FaBars,
    FaHospital,
    FaRegChartBar,
    FaBriefcaseMedical
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';

interface SidebarProps {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    onUpdate: Function;
    children: ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ onUpdate, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    useEffect(() => {
        onUpdate(isOpen);
    }, [isOpen]);

    const menuItem = [
        {
            path: "/",
            name: "MetricsCard",
            icon: <FaTh />
        },
        {
            path: "/outcomesChart",
            name: "OutcomesChart",
            icon: <FaHospital />
        },
        {
            path: "/treatmentEffectiveness",
            name: "TreatmentEffectiveness",
            icon: <FaRegChartBar />
        },
        {
            path: "/utilizationMetrics",
            name: "UtilizationMetrics",
            icon: <FaBriefcaseMedical />
        }
    ];

    useEffect(() => {
        const handleResize = () => {
            setViewportWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    let w = "";
    let marginL = "";

    if (isOpen && viewportWidth <= 545) {
        w = viewportWidth + "px";
        marginL = (viewportWidth - 125) + "px";
    } else if (isOpen && viewportWidth > 545) {
        w = "260px";
        marginL = "140px";
    } else if (!isOpen) {
        w = "50px";
        marginL = "0px";
    }

    return (
        <div className="container">
            <div style={{ minWidth: w }} className="sidebar">
                <div className="top_section">
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">Menu</h1>
                    <div style={{ marginLeft: marginL }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink
                            to={item.path}
                            key={index}
                            className={({ isActive }) => isActive ? "link active" : "link"}
                        >
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            {<main style={{ display: ((isOpen && viewportWidth <= 545)) ? "none" : "grid" }}>{children}</main>}
        </div>
    );
};

export default Sidebar;
