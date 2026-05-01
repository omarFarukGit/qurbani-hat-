import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import bannarImg from "@/assets/image.jpg";

const Banner = () => {
  return (
    <div className="hero  min-h-[60vh] bg-green-950/10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image
          src={bannarImg}
          className="max-w-sm rounded-lg shadow-2xl"
          width={400}
          height={300}
          alt="hero"
        />
        <div>
          <h1 className="text-5xl font-bold">QurBani</h1>
          <h2 className=" text-4xl">with Esay and Joy</h2>
          <h3 className=" text-2xl">NEAT AND CLEAN MEET AT YOUR DOORSTEP</h3>

          <p className="py-6 text-base">
            Book your Qurbani shere today enjoy a worry-free Eid
            Celebrite.sacrifice.Shere
          </p>
          <Link href={"/all-animals"}>
            <button className="btn btn-primary">Browse Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
