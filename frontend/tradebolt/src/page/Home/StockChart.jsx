import { Button } from '@/components/ui/button';
import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts';

const timeSeries = [
    {
        keywowrd: "DIGITAL_CURRENCY_DAILY",
        key:"Time Series (Daily)",
        lable: "1 Day",
        value: 1
    },
    {
        keywowrd: "DIGITAL_CURRENCY_WEEKLY",
        key:"Weekly Time Series",
        lable: "1 Week",
        value: 7
    },
    {
        keywowrd: "DIGITAL_CURRENCY_MONTHLY",
        key:"Monthly Time Series",
        lable: "1 Month",
        value: 30
    },
]

const StockChart = () => {
    const [activeLable, setActiveLable] = useState("1 Day")
    const series = [
        {
            data:[
                [1737345820445, 101817.435088032],
                [1737349432180, 102058.754042519],
                [1737353297577, 102455.241370781],
                [1737356653192, 107294.609811954],
                [1737360261028, 107127.070484122],
                [1737363823103, 108228.267625286],
                [1737367575411, 108013.550269788],
                [1737370815374, 108041.04174417],
                [1737374621215, 108161.995678573],
                [1737378227784, 106822.735098734],
                [1737381830561, 107813.348712761],
                [1737385431077, 107706.01106354],
                [1737389025691, 104908.165625595],
                [1737392629066, 106427.964058656],
                [1737396233254, 102864.583533486],
                [1737399792889, 104072.564265737],
                [1737403416568, 103686.829919662],
                [1737407034187, 103497.425299168],
                [1737410637834, 102377.841020666],
                [1737414230997, 103446.738443145],
                [1737417839455, 102094.728839375],
                [1737421431394, 101063.53964637],
                [1737425312915, 101243.913756317],
                [1737428606032, 102447.685212514],
                [1737432218795, 102966.858529558],
                [1737436102644, 101978.342949176],
                [1737439416434, 101243.172616805],
                [1737442921431, 101924.340940246],
                [1737446549875, 101885.476079607],
                [1737450224058, 102336.848626247],
                [1737453724125, 102574.846291047],
                [1737457405375, 103051.920199296],
                [1737460870436, 103680.996945755],
                [1737464631018, 104383.967043879],
                [1737468504633, 104476.607037582],
                [1737471824899, 103459.591110279],
                [1737475589188, 104071.020141236],
                [1737479016864, 104858.631808125],
                [1737482626637, 106132.122146877],
                [1737486219258, 106789.70708043],
            ],
        },
    ];
    const options={
        chart:{
            id:"area-datetime",
            type:"area",
            height:350,
            zoom:{
                autoScaleYaxis:true
            }
        },
        dataLabels:{
            enabled:false
        },
        xaxis:{
            type:"datetime",
            tickAmount:6
        },
        colors:["#758AA2"],
        markers:{
            colors:["#fff"],
            strokeColor:"#fff",
            size:0,
            strokeWidth:1,
            style:"hollow"
        },
        tooltip:{
            theme:"dark"
        },
        fill:{
            type:"gradient",
            gradient:{
                shadeIntensity:1,
                opacityFrom:0.7,
                opacityTo:0.9,
                stops:[0,100]
            }
        },
        grid:{
            borderColor:"#47535E",
            strokeDasshArray:4,
            show:true
        }
    }
    const handleActiveLable=(value) => {
        setActiveLable(value);
    }
  return (
    <div>
        <div className='space-x-3'>
            {timeSeries.map((item) => <Button variant={activeLable==item.lable?"":"outline"} onClick={() => handleActiveLable(item.lable)} key={item.lable}>
                    {item.lable}
                </Button>)}
        </div>
      <div id="chart-timelines">
        <ReactApexChart
        options={options}
        series={series}
        type={'area'}
        />
      </div>
    </div>
  )
}

export default StockChart
