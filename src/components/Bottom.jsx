import { div } from "motion/react-client";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import { IoIosStarHalf } from "react-icons/io";

const Bottom = () => {
  return (
    <div>
      <div className=" max-w-7xl mx-auto p-5 rounded-lg my-5 bg-white text-black">
        <h1 className=" text-2xl font-bold text-blue-900">Trust Buyer</h1>
        <p>
          Always verify identity of the seller, cross-check contact details, and
          review animal images before booking. QurbaniHat encourages in-person
          final inspection before delivery confirmation.
        </p>
      </div>
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 container mx-auto">
        <div className=" max-w-7xl mx-auto p-5 rounded-lg my-5 bg-white text-black flex flex-col justify-center items-center">
          <h1 className=" text-2xl font-bold text-blue-900">Coustomer Reviw</h1>
          <p>
            <Image
              src={
                "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fthumbnails%2F040%2F285%2F222%2Fsmall_2x%2Fai-generated-a-happy-young-man-in-a-teal-hoodie-showing-thumbs-up-his-bright-smile-and-casual-style-exude-positivity-photo.jpeg&f=1&nofb=1&ipt=59fbcd34334a7bc3731812e6c31ba58b77e07bd8ac4b004c36b7cf19c3ebbec9"
              }
              width={70}
              height={70}
              alt="user_1"
              className=" rounded-full"
            />
            <p>Sinan</p>
            <div className=" flex gap-2 text-yellow-300">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <IoIosStarHalf className=" text-yellow-300" />
            </div>
          </p>
        </div>
        <div className=" max-w-7xl mx-auto p-5 rounded-lg my-5 bg-white text-black flex flex-col justify-center items-center">
          <h1 className=" text-2xl font-bold text-blue-900">Coustomer Reviw</h1>
          <p>
            <Image
              src={
                "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fthumbnails%2F040%2F285%2F205%2Fsmall_2x%2Fai-generated-a-young-man-smiling-broadly-wearing-a-light-blue-t-shirt-his-pose-exudes-confidence-and-approachability-photo.jpeg&f=1&nofb=1&ipt=14546af8728ceae0595d4b1c61b0030624fadcb509de440598dcb8d0b898044d"
              }
              width={70}
              height={70}
              alt="user_1"
              className=" rounded-full"
            />
            <p>Shakil</p>
            <div className=" flex gap-2 text-yellow-300">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <IoIosStarHalf className=" text-yellow-300" />
            </div>
          </p>
        </div>
        <div className=" max-w-7xl mx-auto p-5 rounded-lg my-5 bg-white text-black flex flex-col justify-center items-center">
          <h1 className=" text-2xl font-bold text-blue-900">Coustomer Reviw</h1>
          <p>
            <Image
              src={
                "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Ftelemarketing-agent-man-smile-call-center-conversation-advice-help-customer-service-male-person-happy-employee-278285737.jpg&f=1&nofb=1&ipt=68fcea0ae7a5822a2cb954f203ae680b5ffd6e55eece68b7b99a87e0a4ebe5a9"
              }
              width={70}
              height={70}
              alt="user_1"
              className=" rounded-full"
            />
            <p>Raju</p>
            <div className=" flex gap-2 text-yellow-300">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <IoIosStarHalf className=" text-yellow-300" />
            </div>
          </p>
        </div>
        <div className=" max-w-7xl mx-auto p-5 rounded-lg my-5 bg-white text-black flex flex-col justify-center items-center">
          <h1 className=" text-2xl font-bold text-blue-900">Coustomer Reviw</h1>
          <p>
            <Image
              src={
                "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fhappy-male-customer-service-operator-headset-talking-mobile-phone-office-break-happy-male-customer-service-operator-311779669.jpg&f=1&nofb=1&ipt=44e38ef17a70b320b55f086f578c850ce365f4a206dedc538c0059a90d0bf9f8"
              }
              width={70}
              height={70}
              alt="user_1"
              className=" rounded-full"
            />
            <p>Noyon</p>
            <div className=" flex gap-2 text-yellow-300">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <IoIosStarHalf className=" text-yellow-300" />
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
