import { ThemeProvider } from "styled-components";
import { Routes, Route, Navigate } from "react-router-dom";
import { ConfigProvider } from "antd";
import { useSelector } from "react-redux";
// Layout
import UserLayout from "../layouts/UserLayout";
import AdminLayout from "../layouts/AdminLayout";
// User
import HomePage from "../pages/user/Home";
import AboutPage from "../pages/user/About";
import ProductDetailPage from "../pages/user/ProductDetail";
// Admin
import AdminDashboardPage from "../pages/admin/Dashboard";
import AdminUserListPage from "../pages/admin/UserList";
import AdminProductList from "../pages/admin/ProductList";
import AdminOrderList from "../pages/admin/OrderList";

import NotFoundPage from "../pages/NotFound";

import { ROUTES } from "../constants/routes";
import { light, dark } from "../themes";

function App() {
  const { theme } = useSelector((state) => state.common);
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#ff4d00",
          borderRadius: 4,
        },
      }}
    >
      <ThemeProvider theme={theme === "light" ? light : dark}>
        <Routes>
          <Route element={<UserLayout />}>
            <Route path="/" element={<Navigate to={ROUTES.USER.HOME} />} />
            <Route path={ROUTES.USER.HOME} element={<HomePage />} />
            <Route path={ROUTES.USER.ABOUT} element={<AboutPage />} />
            <Route
              path={ROUTES.USER.PRODUCT_DETAIL}
              element={<ProductDetailPage />}
            />
          </Route>
          <Route element={<AdminLayout />}>
            <Route
              path={ROUTES.ADMIN.DASHBOARD}
              element={<AdminDashboardPage />}
            />
            <Route
              path={ROUTES.ADMIN.USER_LIST}
              element={<AdminUserListPage />}
            />
            <Route
              path={ROUTES.ADMIN.PRODUCT_LIST}
              element={<AdminProductList />}
            />
            <Route
              path={ROUTES.ADMIN.ORDER_LIST}
              element={<AdminOrderList />}
            />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ThemeProvider>
    </ConfigProvider>
  );
}

export default App;
