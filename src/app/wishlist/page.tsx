import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function page() {
  return (
    <div className=' w-full min-h-screen p-20 flex flex-col gap-10'>
      <div className="intro flex items-center justify-between">
      <h1 className=' font-bold'>Wishlist(4)</h1>
      <Button variant={'outline'}>Move All To Bag</Button>
      </div>
      <div className="products grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-10 lg:gap-0 lg:grid-cols-4">
        <Image src={"/Cart With Flat Discount.png"} width={270} height={350} alt=''/>
        <Image src={"/Cart With Flat Discount (1).png"} width={270} height={350} alt=''/>
        <Image src={"/Cart With Flat Discount (2).png"} width={270} height={350} alt=''/>
        <Image src={"/Cart With Flat Discount (3).png"} width={270} height={350} alt=''/>
      </div>
      <div>
        <div className="second  w-full flex flex-col gap-16 mt-24">
        <div className="intro">
          <div className="first flex items-center gap-4">
            <Image
              src={"/Category Rectangle.png"}
              width={20}
              height={30}
              alt="rec"
            />
            <h1 className=" text-[#db4543] font-bold">Today's</h1>
          </div>
        </div>
        <div className="last grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grid-cols-4">
        <Image src={'/Cart (4).png'} width={270} height={350} alt=''/>
        <Image src={'/Cart (5).png'} width={270} height={350} alt=''/>
        <Image src={'/Cart With Flat Discount (2).png'} width={270} height={350} alt=''/>
        <Image src={'/Cart With Flat Discount (1).png'} width={270} height={350} alt=''/>
      </div>

        </div>
     
      
      
    </div>
    </div>
  )
}
