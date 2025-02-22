import React from 'react'
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

const Portfolio = () => {
  return (
    <div className='p-5 lg:px-20'>
        <h1 className='font-bold text-3xl pb-5'>Portfolio</h1>
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
        {[1,1,1,1,1,1,1,1,1,1]. map((item, index) => <TableRow key={index}>
          <TableCell className="font-medium flex items-center gap-2">
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
    </div>
  )
}

export default Portfolio
