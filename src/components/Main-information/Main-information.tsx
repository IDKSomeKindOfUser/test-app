'use client'

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ArrowLeftIcon from '/public/arrow-left.svg';

export default function MainInformation() {
    const [activeTab, setActiveTab] = useState('Отпуск');

    return (
        <>
            <Link className={'flex justify-start items-center gap-2 m-2 px-2.5 py-4'} href={'/'}>
                <ArrowLeftIcon width="24" height="24" />
                <p className={'text-[#76787A] text-sm uppercase font-semibold'}>Вернуться к сотрудникам</p>
            </Link>
            <section className={'w-full bg-[#232324] rounded-xl p-6 md:p-10 mb-4'}>
                <div className={'flex flex-col md:flex-row gap-4 md:gap-12 mb-6 md:mb-[52px] items-center md:items-start text-center md:text-left'}>
                    <Image src="/avatar.png" alt="avatar icon" width="160" height="160" className={'max-h-[160px]'} />
                    <div className={'flex flex-col'}>
                        <p className={'text-2xl md:text-5xl font-bold leading-8 md:leading-[56px] mb-6 md:mb-8 mt-4 md:mt-6'}>Иванов <br />Иван Иванович</p>
                        <p className={'mb-4'}>Junior UI/UX designer</p>
                        <div className={'flex gap-2'}>
                            <p>Россия, Красноярск </p>
                            <p className={'text-[#76787A]'}>• 14:03</p>
                        </div>
                    </div>
                </div>
                <div className={'flex justify-center md:justify-start overflow-auto'}>
                    <p
                        className={`px-2.5 py-4 cursor-pointer duration-200 whitespace-nowrap ${activeTab === 'Основная информация' ? 'text-[#E1E3E6] border-b border-[#0047BB]' : 'text-[#B0B1B6] border-b border-[#363738]'}`}
                        onClick={() => setActiveTab('Основная информация')}
                    >
                        Основная информация
                    </p>
                    <p
                        className={`px-2.5 py-4 cursor-pointer duration-200 ${activeTab === 'Отпуск' ? 'text-[#E1E3E6] border-b border-[#0047BB]' : 'text-[#B0B1B6] border-b border-[#363738]'}`}
                        onClick={() => setActiveTab('Отпуск')}
                    >
                        Отпуск
                    </p>
                    <p
                        className={`px-2.5 py-4 cursor-pointer duration-200 ${activeTab === 'Оборудование' ? 'text-[#E1E3E6] border-b border-[#0047BB]' : 'text-[#B0B1B6] border-b border-[#363738]'}`}
                        onClick={() => setActiveTab('Оборудование')}
                    >
                        Оборудование
                    </p>
                </div>
            </section>
        </>
    );
}