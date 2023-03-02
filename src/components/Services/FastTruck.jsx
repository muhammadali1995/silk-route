import React, { useState } from "react";
import arrowYellow from "../../assets/icons/ArrowUp.svg";

const FastTruck = () => {
  const [textIsOpen, setTextIsOpen] = useState(false);

  return (
    <div className=" bg-springGreen pt-16 pb-[74px] lg:px-0 md:px-[27px] px-[14px]">
      <div className="max-w-[970px]  mx-auto flex md:flex-row flex-col items-center lg:gap-10 md:gap-8 gap-7 text-center ">
        <h1 className=" text-vividPink font-anton md:text-[30px] pt-2 leading-10 text-title28 ">
          Our fast track option consists of the following criteria {textIsOpen?':':''}
        </h1>
        <div><img
          src={arrowYellow}
          alt="arrowDown"
          className={
            "cursor-pointer duration-300 ml-6 " +
            (textIsOpen ? "rotate-0" : "rotate-180")
          }
          onClick={() => setTextIsOpen(!textIsOpen)}
        /></div>
      </div>
      <ul className={"fastTruckText " + (!textIsOpen ? "hidden duration-500 ease-linear " : "flex")}>
        <li>
          You will begin the process by meeting with our skilled team of
          lawyers; this can be done virtually or at one of our offices in the
          Netherlands, Riga, or Delhi. Our lawyers will assist in the
          development of an appropriate business based on your work experience
          and educational background. Because we are committed to keeping the
          control of the company in your hands to the maximum extent possible,
          we ask that you generate a list of five potential company names. Time
          to get creative!
        </li>
        <li>
          Once business plans have been solidified and a name for the business
          has been chosen, your new company will be officially registered with
          you appointed as the Commercial Director, General Manager, or
          Principal Consultant. Congratulate yourself–you just became a boss!
        </li>
        <li>
          Official documents will be prepared well before your departure by our
          head of Group Legal Affairs. We will also ensure all necessary
          appointments are made, including an appointment with The Office of
          Citizenship and Migration Affairs to get your fingerprints and
          photograph.
        </li>
        <li>
          When you arrive in Riga to apply for your residency permit, you will
          receive that VIP treatment we described above (5 star hotels, luxury
          chauffeur services, etc.)
        </li>
        <li>
          Our Legal Team will either bring your final documents to your hotel
          for signing, or you can complete this process at the Silk Route office
          in Riga. Please note that all documents will be handled directly by
          our trusted lawyers to ensure perfect discretion and a seamless
          process. You are free to sit back and relax while we take care of all
          that pesky paperwork.
        </li>
        <li>
          Over the next 5 working days, your documents will be reviewed by
          relevant authorities, and a final decision will be made. Normally this
          process takes much longer than 5 days, but when you trust Silk Route
          to oversee your migration, we ensure all documentation is fast
          tracked–it’s one of the many ways we show our clients how much we
          appreciate them!
        </li>
        <li>
          Once approved, another member of our Guest Services Team will escort
          you to The Office of Citizenship and Migration Affairs for final
          photographs and biometrics. You will then be taken to a local medical
          facility for a mandatory screening.
        </li>
        <li>
          By the twelfth day, your official ID will be ready for pick up at The
          Office of Citizenship and Migration Affairs.
        </li>
        <li>
          Queue the party music because you’re now officially a resident of the
          EU! Congratulate yourself for the new chapter you’ve just begun. Time
          to raise a toast to the beauty and excitement of new beginnings.
          Cheers!
        </li>
      </ul>
    </div>
  );
};

export default FastTruck;
