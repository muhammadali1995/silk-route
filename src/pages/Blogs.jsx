import React from "react";
import { blogsData } from "../constants/BlogsData";

const Blogs = () => {
  return (
    <div>
      <div className="bg-black w-full h-24"></div>
      <div className=" bg-delayedYellow">
        <h1 className=" capitalize font-anton lg:pt-[105px] pt-[66px] lg:px-0 md:px-[55px] px-[14px] md:text-5xl text-[40px] text-electricPurple text-center ">
          10 Fascinating Facts About Latvia
        </h1>
        <p className="text-electricPurple lg:pt-14 pt-[30px] blogsText ">
          While most people have heard of Latvia, they are unaware of all the
          things that make the country a true treasure. Situated along the
          beautiful Baltic Sea between Estonia and Lithuania, Latvia boasts
          immaculate coastlines, vast stretches of untouched wilderness, and
          charming cities known for great food, even greater people, and some of
          the best free internet connectivity in the world! Read on to discover
          ten fascinating facts about one of Europe’s hidden gems.
        </p>
        {blogsData.map(({ title, text }) => {
          return (
            <div>
              <h1 className="text-vividPink max-w-[970px] lg:px-0 md:px-[27px] px-[14px] mx-auto text-[30px] lg:pt-[60px] pt-[50px] font-anton text-justify pb-[30px]">{title}</h1>
              <p className="blogsText ">{text}</p>
            </div>
          );
        })}
        <p className="text-electricPurple lg:pt-[60px] pt-[40px] lg:pb-[100px] pb-[70px] blogsText ">
          Whether you’re a nature lover or a city dweller, a technology wiz or a
          history buff, a summer fanatic or a winter enthusiast, Latvia is a
          delightful country suited for all! Come witness the magic of this
          Baltic treasure.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
