import { ThemeProvider } from "styled-components";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";

import { ROUTES } from "../../constants/routes";

import * as S from "./styles";

function UserLayout() {
  return (
    <S.LayoutWrapper>
      <Header />
      <S.MainWrapper>
        <S.MainContainer>
          <Outlet />
        </S.MainContainer>
      </S.MainWrapper>
      <Footer />
    </S.LayoutWrapper>
  );
}

export default UserLayout;
