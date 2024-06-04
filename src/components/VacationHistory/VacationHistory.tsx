'use client'

import React, { useState, useEffect } from "react";
import Modal from "@/components/Modal/Modal";
import {VacationHistoryInfo} from "@/components/VacationHistory/VacationHistoryInfo";

export default function VacationHistory() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const openModal = (e: React.MouseEvent<HTMLParagraphElement>) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);

    if (!mounted) return null;

    return (
        <div className={'flex flex-col w-full max-w-[992px] bg-[#232324] rounded-xl p-[30px]'}>
            <div className={'flex justify-between mb-4'}>
                <p className={'text-base md:text-2xl'}>История отпусков</p>
                <p onClick={openModal} className={'text-sm text-[#76787A] font-medium leading-6 cursor-pointer'}>Посмотреть все</p>
            </div>
            <VacationHistoryInfo />

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <p className={'text-base md:text-2xl mb-4'}>История отпусков</p>
                <VacationHistoryInfo />
            </Modal>
        </div>
    );
}