import React from 'react'
import HalfDoughnutChart from '../Components/Common/HalfDoughnutChart'
import { useSelector } from 'react-redux'
import LineChart2 from '../Components/Common/LineChart2'
import LineChart from '../Components/Common/LineChart'
import { BsStopwatchFill } from "react-icons/bs";
import GrowthButton from '../Components/Common/GrowthButton'
import BarChart from '../Components/Common/Barchart'

export default function Dashboard() {

  const user = useSelector((state: any) => state.user.currentUser)

  return (
    <>
      <div className='flex items-end gap-2'>
        <h1 className='text-[32px] font-script font-bold'>
          Hi, {" "}{user.rest.username}
        </h1>
        <p className='opacity-50 pb-1'>{user.rest.role}</p>
      </div>






      <div>


        <div className="grid mb-4   bg-[#2B2B2B] border border-[#424242] rounded-[14px] 
    min-[1400px]:grid-cols-[1fr_max(370px)] min-[1400px]:gap-0
    
    xsm:grid-cols-1
  

    " >

          {/*  chart first side */}
          <div className='flex flex-col justify-between  border-[#424242] max-h-[580px]
        min-[1400px]:border-r
        min-[1400px]:border-b-0
        xsm:border-b
              min-[1400px]:
              min-[1400px]:max-w-full
              overflow-hidden
             
       ' >
            <div className="flex items-center justify-between  p-4 pb-0
      min-[1400px]:pt-12
      xsm:flex-col
       sm:flex-row
      ">
              <div >
                <p className="text-[14px] opacity-50">Total revenue</p>
                <div className='flex items-center'>
                  <h1 className="text-[24px]">$240.8K</h1>
                  <div>
                    <GrowthButton
                      growth="28.5%"
                      isGrowthUp={true}
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between  text-[12px] gap-2
      sm:flex-row
      xsm:flex-col

      
      ">
                <div className='flex justify-center items-center gap-4'>
                  <p>Revenue</p>
                  <p>Expenses</p></div>

              </div>
            </div>

            <div className="
      sm:p-8
      xsm:pt-4 xsm:p-1
      ">
              <LineChart />
            </div>

          </div>

          {/* chart second side */}

          <div className="grid max-h-[580px]
    
        xsm:grid-cols-1
   
        xsm:pt-10
        sm:pt-0
        lg:pt-0
        
        ">
            {/* chart second side uper  */}
            <div className=" p-4 border-b border-[#424242]
          min-[1300px]:min-w-[370px]
            min-[1400px]:w-full
            h-fit
          ">
              <div className="flex flex-col  text-[12px] ">
                <div className="flex items-center gap-1 opacity-50 mb-2">
                  <BsStopwatchFill />
                  <h4>Total Proft
                  </h4></div>
                <div className='flex 
               items-center'>
                  <h2 className="text-white text-[24px]">$144.2k</h2>

                  <div>
                    <GrowthButton
                      growth="28.5%"
                      isGrowthUp={true}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center "  >
                <div className=" 
            min-[1400px]:max-w-[280px] 
            max-[480px]:w-[200px]
        
            ">
                  <BarChart />
                </div>
              </div>
              <div className="flex justify-between items-center pt-5">
                <div><p className="opacity-50">Last 12 months</p></div>
                <p className="opacity-50">View Reports</p>
              </div>
            </div>

            {/* chart second side bottom */}
            <div className=" p-4 h-fit min-[1300px]:min-w[300px]">
              <div className="flex flex-col text-[#AEB9E1] text-[12px] mb-2.5">
                <div className="flex items-center gap-1  mb-2 opacity-50 text-white">
                  <BsStopwatchFill />
                  <h4>Total sessions
                  </h4></div>
                <div className='flex items-center'>
                  <h2 className="text-white text-[24px]">400</h2>
                  <div>
                    <GrowthButton
                      growth="28.5%"
                      isGrowthUp={true}
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center w-full">
                <div className="w-full max-w-[320px] sm:max-w-full">
                  <div className="relative xsm:h-[100px] sm:h-[200px] min-[1300px]:h-[150px]">
                    <LineChart2 />
                  </div>
                </div>
              </div>


            </div>


          </div>

        </div>



      </div>


      <div className=" bg-[#2B2B2B] flex justify-center pt-16 rounded-[12px] min-w-0
xsm:p-2
sm:p-0
">
        <HalfDoughnutChart />
      </div>
    </>
  )
}
