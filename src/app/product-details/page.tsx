import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <div className=" w-full min-h-screen lg:p-20 p-10 flex flex-col justify-around gap-6 sm:gap-16">
      <div className="intro flex items-center">
        <h1 className="">
          Account / Gaming /{" "}
          <span className="font-bold">Havic HV G-92 Gamepad</span>
        </h1>
      </div>
      <div className="first w-full flex items-center justify-center">
        <div className="images hidden w-[60%] lg:flex gap-4">
          <div className="first   flex flex-col gap-4">
            <Image src={"/Frame 895.png"} alt="" width={170} height={138} />
            <Image src={"/Frame 895.png"} alt="" width={170} height={138} />
            <Image src={"/Frame 895.png"} alt="" width={170} height={138} />
            <Image src={"/Frame 895.png"} alt="" width={170} height={138} />
          </div>
          <div className="sec">
            <Image src={"/Frame 894.png"} alt="" width={500} height={600} />
          </div>
        </div>
        <div className="images lg:w-[40%]">
          <Card className=" w-[400px] h-[600px]">
            <CardHeader>
              <CardTitle>Havic HV G-92 Gamepad</CardTitle>
              <CardDescription>
                <Image src={"/Frame 922.png"} alt="" width={290} height={21} />
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className=" font-bold">$192</p>
              <p>
                PlayStation 5 Controller Skin High Quality vinyl with air
                channel adhessive for easy bubble free install & mess free
                removal Pressure Sensitive.
              </p>
              <div className=" w-full border-2 border-[#b3aeae] mt-5"></div>
              <Image
                src={"/Frame 918.png"}
                alt=""
                width={155}
                height={20}
                className=" mt-5"
              />
              <Image
                src={"/Frame 917.png"}
                alt=""
                width={296}
                height={32}
                className=" mt-5"
              />
              <div className="buttons w-full flex items-center gap-4">
                <Image
                  src={"/Frame 926.png"}
                  alt=""
                  width={159}
                  height={44}
                  className=" mt-5"
                />
                <Button className="bg-[#db4543] px-8 hover:bg-[#dc5d5b] mt-5">
                  Buy Now
                </Button>
                <Image
                  src={"/Frame 904.png"}
                  alt=""
                  width={40}
                  height={40}
                  className=" mt-5"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Image
                src={"/Frame 911.png"}
                alt=""
                width={400}
                height={180}
                className=" mt-5"
              />
            </CardFooter>
          </Card>
        </div>
      </div>
      <section className=" w-full flex flex-col gap-10 ">
        <div className="intro">
          <div className="first flex items-center gap-4">
            <Image
              src={"/Category Rectangle.png"}
              width={20}
              height={30}
              alt="rec"
            />
            <h1 className=" text-[#db4543] font-bold">Related Item</h1>
          </div>
        </div>
        <div className="products grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          <Image src={"/Cart.png"} alt="" width={270} height={350} />
          <Image src={"/Cart (1).png"} alt="" width={270} height={350} />
          <Image src={"/Cart (2).png"} alt="" width={270} height={350} />
          <Image src={"/Cart (3).png"} alt="" width={270} height={350} />
        </div>
      </section>
    </div>
  );
}
