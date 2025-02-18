import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import bitImage from "@/assets/bit.jpg";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { DragHandleHorizontalIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import React from "react";
import SideBar from "./SideBar";

const Navbar = () => {
  return (
    <div className="px-2 py-3 border-b z-50 bg-background bg-opacity-0 sticky top-0 left-0 right-0 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <Sheet>
          <SheetTrigger>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full h-11 w-11"
            >
              {/* <DragHandleHorizontalIcon style={{ width: "30px", height: "30px" }} /> */}
              <DragHandleHorizontalIcon className="h-7 w-7 scale-150" />

            </Button>
          </SheetTrigger>
          <SheetContent className="w-72 border-r-0 flex flex-col justify-center" side="left">
            <SheetHeader>
              <SheetTitle>
                <div className="text-3xl flex justify-center items-center gap-1">
                  <Avatar>
                    <AvatarImage src = "https://t3.ftcdn.net/jpg/01/36/20/40/360_F_136204027_JgHaab2r1wqenjQd6m1PNDJ6J9PM8tvH.jpg"/>
                  </Avatar>
                  <div>
                    <span className="font-bold text-blue-500">Trade</span>
                    <span className="font-bold">Bolt</span>
                  </div>
                </div>
              </SheetTitle>
              
            </SheetHeader>
            <SideBar/>
          </SheetContent>
        </Sheet>
        <p className="text-sm lg:text-base cursor-pointer"> TradeBolt</p>
        <div className="p-0 ml-9">
          <Button variant = "outline" className="flex items-center gap-3">
            <MagnifyingGlassIcon/>
            <span>Search</span>
          </Button>
        </div>
      </div>
      <div >
        <Avatar>
          <AvatarFallback>
            T
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
