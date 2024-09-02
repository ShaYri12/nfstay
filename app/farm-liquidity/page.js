import React from 'react'
import DashboardLayout from '../components/DashboardLayout'
import Image from 'next/image'
import SideContent from './SideContent'
import Graph from './Graph'

const FarmLiquidity = () => {
  return (
    <DashboardLayout>
      <div className='w-full p-4 pt-32 lg:pt-9'>
        <div className='flex items-center gap-2'>
          <Image src='/assets/icons/usdt-btc.svg' alt='usdt-btc' width={62} height={41} />
          <h2 className='text-[#0C0839] text-[24px] leading-[30px] tracking-[-0.02em] font-bold'>USDT/BTC</h2>
        </div>
        <div className='flex items-start md:flex-row flex-col justify-between gap-6'>
          <div className='mt-10 w-full'>
            <div className='flex items-end gap-2'>
              <h2 className='text-[#0C0839] text-[30px] sm:text-[35px] xl:text-[44px] leading-[50.44px] tracking-[-0.02em] font-bold'>63.125 USDT/ BTC</h2>
              <span className='text-[#0C0839] text-opacity-70 text-[16px] leading-[28px] font-medium'>(+6.57%)</span>
            </div>
            <Graph />
            <div className='mt-8 bg-white rounded-[14px] shadow-custom-one py-6 sm:py-8 px-4 sm:px-10 grid grid-cols-2 sm:flex items-center justify-between gap-7 flex-wrap'>
              <div>
                <div className='flex items-center gap-2.5'>
                  <Image src='/assets/icons/n.svg' alt='n' width={20} height={20} />
                  <h2 className='text-[#0C0839] text-[18px] leading-[27px] font-semibold'>90.560.000</h2>
                </div>
                <div className='mt-2.5 flex items-center gap-2.5'>
                  <Image src='/assets/icons/btc.svg' alt='n' width={20} height={20} />
                  <h2 className='text-[#0C0839] text-[18px] leading-[27px] font-semibold'>1,528</h2>
                </div>
              </div>
              <div>
                <h2 className='text-[#0C0839] text-[26px] leading-[32px] tracking-[-0.02em] font-semibold'>$181M</h2>
                <h4 className='mt-1 text-[#0C0839] text-[14px] leading-[27px] font-semibold opacity-50'>Total volume locked</h4>
              </div>
              <div>
                <h2 className='text-[#0C0839] text-[26px] leading-[32px] tracking-[-0.02em] font-semibold'>$381M</h2>
                <h4 className='mt-1 text-[#0C0839] text-[14px] leading-[27px] font-semibold opacity-50'>24h trade volume</h4>
              </div>
              <div>
                <h2 className='text-[#0C0839] text-[26px] leading-[32px] tracking-[-0.02em] font-semibold'>3.91%</h2>
                <h4 className='mt-1 text-[#0C0839] text-[14px] leading-[27px] font-semibold opacity-50'>APR</h4>
              </div>
            </div>
          </div>
          <SideContent />
        </div>
      </div>
    </DashboardLayout>
  )
}

export default FarmLiquidity