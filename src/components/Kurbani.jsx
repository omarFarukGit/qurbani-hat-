import Image from "next/image";
import Link from "next/link";
import React from "react";
import qubani from "@/assets/qurbani.jpg";
const Kurbani = () => {
  return (
    <div className=" container mx-auto mt-10">
      <h2 className=" text-3xl font-bold my-4 px-4">
        কুরবানির পশু সম্পর্কে যা জানা জরুরি
      </h2>
      <div className="  min-h-[60vh] bg-green-950/10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src={qubani}
            className="max-w-sm rounded-lg shadow-2xl"
            width={400}
            height={300}
            alt="hero"
          />
          <div className=" space-y-3">
            <h1 className="text-3xl ">
              যে পশুটি কুরবানি করা হবে, তার ওপর কুরবানিদাতার পূর্ণ মালিকানা
              থাকতে হবে। বন্ধকি পশু, ধার করা পশু বা পথে পাওয়া পশু দ্বারা কুরবানি
              করা যাবে না।{" "}
            </h1>
            <h2 className=" text-2xl">
              গৃহপালিত সব ধরনের পশু তথা- ছাগল, ভেড়া, দুম্বা, গরু, মহিষ এবং উট
              দিয়ে কুরবানি করা বৈধ। এসব গৃহপালিত পশু ছাড়া অন্যান্য পশু (যেমন-
              হরিণ, বন্যগরু ইত্যাদি) দিয়ে কুরবানি করা জায়েজ নয়। তেমনিভাবে
              হাঁস-মুরগি বা কোনো পাখি দিয়েও কুরবানি করা বৈধ নয়। (ফতোয়ায়ে কাজিখান
              : ৩/৩৪৮)
            </h2>
            <h3 className=" text-2xl">কুরবানির পশুর বয়স</h3>

            <p className="py-6 text-base">
              গরু ও মহিষ দুবছর এবং উট পাঁচ বছর পূর্ণ হলে তা দিয়ে কুরবানি করা
              বৈধ। ছাগল, দুম্বা ও ভেড়া এক বছর পূর্ণ হতে হবে। দুম্বা ও ভেড়া যদি
              এক বছর পূর্ণ না হয়, বরং বছরের বেশি অংশ অতিবাহিত হয় এবং দেখতে
              স্বাস্থ্যগতভাবে এক বছরের বাচ্চার মতো মনে হয়, তাহলে সেরূপ দুম্বা ও
              ভেড়া দিয়েও কুরবানি করা বৈধ।
            </p>
            <p className=" text-base">
              আবদুল্লাহ ইবনে ওমর (রা.) কুরবানি ও হজ-ওমরার পশুর ক্ষেত্রে উটের
              মাঝে পাঁচ বছর বয়স অতিক্রমকারী, গরু-মহিষের ক্ষেত্রে দু’বছর
              অতিক্রমকারী এবং বকরি ও ভেড়ার ক্ষেত্রে এক বছর অতিক্রমকারী পশুর কথা
              বলতেন। (মুয়াত্তায়ে মালেক : ৭৫৪)।
            </p>
            <p className=" text-base">
              রাসুলুল্লাহ (সা.) বলেন, ‘তোমরা মুসিন্নাহ ছাড়া জবাই করো না।
              (মুসিন্নাহ হলো- ৫ বছর বয়সী উট, ২ বছরের গরু ও ছাগলের ক্ষেত্রে ১
              বছর)। যদি সম্ভব না হয়, তাহলে ছয় মাস বয়সী ভেড়া বা দুম্বা।’ (মুসলিম
              : ১৯৬৩)।
            </p>
            <>
              <button className="btn btn-primary">Read more</button>
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kurbani;
