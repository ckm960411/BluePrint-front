import React from "react";
import Image from "next/image";
import { AiOutlineLaptop } from "react-icons/ai";
import techDashboardImage from "../../../public/img/tech-dashboard.jpg";

export default function TechPage() {
  return (
    <section>
      <section className="relative bg-main">
        <Image
          src={techDashboardImage.src}
          alt="study dashboard"
          width={1200}
          height={400}
          className="h-460px w-full object-cover opacity-70"
          priority
        />
        <div className="absolute bottom-48px left-1/2 mx-auto w-full max-w-screen-xl translate-x-[-50%] px-16px text-white">
          <h1 className="mt-8px flex items-center gap-8px text-24px font-medium">
            <span>{`KMin's Tech Story`}</span>
            <AiOutlineLaptop className="text-24px" />
          </h1>
          <p className="mt-24px text-48px">경민의 기술블로그</p>
        </div>
      </section>
      <section className="relative mx-auto max-w-screen-xl px-16px pt-24px">
        <hr className="my-24px" />
      </section>
    </section>
  );
}
