"use client"
import { SwiperSlide, Swiper } from "swiper/react";
import TeamMemberCard from "./TeamMemberCard";
import teamMemberData from "./teamMemberData.json";
import { Navigation } from "swiper/modules";
import SliderNavigationBtn from "../widgets/SliderNavigationBtn/SliderNavigationBtn";

const TeamMember = () => {
  const swiperConfig = {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".team-member-slider-next",
      prevEl: ".team-member-slider-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      415: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 4,
      },
    },
  };

  return (
    <>
      <section className="team-member-section">
        <div className="container">
          <div className="row pb-25">
            <div className="col-sm-12">
              <div className="section-title">
                <span>Our Team member</span>
                <h2>Expert Management Team</h2>
              </div>
              <div className="section-nav">
                <SliderNavigationBtn nextEl="team-member-slider-next" prevEl="team-member-slider-prev" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <Swiper
                {...swiperConfig}
                modules={[Navigation]}
                className="slide1  team-member-slider"

              >
                {teamMemberData && Array.isArray(teamMemberData) && [...teamMemberData].map((data, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <TeamMemberCard {...data} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamMember;
