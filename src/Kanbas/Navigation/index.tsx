import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaEnvelope, FaHistory, FaTelegram, FaList, FaCircle, FaQuestion } from "react-icons/fa";
import { FaInbox } from 'react-icons/fa'; // This assumes the correct icon name is FaInbox


function KanbasNavigation() {
  const links = [
    { label: "Account",   icon: <FaRegUserCircle className="fs-2" />  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" />  },
    { label: "Courses",   icon: <FaBook className="fs-2" />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2" /> },
    { label: "Inbox",     icon: <FaEnvelope className="fs-2" />    }, 
    { label: "History",  icon: <FaHistory className="fs-2" /> },
    { label: "Studio",  icon: <FaTelegram className="fs-2" /> },
    { label: "Commons",  icon: <FaList className="fs-2" /> },
    { label: "Help",  icon: <FaQuestion className="fs-2" /> },
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;