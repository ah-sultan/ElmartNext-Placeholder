import StoreSummary from "./StoreSummary";
import homeTabData from "./data/homeTabData.json";
import CountUp from "react-countup";
const HomeTab = () => {
  return (
    <>
      <div id="seller-dshbrd-dashboard">
        <h2>My Dashboard</h2>
        <p>
          Hello <strong>Lily Daisy</strong>,
        </p>
        <p>
          From dashboard you have the ability to view a snapshot of your recent
          account and store activity and update your account information.
        </p>
        <div className="user-acc-activity">
          {homeTabData.activity &&
            Array.isArray(homeTabData.activity) &&
            [...homeTabData.activity].map((data, index) => {
              return (
                <div className="item" key={index}>
                  <div className="icon">
                    <i className={`${data.icon}`}></i>
                  </div>
                  <div className="content">
                    <p>{data.title}</p>
                    <CountUp as className="udb-count" end={data.count} />
                  </div>
                </div>
              );
            })}
        </div>
        <StoreSummary/>
      </div>
    </>
  );
};

export default HomeTab;
