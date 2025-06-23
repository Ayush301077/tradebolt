// import React, { useEffect } from 'react'
// import {
//     Table,
//     TableBody,
//     TableCaption,
//     TableCell,
//     TableHead,
//     TableHeader,
//     TableRow,
//   } from "@/components/ui/table";

// import { Avatar, AvatarImage } from "@/components/ui/avatar";
// import { useDispatch, useSelector } from 'react-redux';
// import { getUserAssets } from '@/State/Asset/Action';

// const Portfolio = () => {

//   const dispatch = useDispatch();
//   const {asset} = useSelector(store => store)

//   useEffect(() => {
//     dispatch(getUserAssets(localStorage.getItem("jwt")))
  
//   },[])

//   return (
//     <div className='p-5 lg:px-20'>
//         <h1 className='font-bold text-3xl pb-5'>Portfolio</h1>
//       <Table>
//       <TableHeader>
//         <TableRow>
//           <TableHead className="">Asset</TableHead>
//           <TableHead>Price</TableHead>
//           <TableHead>Unit</TableHead>
//           <TableHead>Change</TableHead>
//           <TableHead>Change%</TableHead>
//           <TableHead className="text-right">Value</TableHead>
//         </TableRow>
//       </TableHeader>
//       <TableBody>
//         {asset.userAssets. map((item, index) => <TableRow key={index}>
//           <TableCell className="font-medium flex items-center gap-2">
//             <Avatar className="-z-50">
//                 <AvatarImage src = {item.coin.image}/>
//             </Avatar>
//             <span>{item.coin.name}</span>
//           </TableCell>
//           <TableCell>{item.coin.symbol.toUpperCase()}</TableCell>
//           <TableCell>{item.quantity}</TableCell>
//           <TableCell>{item.coin.price_change_24h}</TableCell>
//           <TableCell>{item.coin.price_change_percentage_24h}</TableCell>
//           <TableCell className="text-right">{item.coin.total_volume}</TableCell>
//         </TableRow>)}
        
//       </TableBody>
//     </Table>
//     </div>
//   )
// }

// export default Portfolio;



import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useDispatch, useSelector } from "react-redux";
import { getUserAssets } from "@/State/Asset/Action";
import { calculateTotalInvested } from "@/Utils/calculateTotalInvested";

const Portfolio = () => {
  const dispatch = useDispatch();
  const { asset } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getUserAssets(localStorage.getItem("jwt")));
  }, [dispatch]);

  const totalInvested = calculateTotalInvested(asset.userAssets);

  return (
    <div className="p-5 lg:px-20">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-3xl pb-5">Portfolio</h1>
        <p className="font-bold text-xl">Total Invested: ${totalInvested.toFixed(2)}</p>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">Asset</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Unit</TableHead>
            <TableHead>Change</TableHead>
            <TableHead>Change%</TableHead>
            <TableHead className="text-right">Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {asset.userAssets.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium flex items-center gap-2">
                <Avatar className="-z-50">
                  <AvatarImage src={item.coin.image} />
                </Avatar>
                <span>{item.coin.name}</span>
              </TableCell>
              <TableCell>${item.coin.current_price}</TableCell>
              <TableCell>{item.quantity.toFixed(4)}</TableCell>
              <TableCell>{item.coin.price_change_24h.toFixed(4)}</TableCell>
              <TableCell>{item.coin.price_change_percentage_24h.toFixed(2)}</TableCell>
              <TableCell className="text-right">{item.coin.total_volume}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Portfolio;


// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getUserAssets } from "@/State/Asset/Action";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Avatar, AvatarImage } from "@/components/ui/avatar";

// const Portfolio = () => {
//   const dispatch = useDispatch();
//   const { asset } = useSelector((store) => store);

//   const [averagePurchasePrice, setAveragePurchasePrice] = useState(0);
//   const [profitLossPercentage, setProfitLossPercentage] = useState(0);

//   useEffect(() => {
//     dispatch(getUserAssets(localStorage.getItem("jwt")));

//     if (asset.userAssets.length > 0) {
//       const totalCost = asset.userAssets.reduce((item, total) => total + (item.quantity * item.buyPrice), 0);
//       const totalQuantity = asset.userAssets.reduce((item, total) => total + item.quantity, 0);
//       const avgPurchasePrice = totalCost / totalQuantity;
//       setAveragePurchasePrice(avgPurchasePrice);

//       const currentPrice = asset.userAssets[0]?.coin.currentPrice || 0;
//       const profitLossPercent = ((currentPrice - avgPurchasePrice) / avgPurchasePrice) * 100;
//       setProfitLossPercentage(profitLossPercent);
//     }
//   }, [asset.userAssets]);

//   return (
//     <div className="p-5 lg:px-20">
//       <h1 className="font-bold text-3xl pb-5">Portfolio</h1>
//       <Table>
//         <TableHeader>
//           <TableRow>
//             <TableHead className="">Asset</TableHead>
//             <TableHead>Price</TableHead>
//             <TableHead>Unit</TableHead>
//             <TableHead>Avg. Cost Price</TableHead>
//             <TableHead>Profit/Loss %</TableHead>
//             <TableHead className="text-right">Value</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {asset.userAssets.map((item, index) => (
//             <TableRow key={index}>
//               <TableCell className="font-medium flex items-center gap-2">
//                 <Avatar className="-z-50">
//                   <AvatarImage src={item.coin.image} />
//                 </Avatar>
//                 <span>{item.coin.name}</span>
//               </TableCell>
//               <TableCell>{item.coin.current_price.usd}</TableCell>
//               <TableCell>{item.quantity}</TableCell>
//               <TableCell>{averagePurchasePrice.toFixed(2)}</TableCell>
//               <TableCell>{profitLossPercentage.toFixed(2)}%</TableCell>
//               <TableCell className="text-right">{item.coin.total_volume}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// };

// export default Portfolio;
