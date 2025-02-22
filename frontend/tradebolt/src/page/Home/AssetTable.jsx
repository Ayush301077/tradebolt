import React from "react";
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
import { useNavigate } from "react-router-dom";

const AssetTable = () => {

  const navigate = useNavigate()
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Coin</TableHead>
          <TableHead>Symbol</TableHead>
          <TableHead>Volume</TableHead>
          <TableHead>Market Cap</TableHead>
          <TableHead>24h</TableHead>
          <TableHead className="text-right">Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[1,1,1,1,1,1,1,1,1,1]. map((item, index) => <TableRow key={index}>
          <TableCell onClick={()=>navigate('/market/bitcoin')} className="font-medium flex items-center gap-2">
            <Avatar className="-z-50">
                <AvatarImage src = "https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400i"/>
            </Avatar>
            <span>Bitcoin</span>
          </TableCell>
          <TableCell>BTC</TableCell>
          <TableCell>90248545</TableCell>
          <TableCell>1332458481</TableCell>
          <TableCell>-0.20009</TableCell>
          <TableCell className="text-right">$69249</TableCell>
        </TableRow>)}
        
      </TableBody>
    </Table>
  );
};

export default AssetTable;
