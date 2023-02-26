import React from "react";
import Navbar from "../Navbar/Navbar";
import { data } from "./FaqData";
import answerIcon from "../../assets/imgs/answerIcon.png";
import yellowArrow from "../../assets/imgs/yellowArrow.png";
import greenArrow from "../../assets/imgs/greenArrow.png";
import questionIcon from "../../assets/imgs/questionIcon.png";

const Faq = () => {
  return (
    <div className="bg-vividPink font-ptSansNarrow  pb-16  ">
      <Navbar />
      <div className="pt-20">{data[0].map((item, index) => {
        return (
          <div key={index}>
            <div className="flex gap-1 max-w-[948px] mx-auto pt-8 pb-4">
              <div className="flex gap-1">
                <img src={questionIcon} alt="question" />
                <h3 className=" text-springGreen font-anton text-3xl  ">
                  Question
                </h3>
                <img src={greenArrow} alt="arrow" />
              </div>

              <p className="text-springGreen text-3xl">{item.question}</p>
            </div>
            <div className="flex gap-1 max-w-[890px] mx-auto">
              <div className="flex gap-1 mx-w-[120px] h-min pl-1">
                <img className="max-w-[25px] w-full" src={answerIcon} alt="" />
                <h4 className="text-delayedYellow text-2xl font-anton ">
                  Answer
                </h4>
                <img src={yellowArrow} alt="" />
              </div>
              <p className="text-delayedYellow text-justify max-w-[770px] text-xl">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
      {data[1].map((item, index) => {
        return (
          <div key={index}>
            <div className="flex gap-1 max-w-[977px] text-left mx-auto pt-8 pb-4">
              <div className="flex gap-1">
                <img src={questionIcon} alt="question" />
                <h3 className=" text-springGreen font-anton text-3xl  ">
                  Question
                </h3>
                <img src={greenArrow} alt="arrow" />
              </div>
              <p className="text-springGreen text-3xl">{item.question}</p>
            </div>
            <div className="flex gap-1 max-w-[990px] mx-auto">
              <div className="flex gap-1 mx-w-[120px] h-min pl-10">
                <img src={answerIcon} alt="" />
                <h4 className="text-delayedYellow text-2xl font-anton ">
                  Answer
                </h4>
                <img src={yellowArrow} alt="" />
              </div>
              <p className="text-delayedYellow text-justify max-w-[799px] text-xl">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}</div>
    </div>
  );
};

export default Faq;
