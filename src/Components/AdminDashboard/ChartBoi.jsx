import { useState, useRef, useEffect } from "react";
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';
// import { fetchTotalSales } from "./HandleAdminRoutes";
const ChartBoi = () => {
    const labels = ["January", "February", "March", "April", "May", "June"];
    const [dataType, setDataType] = useState("today");
    const [mode, setMode] = useState("online");
    // useEffect(() => {
    //     fetchTotalSales().then((data) => {
    //         // console.log('Total Sales:', data);
    //     }).catch((error) => {
    //         console.error('Error fetching total sales:', error);
    //     });
    // }, []);
    const data = {
        labels: labels,
        datasets: [
            {
                backgroundColor: "rgba(7,224,152,0.3)",
                borderColor: "#07E098",
                derWidth: 2,
                fill: true,
                data: [0, 10, 5, 2, 20, 30, 45],
                tension: 0.4,
                pointRadius: 5,
                pointBackgroundColor: '#07E098',
            },
            {
                backgroundColor: "rgba(75,192,192,0.3)",
                borderColor: "#0095FF",
                borderWidth: 2,
                fill: true,
                data: [5, 15, 10, 8, 25, 35, 50],
                tension: 0.4,
                pointRadius: 5,
                pointBackgroundColor: '#0095FF',
            },
        ],
    };

    const options = {
        scales: {
            x: {
                display: false, // Hide x-axis labels
                grid: {
                    display: false, // Hide x-axis grid lines
                },
            },
            y: {
                display: false, // Hide y-axis labels
                grid: {
                    display: false, // Hide y-axis grid lines
                },
            },
        },
        plugins: {
            legend: {
                display: false, // Hide legend
            },
        },
        elements: {
            line: {
                borderWidth: 2, // Line width
            },
            point: {
                radius: 5, // Size of the dots
            },
        },
        maintainAspectRatio: false, // Allow custom size
    };

    return (
        <div className="p-3 bg-white  rounded-xl w-full md:w-[55%]"
        style={{ boxShadow: "5px 6px 5px 0px rgba(0,0,0,0.34)" }}
    
        >
            <div className="h-10 flex justify-between items-center">
                <p className="font-semibold">Income Status</p>
                <div className="flex gap-2">
                    <p className={`${dataType == "today" ? "text-green-400" : "text-gray-500"} text-normal text-base font-semibold cursor-pointer`} onClick={() => setDataType("today")}>Today</p>
                    <p className={`${dataType == "week" ? "text-green-400" : "text-gray-500"} text-normal text-base font-semibold cursor-pointer`} onClick={() => setDataType("week")}>Week</p>
                    <p className={`${dataType == "month" ? "text-green-400" : "text-gray-500"} text-normal text-base font-semibold cursor-pointer`} onClick={() => setDataType("month")}>Month</p>
                    <p className={`${dataType == "year" ? "text-green-400" : "text-gray-500"} text-normal text-base font-semibold cursor-pointer`} onClick={() => setDataType("year")}>Year</p>
                </div>

            </div>
            <div className="chart-container " style={{ height: '180px', width: '100%' }}>
                <Line  data={data} options={options} />
            </div>
            <div className="flex h-full gap-6 items-center justify-center p-4">
                <div className="flex">
                    <img src="src/assets/lastYear.png" alt="hi" className="h-[10px] m-2 " />
                    <div className="txt text-gray-500 font-semibold">
                        <p>Last {dataType}</p>
                        <p className="text-gray-700 text-sm">$1236</p>
                    </div>
                </div>
                <div className="h-3 w-1 bg-slate-400"></div>
                <div className="flex">
                    <img src="src/assets/currentYear.png" alt="hi" className="h-[10px] m-2 " />
                    <div className="txt text-gray-500 font-semibold">
                        <p>This {dataType}</p>
                        <p className="text-gray-700 text-sm">$8888</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChartBoi;