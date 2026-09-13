import { Footer, Header } from "@/components";
import { useEffect } from "react";
import { Outlet, useLocation} from "react-router-dom";

const HomeLayout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname])
  return (
    <>
     <Header />
     <Outlet />
     <Footer />
    </>
  )
}

export default HomeLayout;
