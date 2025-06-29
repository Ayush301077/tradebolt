import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersForUser } from "@/State/Order/Action";
import { calculateProfit } from "@/Utils/calculateProfit";
const Activity = () => {

  const dispatch = useDispatch();
  const {order} = useSelector(store => store);

  useEffect(() => {
    dispatch(getAllOrdersForUser({jwt :localStorage.getItem("jwt")}));
    console.log(order)
  },[])

  
  return (
    <div className="p-5 lg:px-20">
      <h1 className="font-bold text-3xl pb-5">Activity</h1>
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="py-5">Date & Time</TableHead>
            <TableHead>Trading pair</TableHead>
            <TableHead>Buy Price</TableHead>
            <TableHead>Sell Price</TableHead>
            <TableHead>Order Type</TableHead>
            <TableHead>Profit/Loss</TableHead>
            <TableHead className="text-right">Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {order.orders.map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                <p>{item.timestamp ? new Date(item.timestamp).toLocaleDateString() : 'N/A'}</p>
                <p className="text-gray-400">{item.timestamp ? new Date(item.timestamp).toLocaleTimeString() : 'N/A'}</p>
              </TableCell>
              <TableCell className="font-medium flex items-center gap-2">
                <Avatar className="-z-50">
                  <AvatarImage src= {item.orderItem.coin.image} />
                </Avatar>
                <span>{item.orderItem.coin.name}</span>
              </TableCell>
              <TableCell>{item.orderItem.buyPrice}</TableCell>
              <TableCell>{item.orderItem.sellPrice}</TableCell>
              <TableCell>{item.orderType}</TableCell>
              <TableCell className="">{calculateProfit(item)}</TableCell>
              <TableCell className="text-right">{item.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Activity;
