import '../../Styles/style.css'
import '../../Styles/responsive.css'
import Header from "@/Component/Shared/Header/Header";
import Breadcrumb from "@/Component/Breadcrumb/Breadcrumb";
import UserDashboard from "@/Component/Dashboard/user/UserDashboard/UserDashboard";

export const metadata = {
  title: "User Dashboard - Elmart",
};
const page = () => {
  return (
    <>
      <Header />
      <main className="user-dashboard-page">
        <Breadcrumb currentPage="User Dashboard" />
        <UserDashboard />
      </main>
    </>
  );
};

export default page;
