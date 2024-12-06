import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Input } from "@/components/ui/input";

export default function page() {
  return (
    <div className=" w-full min-h-screen p-20 flex flex-col justify-around gap-6 sm:gap-16">
      <div className="intro flex items-center">
        <h1 className="">
          Home / <span className="font-bold">Cart</span>
        </h1>
      </div>
      <div className="lists  w-full flex items-center justify-around font-bold gap-2 sm:gap-0">
        <ul className=" flex">
          <li>Product</li>
        </ul>
        <ul>
          <li>Price</li>
        </ul>
        <ul>
          <li>Quantity</li>
        </ul>
        <ul>
          <li>Subtotal</li>
        </ul>
      </div>
      <div className="first  flex flex-col w-full mb-10">
        <Image src={'/Cart Section.png'} width={1170} height={102} alt="" className=" lg:ml-[62px]"/>
        <Image src={'/Cart Section (1).png'} width={1170} height={102} alt="" className=" lg:ml-[62px]"/>
      </div>
      <div className="button hidden w-full lg:flex lg:items-center lg:justify-between px-32">
        <Button variant={'outline'} className=" font-bold px-12">Return To Bag</Button>
        <Button variant={'outline'} className=" font-bold px-8">Update Cart</Button>
      </div>
      <div className="price w-full flex flex-col gap-2 md:flex-row justify-around">
        <div className="input flex gap-2">
        <Input placeholder="Coupon Code"/>
        <Button className="bg-[#db4543] px-8 hover:bg-[#dc5d5b]">Apply Coupon</Button>
        </div>
        <div className="box">
          <Image src={'/Frame 800.png'} alt="" width={470} height={324}/>
        </div>
        
      </div>
    </div>
  );
}
