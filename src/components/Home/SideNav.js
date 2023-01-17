import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { BsPenFill } from "react-icons/bs";
import { GiKite } from "react-icons/gi";
import { RiInboxArchiveLine } from "react-icons/ri";

import { Badge } from "react-bootstrap";

import { countUnreadMails } from "../../store/slices/mail-slice";

const SideNav = () => {
  const dispatch = useDispatch();
  const { totalUnread } = useSelector((state) => state.mail);
  dispatch(countUnreadMails());
  const activeClassName = "sideNavLink active";
  return (
    <>
      <div
        className="sidemenu"
        style={{
          marginTop: 60,
          height: "100%",
        }}
      >
        <NavLink
          to="inbox"
          className={({ isActive }) =>
            isActive ? activeClassName : "sideNavLink"
          }
        >
          <span
            className="fs-5 d-flex justify-content-center align-items-center me-3"
            style={{
              width: 20,
              height: 30,
            }}
          >
            <RiInboxArchiveLine className="fs-3" />
          </span>
          Inbox
          <Badge
            pill
            className="p-2 text-info bg-info ms-3 d-flex justify-content-center align-items-center"
          >
            <span
              className="fw-bold text-white"
              style={{
                fontSize: 10,
              }}
            >
              {totalUnread}
            </span>
          </Badge>
        </NavLink>
        <NavLink to="sentbox" className="sideNavLink">
          <span
            className="fs-5 d-flex justify-content-center align-items-center me-3"
            style={{
              width: 20,
              height: 30,
            }}
          >
            <GiKite className="fs-3" />
          </span>
          Sentbox
        </NavLink>
        <NavLink to="/home/composemail" className="sideNavLink">
          <span
            className="fs-5 d-flex justify-content-center align-items-center me-3"
            style={{
              width: 20,
              height: 30,
            }}
          >
            <BsPenFill className="fs-3" />
          </span>
          <span>Compose</span>
        </NavLink>
      </div>
    </>
  );
};

export default SideNav;
