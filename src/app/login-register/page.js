import '../Styles/style.css'
import '../Styles/responsive.css'
import LoginRegisterArea from "@/Component/Auth/LoginRegisterArea/LoginRegisterArea";
import Header from "@/Component/Shared/Header/Header";

export const metadata = {
  title: "Login Register - Elmart",
};

const page = () => {
  return (
    <>
      <div className="login-and-registration-page">
        <Header />
        <main>
          <LoginRegisterArea />
        </main>
      </div>
    </>
  );
};

export default page;
