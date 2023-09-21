import { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import { ROUTES } from "../../constants/routes";

import * as S from "./styles";

function AdminLayout() {
  const [isShowSidebar, setIsShowSidebar] = useState(true);
  console.log(
    "🚀 ~ file: index.jsx:13 ~ AdminLayout ~ isShowSidebar:",
    isShowSidebar
  );

  return (
    <S.LayoutWrapper>
      <Header
        setIsShowSidebar={setIsShowSidebar}
        isShowSidebar={isShowSidebar}
      />
      <S.MainWrapper>
        <Sidebar isShowSidebar={isShowSidebar} />
        <S.MainContainer isShowSidebar={isShowSidebar}>
          <Outlet />
        </S.MainContainer>
      </S.MainWrapper>
    </S.LayoutWrapper>
  );
}

export default AdminLayout;
