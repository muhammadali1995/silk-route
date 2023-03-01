import React from "react";
import { data } from "../constants/FaqData";

const Faq = () => {
  return (
    <div className="bg-vividPink font-ptSansNarrow  pt-[42px] pb-20 pr-10 ">
      <div className="pt-20">
        {data[0].map((item, index) => {
          return (
            <div
              key={index}
              className="max-w-[947px] mx-auto w-full flex flex-col justify-center lg:px-0 px-2"
            >
              <div className="flex gap-2 text-springGreen font-anton lg:text-center pt-10">
                <div className="flex gap-1 items-center ">
                  <span className=" lg:text-4xl text-3xl font-anton -mt-0.5">
                    &#10070;
                  </span>
                  <h3 className="lg:text-3xl text-2xl  ">Question &#10132;</h3>
                </div>
                <p className="font-ptSansNarrow lg:text-3xl text-2xl">
                  {item.question}
                </p>
              </div>
              <div className="flex lg:pl-[60px] pl-8 gap-1 justify-center text-center">
                <div className="flex  pt-[12px] gap-1 items-center justify-center mx-w-[120px] h-min">
                  <span className=" scale-125 text-delayedYellow  ">
                    &#9670;
                  </span>
                  <h4 className="text-delayedYellow text-2xl font-anton ">
                    Answer
                  </h4>
                  <span className="text-delayedYellow">&#10132;</span>
                </div>
                <p className="font-ptSansNarrow text-delayedYellow pt-[15px] text-justify max-w-[770px] lg:text-xl text-[18px]">
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
        {data[1].map((item, index) => {
          return (
            <div
              key={index}
              className="max-w-[977px] mx-auto w-full flex flex-col justify-center lastParagraph  lg:px-0  px-2"
            >
              <div className="flex lg:pl-[15px] gap-2 lg:text-center text-left  pt-10">
                <div className="flex gap-1">
                  <span className="text-springGreen lg:text-4xl text-3xl ">
                    &#10070;
                  </span>
                  <h3 className=" text-springGreen font-anton lg:text-3xl text-2xl ">
                    Question
                  </h3>
                  <span className="text-springGreen">&#10132;</span>
                </div>
                <p className="text-springGreen  lg:text-3xl text-2xl">
                  {item.question}
                </p>
              </div>
              <div className="flex lg:pl-[80px] pl-8 gap-1 ">
                <div className="flex pt-[12px] gap-1 mx-w-[120px] h-min ">
                  <span className=" scale-125 text-delayedYellow  ">
                    &#9670;
                  </span>
                  <h4 className="text-delayedYellow text-2xl font-anton ">
                    Answer
                  </h4>
                  <span className="text-delayedYellow">&#10132;</span>
                </div>
                <p className="text-delayedYellow  pt-[15px] text-justify  max-w-[799px] lg:text-xl text-[18px]">
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
