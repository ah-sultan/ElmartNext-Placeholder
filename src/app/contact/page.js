import '../Styles/style.css'
import '../Styles/responsive.css'
import Breadcrumb from "@/Component/Breadcrumb/Breadcrumb";
import ContactUs from "@/Component/ContactUs/ContactUs";
import OfficeLocation from "@/Component/ContactUs/OfficeLocation/OfficeLocation";
import Header from "@/Component/Shared/Header/Header";

export const metadata = {
  title: "Contact Us - Elmart",
};

const page = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb currentPage="Contact" />
        <OfficeLocation />
        <ContactUs />
      </main>
    </>
  );
};

export default page;
