import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import slider1 from "./../../assets/imgs/slider1.png";
import slider1Mobile from "./../../assets/imgs/slide1_mobile.png";
import slider1Tablet from "./../../assets/imgs/slide1_tablet.png";
import slider1Laptop from "./../../assets/imgs/slide1_laptop.png";

import slider2 from "./../../assets/imgs/slider2.png";
import slider2Mobile from "./../../assets/imgs/slider2_mobile.png";
import slider2Tablet from "./../../assets/imgs/slider2_tablet.png";
import slider2Laptop from "./../../assets/imgs/slider2_laptop.png";

import slider3 from "./../../assets/imgs/slider3.png";
import slider3Mobile from "./../../assets/imgs/slider3_mobile.png";
import slider3Tablet from "./../../assets/imgs/slider3_tablet.png";
import slider3Laptop from "./../../assets/imgs/slider3_laptop.png";

import slider4 from "./../../assets/imgs/slider4.png";
import slider4Mobile from "./../../assets/imgs/slider4_mobile.png";
import slider4Tablet from "./../../assets/imgs/slider4_tablet.png";
import slider4Laptop from "./../../assets/imgs/slider4_laptop.png";

import cross from "./../../assets/imgs/cross.png";
import Container from "../Container";

export default function Slider() {
  const swiperRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const paginationRef = useRef();
  return (
    <Swiper
      loop
      style={{ zIndex: 1 }}
      direction="horizontal"
      slidesPerView={1}
      ref={swiperRef}
      onSlideChange={(e) => {
        const currentClassname =
          "z-20 relative mb-10 lg:mb-24 md:mb-14 flex justify-between md:px-24 px-2 mx-auto";
        setActiveIndex(e.realIndex);
        if (e.realIndex === 0)
          paginationRef.current.className =
            currentClassname + " text-springGreen";
        else if (e.realIndex === 1)
          paginationRef.current.className =
            currentClassname + " text-vividPink";
        else if (e.realIndex === 2)
          paginationRef.current.className =
            currentClassname + " text-delayedYellow";
        else if (e.realIndex === 3)
          paginationRef.current.className =
            currentClassname + " text-electricPurple";
      }}
    >
      <SwiperSlide>
        <picture className="mx-auto top-0 -z-10">
          <source media="(max-width: 360px)" srcset={slider1Mobile} />
          <source media="(max-width: 768px)" srcset={slider1Tablet} />
          <source media="(max-width: 1440px)" srcset={slider1} />
          <img
            src={slider1Laptop}
            alt="slider1"
            className="min-h-[800px] w-full sm:min-h-[1024px] md:min-h-[790px] 2xl:min-h-[990px]"
          />
        </picture>
        <div className="absolute top-0 h-full">
          <Container>
            <div className="max-w-extraLg mx-auto flex items-center  h-full absolute top-0">
              <h1 className="slider-title md:ml-24 ml-2">
                Immigration <br /> Tailored <br /> to You
              </h1>
            </div>
          </Container>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <picture className="mx-auto w-full top-0 -z-10">
          <source media="(max-width: 360px)" srcset={slider2Mobile} />
          <source media="(max-width: 768px)" srcset={slider2Tablet} />
          <source media="(max-width: 1440px)" srcset={slider2} />
          <img
            src={slider2Laptop}
            alt="slider2"
            className="min-h-[800px] sm:min-h-[1024px] md:min-h-[790px] 2xl:min-h-[990px]"
          />
        </picture>
        <div className="absolute top-0 h-full w-full">
          <Container className={"h-full"}>
            <div className="max-w-extraLg mx-auto h-full w-full flex justify-end items-center">
              <h1 className="slider-title md:mr-24 mr-5">
                Immigrating <br /> is a <br />
                <span className="relative inline-block mr-4">
                  scary
                  <img className="absolute top-8" src={cross} alt="" />{" "}
                </span>
                <span className="text-vividPink inline-block"> luxury</span>{" "}
                <br /> experience
              </h1>
            </div>
          </Container>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <picture className="mx-auto w-full top-0 -z-10">
          <source media="(max-width: 360px)" srcset={slider3Mobile} />
          <source media="(max-width: 768px)" srcset={slider3Tablet} />
          <source media="(max-width: 1440px)" srcset={slider3} />
          <img
            src={slider3Laptop}
            alt="slider3"
            className="min-h-[800px] sm:min-h-[1024px] md:min-h-[790px] 2xl:min-h-[990px]"
          />
        </picture>
        <div className="absolute top-0 h-full w-full">
          <Container className={"h-full w-full"}>
            <div className="flex items-center justify-center w-full h-full">
              <h1 className="slider-title ml-7 lg:ml-0">
                We specialize in new beginnings
              </h1>
            </div>
          </Container>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <picture className="mx-auto w-full top-0 -z-10">
          <source media="(max-width: 360px)" srcset={slider4Mobile} />
          <source media="(max-width: 768px)" srcset={slider4Tablet} />
          <source media="(max-width: 1440px)" srcset={slider4} />
          <img
            src={slider4Laptop}
            alt="slider4"
            className="min-h-[800px] sm:min-h-[1024px] md:min-h-[790px] 2xl:min-h-[990px]"
          />
        </picture>
        <div className="absolute top-0 w-full h-full">
          <Container className={"w-full h-full"}>
            <div className="max-w-extraLg mx-auto flex h-full items-center">
              <h1 className="slider-title lg:ml-24 ml-7">
                A Red Carpet Experience for <br className="hidden lg:block" />{" "}
                Anyone Seeking <br className="hidden lg:block" />
                Residence in Europe
              </h1>
            </div>
          </Container>
        </div>
      </SwiperSlide>
      <div className="absolute bottom-0 w-full">
        <div
          className={
            "z-20 relative mb-10 lg:mb-24 md:mb-14 flex justify-between md:px-24 px-2 max-w-extraLg mx-auto text-springGreen"
          }
          ref={paginationRef}
        >
          <div
            onClick={() => {
              swiperRef.current.swiper.slidePrev();
            }}
            className="cursor-pointer"
          >
            <svg
              width="45"
              height="34"
              viewBox="0 0 45 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.2825 17.4537L35.5976 31.2328L35.5976 3.6746L10.2825 17.4537Z"
                fill="currentColor"
              />
              <path
                d="M24.7482 4.19655L1.26207 17.4536L24.7482 30.7107L24.7482 4.19655Z"
                stroke="currentColor"
                stroke-width="1.20548"
              />
            </svg>
          </div>
          <div className="items-center gap-8 hidden md:flex">
            {[0, 1, 2, 3].map((pagination) => {
              return (
                <div
                  onClick={(e) => {
                    swiperRef.current.swiper.slideTo(pagination);
                  }}
                >
                  {pagination !== activeIndex ? (
                    <svg
                      width="70"
                      height="16"
                      viewBox="0 0 70 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="-1"
                        y="1"
                        width="68"
                        height="14"
                        transform="matrix(-1 0 0 1 68 0)"
                        stroke="currentColor"
                        stroke-width="2"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="70"
                      height="17"
                      viewBox="0 0 70 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="-1"
                        y="1"
                        width="68"
                        height="13.9359"
                        transform="matrix(-1 0 0 1 68.0001 0.283447)"
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-width="2"
                      />
                    </svg>
                  )}
                </div>
              );
            })}
          </div>
          <div
            onClick={() => {
              swiperRef.current.swiper.slideNext();
            }}
            className="cursor-pointer"
          >
            <svg
              width="45"
              height="34"
              viewBox="0 0 45 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.3235 4.19655L42.8097 17.4536L19.3235 30.7107L19.3235 4.19655Z"
                stroke="currentColor"
                stroke-width="1.20548"
              />
              <path
                d="M33.7893 17.4537L8.47422 31.2328L8.47422 3.6746L33.7893 17.4537Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </div>
    </Swiper>
  );
}
