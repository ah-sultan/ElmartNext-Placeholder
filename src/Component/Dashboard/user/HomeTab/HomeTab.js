import HomeTabAccInfo from "./HomeTabAccInfo";
import homeTabData from "./homeTabData.json";
import CountUp from "react-countup";
const HomeTab = () => {
  return (
    <>
      <div id="user-dshbrd-dashboard">
        <h2>My Dashboard</h2>
        <p>
          Hello <strong>Ronal M. Griffim</strong>,
        </p>
        <p>
          From your My Account Dashboard you have the ability to view a snapshot
          of your recent account activity and update your account information.
          Select a link below to view or edit information.
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
        <HomeTabAccInfo profileData={homeTabData.profile} />
      </div>
    </>
  );
};

export default HomeTab;
