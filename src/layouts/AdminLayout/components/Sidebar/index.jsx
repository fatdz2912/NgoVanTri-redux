import { useNavigate, useLocation } from "react-router-dom";

import { ROUTES } from "../../../../constants/routes";
import * as S from "./styles";

const Sidebar = ({ isShowSidebar }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const sidebarItems = [
    {
      label: "Dashboard",
      path: ROUTES.ADMIN.DASHBOARD,
    },
    {
      label: "User manager",
      path: ROUTES.ADMIN.USER_LIST,
    },
    {
      label: "Product manager",
      path: ROUTES.ADMIN.PRODUCT_LIST,
    },
    {
      label: "Order manager",
      path: ROUTES.ADMIN.ORDER_LIST,
    },
  ];

  const renderSidebarItems = sidebarItems.map((item, index) => {
    return (
      <S.SidebarItem
        key={index}
        onClick={() => navigate(item.path)}
        active={item.path === location.pathname}
      >
        {item.label}
      </S.SidebarItem>
    );
  });

  return (
    <S.SidebarWrapper isShow={isShowSidebar}>
      {renderSidebarItems}
    </S.SidebarWrapper>
  );
};

export default Sidebar;
