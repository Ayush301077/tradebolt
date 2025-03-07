// import React, { useEffect, useState } from "react";
// import AssetTable from "./AssetTable";
// import StockChart from "./StockChart";
// import { Avatar, AvatarImage } from "@/components/ui/avatar";
// import { DotIcon } from "@radix-ui/react-icons";
// import { useDispatch, useSelector } from "react-redux";
// import { getCoinList, getTop50CoinList } from "@/State/Coin/Action";
// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination";

// const Home = () => {
//   const [category, setCategory] = useState("all");
//   const [currentPage, setCurrentPage] = useState(1);
//   const dispatch = useDispatch();
//   const { coin } = useSelector((store) => store);

//   const handleCategory = (value) => {
//     setCategory(value);
//   };

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//     dispatch(getCoinList(page));
//   };

//   useEffect(() => {
//     dispatch(getTop50CoinList());
//   }, [category, dispatch]);

//   useEffect(() => {
//     dispatch(getCoinList(currentPage));
//   }, [currentPage, dispatch]);

//   return (
//     <div className="relative">
//       <div className="lg:flex">
//         <div className="lg:w-[50%] lg:border-r">
//           <div className="p-3 flex items-center gap-4">
//             <button
//               onClick={() => handleCategory("all")}
//               // className={`rounded-full  ${category === "all" ? "bg-blue-600" : ""}`}
//               className={`px-4 py-2 rounded-md ${category === "all" ? "bg-blue-600 text-white" : "bg-transparent text-gray-300"}`}

//             >
//               All
//             </button>
//             <button
//               onClick={() => handleCategory("top50")}
//               // className={`rounded-full ${category === "top50" ? "bg-blue-600" : ""}`}
//               className={`px-4 py-2 rounded-md ${category === "top50" ? "bg-blue-600 text-white" : "bg-transparent text-gray-300"}`}
//             >
//               Top 50
//             </button>
//             {/* <button
//               onClick={() => handleCategory("topGainers")}
//               // className={`rounded-full ${category === "topGainers" ? "bg-blue-600" : ""}`}
//               className={`px-4 py-2 rounded-md ${category === "topGainers" ? "bg-blue-600 text-white" : "bg-transparent text-gray-300"}`}

//             >
//               Top Gainers
//             </button>
//             <button
//               onClick={() => handleCategory("topLosers")}
//               // className={`rounded-full ${category === "topLosers" ? "bg-blue-600" : ""}`}
//               className={`px-4 py-2 rounded-md ${category === "topLosers" ? "bg-blue-600 text-white" : "bg-transparent text-gray-300"}`}
//             >
//               Top Losers
//             </button> */}
//           </div>
//           <AssetTable
//             coin={category === "all" ? coin.coinList : coin.top50}
//             category={category}
//           />
//           <div>
//             <Pagination>
//               <PaginationContent>
//                 <PaginationItem>
//                   <PaginationPrevious
//                     href="#"
//                     onClick={() => handlePageChange(currentPage - 1)}
//                     disabled={currentPage === 1}
//                   />
//                 </PaginationItem>
//                 {[...Array(5)].map((_, index) => (
//                   <PaginationItem key={index}>
//                     <PaginationLink
//                       href="#"
//                       onClick={() => handlePageChange(index + 1)}
//                       isActive={currentPage === index + 1}
//                     >
//                       {index + 1}
//                     </PaginationLink>
//                   </PaginationItem>
//                 ))}
//                 <PaginationItem>
//                   <PaginationEllipsis />
//                 </PaginationItem>
//                 <PaginationItem>
//                   <PaginationNext
//                     href="#"
//                     onClick={() => handlePageChange(currentPage + 1)}
//                   />
//                 </PaginationItem>
//               </PaginationContent>
//             </Pagination>
//           </div>
//         </div>
//         <div className="hidden lg:block lg:w-[50%] p-5">
//           <StockChart coinId={"bitcoin"} />
//           <div className="flex gap-5 items-center">
//             <div>
//               <Avatar>
//                 <AvatarImage src="https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400i" />
//               </Avatar>
//             </div>
//             <div>
//               <div className="flex items-center gap-2">
//                 <p>BTC</p>
//                 <DotIcon className="text-gray-400" />
//                 <p className="text-gray-400">Bitcoin</p>
//               </div>
//               <div className="flex items-end gap-2">
//                 <p className="text-xl font-bold">5464</p>
//                 <p className="text-red-600">
//                   <span>-1319049822</span>
//                   <span>(-0.29803%)</span>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useState } from "react";
import AssetTable from "./AssetTable";
import StockChart from "./StockChart";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { DotIcon } from "@radix-ui/react-icons";
import { useDispatch, useSelector } from "react-redux";
import { getCoinList, getTop50CoinList } from "@/State/Coin/Action";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
const Home = () => {
  const [category, setCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const { coin } = useSelector((store) => store);

  const handleCategory = (value) => {
    setCategory(value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    dispatch(getCoinList(page));
  };

  useEffect(() => {
    if (category === "top50") {
      dispatch(getTop50CoinList());
    } else {
      dispatch(getCoinList(currentPage));
    }
  }, [category, currentPage, dispatch]);

  return (
    <div className="relative">
      <div className="lg:flex">
        <div className="lg:w-[50%] lg:border-r">
          <div className="p-3 flex items-center gap-4">
            <button
              onClick={() => handleCategory("all")}
              className={`px-4 py-2 rounded-md ${category === "all" ? "bg-blue-600 text-white" : "bg-transparent text-gray-300"}`}
            >
              All
            </button>
            <button
              onClick={() => handleCategory("top50")}
              className={`px-4 py-2 rounded-md ${category === "top50" ? "bg-blue-600 text-white" : "bg-transparent text-gray-300"}`}
            >
              Top 50
            </button>
          </div>
          <AssetTable
            coin={category === "all" ? coin.coinList : coin.top50}
            category={category}
          />
          {category === "all" && (
            <div>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      href="#"
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                    />
                  </PaginationItem>
                  {[...Array(5)].map((_, index) => (
                    <PaginationItem key={index}>
                      <PaginationLink
                        href="#"
                        onClick={() => handlePageChange(index + 1)}
                        isActive={currentPage === index + 1}
                      >
                        {index + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext
                      href="#"
                      onClick={() => handlePageChange(currentPage + 1)}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
        <div className="hidden lg:block lg:w-[50%] p-5">
          <StockChart coinId={"bitcoin"} />
          <div className="flex gap-5 items-center">
            <div>
              <Avatar>
                <AvatarImage src="https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400i" />
              </Avatar>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <p>BTC</p>
                <DotIcon className="text-gray-400" />
                <p className="text-gray-400">Bitcoin</p>
              </div>
              <div className="flex items-end gap-2">
                <p className="text-xl font-bold">5464</p>
                <p className="text-red-600">
                  <span>-1319049822</span>
                  <span>(-0.29803%)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
