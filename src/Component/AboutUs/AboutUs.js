"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const AboutUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section className="about-company-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-images-wrapper">
                <div className="image-1">
                  <Image
                    width={"419"}
                    height={"522"}
                    src="/image/about-page/about-section/1.png"
                    alt="Image 1"
                    className="img-fluid"
                    quality={100}
                  />
                </div>
                <div className="image-2">
                  <Image
                    width="269"
                    height="433"
                    src="/image/about-page/about-section/2.png"
                    alt="Image 2"
                    className="img-fluid"
                    quality={100}
                  />
                </div>
                <div className="promo-area">
                  <div className="promobox">
                    <Image
                      width={42}
                      height={42}
                      src="/image/about-page/about-section/icon.png"
                      alt="Icon"
                      className="img-fluid"
                      quality={100}
                    />
                    <h2>25</h2>
                    <h4>Years Experience</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-company-right">
                <div className="section-title">
                  <span>About Our Company</span>
                  <h2>
                    Online shopping includes both buying things online market
                  </h2>
                </div>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the our majority have suffered alteration in
                  some form, by injected humour, or randomised words which
                  don&apos;t look even slightly believable you are going to.
                </p>
                <div className="video-promo-content">
                  <div className="video-promo">
                    <Link
                      className="about-video-popup"
                      href="https://www.youtube.com/watch?v=y-xopqwEe3I"
                      onClick={(e) => {
                        e.preventDefault();
                        setOpen(true);
                      }}
                    >
                      <Image
                        width={142}
                        height={93}
                        src="/image/about-page/about-section/3.png"
                        alt="Video Promo"
                        className="img-fluid"
                        quality={100}
                      />
                      <div className="play-button">
                        <i className="fa-solid fa-play"></i>
                      </div>
                    </Link>
                  </div>
                  <div className="content">
                    <ul>
                      {[
                        "We are provide 100% best products",
                        "Trying to Satisfied customers",
                        "best provide services",
                      ].map((text, index) => {
                        return (
                          <li key={index}>
                            <div className="content-item">
                              <Image
                                src="/image/about-page/about-section/icon2.svg"
                                alt="icon"
                                width={14}
                                height={26}
                                style={{ width: "auto", height: "auto" }}
                                quality={100}
                              />
                              <span>{text}</span>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <div className="the-ceo">
                  <div className="ceo-image">
                    <Image
                     quality={100}
                      src="/image/about-page/about-section/4.png"
                      alt="CEO"
                      width={80}
                      height={80}
                      className="img-fluid"
                    />
                  </div>
                  <div className="ceo-info">
                    <div className="ceo-name">
                      <h3>Deniella Rhodes</h3>
                      <h6>CEO of Etoshi</h6>
                    </div>
                    <div className="ceo-sign">
                      <Image
                       quality={100}
                        src="/image/about-page/about-section/signature-1.png"
                        alt="signature"
                        width={142}
                        height={54}
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ModalVideo
          channel="youtube"
          youtube={{ mute: 0, autoplay: 0 }}
          isOpen={isOpen}
          videoId="y-xopqwEe3I?si=RcC_vk_7Gkz3DtJ4"
 
          onClose={() => setOpen(false)}
        />
      </section>
    </>
  );
};

export default AboutUs;
