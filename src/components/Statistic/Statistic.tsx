'use client'

import Info from '/public/info.svg'
import { useState } from "react";
import dynamic from 'next/dynamic';

const DonutChart = dynamic(() => import('@/components/Statistic/PieBar'), { ssr: false });

export default function Statistic() {
    const [showTooltip, setShowTooltip] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [activeValue, setActiveValue] = useState<number | null>(null);
    const [lastActiveIndex, setLastActiveIndex] = useState<number | null>(null);
    const [lastActiveValue, setLastActiveValue] = useState<number | null>(null);

    const handleMouseEnter = (index: number, value: number) => {
        setActiveIndex(index);
        setActiveValue(value);
        setLastActiveIndex(index);
        setLastActiveValue(value);
    };

    const handleMouseLeave = () => {
        setActiveIndex(null);
        setActiveValue(null);
    };

    const handleTooltipMouseEnter = () => {
        setShowTooltip(true);
    };

    const handleTooltipMouseLeave = () => {
        setShowTooltip(false);
    };

    return (
        <div className={'flex flex-col w-full bg-[#232324] rounded-xl px-4 py-[30px] md:p-[30px] md:max-w-[516px]'} >
            <div className={'flex gap-2 items-center relative'}>
                <div className={'text-2xl'}>Статистика</div>
                <Info
                    width={24}
                    height={24}
                    onMouseEnter={handleTooltipMouseEnter}
                    onMouseLeave={handleTooltipMouseLeave}
                />
                {showTooltip && (
                    <div className={'bg-[#303030] text-sm rounded px-2.5 py-1.5 '}>
                        1 раб. месяц = 3 дня отпуска
                    </div>
                )}
            </div>
            <div className={'flex flex-col m-4'}>
                <div className={'flex items-center justify-center my-4'}>
                    <DonutChart
                        activeIndex={activeIndex}
                        activeValue={activeValue}
                        lastActiveIndex={lastActiveIndex}
                        lastActiveValue={lastActiveValue}
                    />
                </div>
                <div className={'flex flex-col gap-2'}>
                    <div
                        className={'flex justify-between max-w-[456px] border border-[#363738] hover:border-[#E1E3E6] duration-200 rounded-2xl px-2.5 py-3'}
                        onMouseEnter={() => handleMouseEnter(0, 32)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <p className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:bg-green-500 before:rounded-full before:content-['']">
                            Доступно сейчас
                        </p>
                        <p>32 дня</p>
                    </div>
                    <div
                        className={'flex justify-between max-w-[456px] border border-[#363738] hover:border-[#E1E3E6] duration-200 rounded-2xl px-2.5 py-3'}
                        onMouseEnter={() => handleMouseEnter(1, 8)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <p className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:bg-red-500 before:rounded-full before:content-['']">
                            Запланировано
                        </p>
                        <p>8 дней</p>
                    </div>
                    <div
                        className={'flex justify-between max-w-[456px] border border-[#363738] hover:border-[#E1E3E6] duration-200 rounded-2xl px-2.5 py-3'}
                        onMouseEnter={() => handleMouseEnter(2, 4)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <p className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:bg-yellow-500 before:rounded-full before:content-['']">
                            Использовано/недоступно
                        </p>
                        <p>4 дня</p>
                    </div>
                </div>
            </div>
        </div>
    );
}