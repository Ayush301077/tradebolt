// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import bitImage from "@/assets/bit.jpg";

// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import { DragHandleHorizontalIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
// import React from "react";
// import SideBar from "./SideBar";
// import { useSelector } from "react-redux";

// const Navbar = () => {

//   const {auth} = useSelector(store => store)

//   return (
//     <div className="px-2 py-3 border-b z-50 bg-background bg-opacity-0 sticky top-0 left-0 right-0 flex justify-between items-center">
//       <div className="flex items-center gap-3">
//         <Sheet>
//           <SheetTrigger asChild>
//             <Button
//               variant="ghost"
//               size="icon"
//               className="rounded-full h-11 w-11"
//             >
//               {/* <DragHandleHorizontalIcon style={{ width: "30px", height: "30px" }} /> */}
//               <DragHandleHorizontalIcon className="h-7 w-7 scale-150" />

//             </Button>
//           </SheetTrigger>
//           <SheetContent className="w-72 border-r-0 flex flex-col justify-center" side="left">
//             <SheetHeader>
//               <SheetTitle>
//                 <div className="text-3xl flex justify-center items-center gap-1">
//                   <Avatar>
//                     <AvatarImage src = "https://t3.ftcdn.net/jpg/01/36/20/40/360_F_136204027_JgHaab2r1wqenjQd6m1PNDJ6J9PM8tvH.jpg"/>
//                   </Avatar>
//                   <div>
//                     <span className="font-bold text-blue-500">Trade</span>
//                     <span className="font-bold">Bolt</span>
//                   </div>
//                 </div>
//               </SheetTitle>
              
//             </SheetHeader>
//             <SideBar/>
//           </SheetContent>
//         </Sheet>
//         <p className="text-sm lg:text-base cursor-pointer"> TradeBolt</p>
//         <div className="p-0 ml-9">
//           <Button variant = "outline" className="flex items-center gap-3">
//             <MagnifyingGlassIcon/>
//             <span>Search</span>
//           </Button>
//         </div>
//       </div>
//       <div >
//         <Avatar>
//           <AvatarFallback>
//             {auth.user?.fullName[0].toUpperCase()}
//           </AvatarFallback>
//         </Avatar>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
















import React, { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { DragHandleHorizontalIcon, MagnifyingGlassIcon, Cross2Icon } from "@radix-ui/react-icons";
import SideBar from "./SideBar";
import { useSelector, useDispatch } from "react-redux";
import { searchCoin } from "@/State/Coin/Action";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  const { auth, coin } = useSelector((store) => store);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchQuery.length > 0) {
      dispatch(searchCoin(searchQuery));
    } else {
      setSearchResults([]);
    }
  }, [searchQuery, dispatch]);

  useEffect(() => {
    if (coin.searchCoinList) {
      setSearchResults(coin.searchCoinList.coins || []);
    }
    console.log("Search Results:", searchResults);
  }, [coin.searchCoinList]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
  };

  const handleCoinClick = (coinId) => {
    navigate(`/market/${coinId}`);
    setSearchQuery("");
    setSearchResults([]);
  };

  return (
    <div className="px-2 py-3 border-b z-50 bg-background bg-opacity-0 sticky top-0 left-0 right-0 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full h-11 w-11"
            >
              <DragHandleHorizontalIcon className="h-7 w-7 scale-150" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-72 border-r-0 flex flex-col justify-center" side="left">
            <SheetHeader>
              <SheetTitle>
                <div className="text-3xl flex justify-center items-center gap-1">
                  <Avatar>
                    <AvatarImage src="https://t3.ftcdn.net/jpg/01/36/20/40/360_F_136204027_JgHaab2r1wqenjQd6m1PNDJ6J9PM8tvH.jpg" />
                  </Avatar>
                  <div>
                    <span className="font-bold text-blue-500">Trade</span>
                    <span className="font-bold">Bolt</span>
                  </div>
                </div>
              </SheetTitle>
            </SheetHeader>
            <SideBar />
          </SheetContent>
        </Sheet>
        <p className="text-sm lg:text-base cursor-pointer"> TradeBolt</p>
        <div className="p-0 ml-9 relative">
          <div className="flex items-center">
            <Input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="pr-10"
            />
            {searchQuery && (
              <Button variant="ghost" className="absolute right-2" onClick={handleClearSearch}>
                <Cross2Icon />
              </Button>
            )}
          </div>
            <ul className="absolute z-[100] bg-white border-2 border-red-500 rounded-md mt-1 w-full overflow-visible shadow-lg top-full">
              {searchResults.slice(0, 5).map((coin) => (
                <li
                  key={coin.id}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black"
                  onClick={() => handleCoinClick(coin.id)}
                >
                  {coin.name}
                </li>
              ))}
            </ul>
        </div>
      </div>
      <div>
        <Avatar>
          <AvatarFallback>
            {auth.user?.fullName[0].toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
