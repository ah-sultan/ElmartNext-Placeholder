import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const TeamMemberCard = ({ name, title, image, socialLinks }) => {
  const [showSocialIcon, setShowSocialIcon] = useState(false);
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="swiper-slide team-member-wrapper">
        <div className="image-with-social">
          <Image
            quality={100}
            width={342}
            height={393}
            src={image}
            alt={name}
            className="img-fluid"
          />
          <div className={`social-profiles ${showSocialIcon ? "open" : ""}`}>
            {socialLinks &&
              Array.isArray(socialLinks) &&
              [...socialLinks].map((data, index) => {
                return (
                  <div key={index} className="social-item">
                    <Link href={data.url}>
                      <i className={data.icon}></i>
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="member-information">
          <div className="member-name">
            <h3>{name}</h3>
            <h6>{title}</h6>
          </div>
          <div
            onClick={() => {
              setShowSocialIcon((e) => !e);
              setCount(count + 90);
            }}
            className="social-button"
            style={{ rotate: `${count}deg` }}
          >
            <div className="vertical-line"></div>
            <div
              id="line4-1"
              className={`horizontal-line ${showSocialIcon ? "hide" : ""}`}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMemberCard;
