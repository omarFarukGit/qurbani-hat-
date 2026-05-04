"use client";
import { LocationArrow } from "@gravity-ui/icons";
import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiDownload } from "react-icons/bi";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GrDeliver } from "react-icons/gr";
import { motion } from "motion/react";

const AnimalCard = ({ animal }) => {
  console.log("animal", animal);
  return (
    <motion.Card
      initial={{ scale: 0.5 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      className="border rounded-xl bg-white/10 border border-white/20"
    >
      <div className="relative w-full aspect-square">
        <Image
          src={animal.image}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={animal.name}
          className="object-cover rounded-xl"
        />

        <Chip size="sm" className="absolute right-2 top-2">
          {animal.category}
        </Chip>
      </div>

      <div>
        <h2 className="font-medium">{animal.name}</h2>
      </div>

      <div className=" gap-5">
        <div className="flex items-center gap-2">
          <p>Price:{animal.price}</p>
        </div>

        <div className="flex items-center gap-2">
          <p>
            <FaLocationDot />
          </p>
          <p>{animal.location}</p>
        </div>
        <div className="flex items-center gap-2">
          <p>Age: {animal.age} Years</p>
        </div>
      </div>

      <Link href={`/all-animals/${animal.id}`}>
        {" "}
        <div className=" flex justify-between items-center border px-2 btn bg-green-400 text-white btn-ghost">
          <p>Animal Details</p>
          {/* <GrDeliver /> */}
        </div>
      </Link>
    </motion.Card>
  );
};

export default AnimalCard;
