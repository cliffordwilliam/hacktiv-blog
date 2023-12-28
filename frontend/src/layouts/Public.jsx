import { Outlet } from "react-router-dom";
import PublicHeader from "../components/PublicHeader";
import PublicFooter from "../components/PublicFooter";

export default function Global() {
  return (
    <>
      <PublicHeader />
      <Outlet />
      <PublicFooter />
    </>
  );
}
