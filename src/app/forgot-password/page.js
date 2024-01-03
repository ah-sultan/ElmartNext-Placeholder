import '../Styles/style.css'
import '../Styles/responsive.css'
import ForgotPassword from "@/Component/Auth/ForgotPassword/ForgotPassword";
import Header from "@/Component/Shared/Header/Header";


export const metadata = {
  title: "Forgot Password - Elmart",
};

const page = () => {
  return (
    <>
      <div className="login-and-registration-page">
        <Header />
        <main>
          <ForgotPassword />
        </main>
      </div>
    </>
  );
};

export default page;
