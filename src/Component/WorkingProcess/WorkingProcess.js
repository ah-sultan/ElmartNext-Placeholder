import Image from "next/image";
import workProcessData from "./workingProcessData.json";
const WorkingProcess = () => {
  return (
    <>
      <section className="work-processing-section">
        <div className="container">
          <div className="row pb-25">
            <div className="col-12 text-center">
              <div className="section-title">
                <span>Work Processing</span>
                <h2>How it Work processing</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {workProcessData &&
              Array.isArray(workProcessData) &&
              [...workProcessData].map((data, index) => {
                return (
                  <div className="col-xl-3 col-md-6" key={index}>
                    <div className="work-processing">
                      <div className="work-processing-content">
                        <div className="work-processing-title">
                          <h4>{data.title}</h4>
                          <h6>{data.description}</h6>
                        </div>
                      </div>
                      <div className={`work-processing-image ${data.bgClass}`}>
                        <Image
                          quality={100}
                          src={data.image}
                          alt={data.title}
                          width={81}
                          height={78}
                        />
                        <div className="step-btn">Step {data.step}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkingProcess;
