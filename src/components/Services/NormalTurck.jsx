import React, { useState } from "react";
import arrowDown from "../../assets/icons/ArrowDown.svg";

const NormalTruck = () => {
  const [textIsOpen, setTextIsOpen] = useState(false);

  return (
    <div className=" bg-vividPink py-[66px] lg:px-0 md:px-[27px] px-[14px]">
      <div className="max-w-[970px] mx-auto flex lg:gap-14 md:gap-10 gap-7 md:flex-row flex-col items-center text-center">
        <h1 className=" text-delayedYellow  max-w-[630px] text-justify font-anton align-middle md:text-[30px] text-title28   ">
          Our normal track option offers the same end results while utilizing a
          slightly different path{textIsOpen ? "." : ""}
        </h1>
        <div>
          <img
            src={arrowDown}
            alt="arrowDown"
            className={
              "cursor-pointer duration-300 ml-6 " +
              (textIsOpen ? "-rotate-180" : "")
            }
            onClick={() => setTextIsOpen(!textIsOpen)}
          />
        </div>
      </div>
      <ul
        className={
          "servicesText flex-col flex text-springGreen gap-[30px] " +
          (!textIsOpen ? "hidden duration-500 ease-linear " : "flex pt-7")
        }
      >
        <li>
          The process begins the same way as the fast track option– you will
          meet with our team of lawyers (either virtually or at one of our
          locations) to determine the best business plan based on your
          educational background and work experience. Control of the company
          will be in your hands, so we will still need you to generate five
          potential names for your company.
        </li>
        <li>
          Once business plans are decided upon, your company will be registered,
          and you will be appointed as the Commercial Director, General Manager,
          or Principal Consultant. Congratulations–you’ve still achieved boss
          status!
        </li>
        <li>
          Our head of Legal Group Affairs will prepare all official documents
          well in advance of your departure and send them to the Silk Route
          branch closest to you. You will need to visit that office to sign your
          paperwork.
        </li>
        <li>
          Once all documents have been finalized, a Silk Route Staff member will
          make an appointment at the closest Latvian embassy for the earliest
          possible date.
        </li>
        <li>
          When your date arrives, you will be accompanied by a Silk Route staff
          member to the embassy where your appointment will be held. Here you
          will submit your final documents.
        </li>
        <li>
          While you wait for your appointment date, you will be thoroughly
          educated and prepared by Silk Route trainers to answer any potential
          questions that might be asked during your appointment at the embassy.
          Take a deep breath; we’ll make sure you walk in feeling confident and
          at ease, and don’t forget, we’re coming with you! You will never face
          a single step of this process alone.
        </li>
        <li>
          After your appointment, the embassy will send your documents to Riga,
          Latvia for evaluation. This process can take up to fifteen days. Sit
          back and relax–all good things take time.
        </li>
        <li>
          Once The Office of Citizenship and Migration Affairs receives your
          documents, they will review them for approval. A decision will be made
          within twelve working days.
        </li>
        <li>
          Once approved, a Silk Route staff member will make another appointment
          at the nearest Latvian embassy. The purpose of this appointment is to
          obtain a Schengen Visa that permits you to travel to Riga, Latvia to
          complete the final steps of the process in person. Again, this is all
          taken care of by Silk Route staff. You just keep sitting back and
          relaxing.
        </li>
        <li>
          Once the visa has been successfully issued, you will travel to Riga,
          Latvia to officially apply for your residency permit.
        </li>
        <li>
          When you arrive at the airport in Riga, you will be greeted by a Silk
          Route staff member and taken to a 5 star hotel (can you tell how
          important your comfort is to us?)
        </li>
        <li>
          The following day, one of our Guest Services team members will
          personally escort you to The Office of Citizenship and Migration
          Affairs to have your final photograph and biometrics taken.
        </li>
        <li>
          By day four of your stay in Riga, you will be able to collect your
          official ID from The Office of Citizenship and Migration Affairs.
        </li>
        <li>
          Congratulations–you are now a resident of the EU! Time to give
          yourself a deserving pat on the back. Immigration is no small feat.
          What’s that famous quote by Vincent Van Gogh? “What would life be if
          we had no courage to attempt anything?”
        </li>
      </ul>
    </div>
  );
};

export default NormalTruck;
