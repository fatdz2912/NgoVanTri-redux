import { Link, useLocation, useNavigate, Navigate } from "react-router-dom";

import { ROUTES } from "../../../constants/routes";

const AboutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const role = "admin";
  console.log("🚀 ~ file: index.jsx:5 ~ AboutPage ~ location:", location);

  const redirectHome = () => {
    console.log("Ahihi");
    navigate(ROUTES.USER.HOME);
  };

  if (role !== "admin") {
    return <Navigate to={ROUTES.USER.HOME} />;
  }
  return (
    <div>
      <div>About Page</div>
      <Link to={ROUTES.USER.HOME}>Home</Link>
      <div>
        <button onClick={() => redirectHome()}>Go to home and show log</button>
      </div>
    </div>
  );
};

export default AboutPage;
