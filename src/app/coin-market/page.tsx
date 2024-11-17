"use client";
import Link from 'next/link';

import { useState, useEffect } from "react";

export default function CoinMarket() {
  const API_KEY = "263fae9ce9e870c0b46bea767e9398d6";
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch(`https://api.coinlayer.com/api/live?access_key=${API_KEY}`)
      .then((response) => response.json())
      .then((jsonConverted) => {
        console.log("JSON Converted Data : ", jsonConverted);
        setData(jsonConverted);
      })
      .catch((error) => {
        console.log("error fetching data ", error);
      });
  }, []);

  return (
    <>
  <nav className="navbar bg-body-tertiary bg-blue-200">
      <div className="container-fluid item-center rounded-lg p-5 h">
        <Link className="navbar-brand text-3xl m-5  font-black  " href="#">
          
          Crypto Currency Rates
        </Link>
      </div>
    </nav>
      <div className="bg-blue-200 mt-4 rounded-lg text-center   text-2xl text-black  text-2xl p-8 m-9 ">
        <div className="grid bg-gray-200 flex grid-cols-1 rounded-sm gap-3-5 divide-y text-black">
          <div className="p-8" >BTC:&nbsp; &nbsp;{data?.rates?.BTC}</div>
          
          <div className="p-8" >BNB: &nbsp; &nbsp; {data?.rates?.BNB}</div>
          <div className="p-8">ETH:   &nbsp; &nbsp; &nbsp; {data?.rates?.ETH}</div>
          <div className="p-8"> USDT: &nbsp; &nbsp; {data?.rates?.USDT}</div>
          <div className="p-8"> DOGE: &nbsp; &nbsp; {data?.rates?.DOGE}</div>
        </div>
      </div>

      
    </>
  );
}