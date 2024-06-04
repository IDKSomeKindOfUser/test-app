import ArrowYellow from '/public/arrow-right-yellow.svg';
import ArrowRed from '/public/arrow-right-red.svg';

export function VacationHistoryInfo() {
    return (
        <>
            <div>
                <div className={'hidden md:flex justify-between border-b border-[#363738] px-2 py-4 text-[#B0B1B6]'}>
                    <p>Тип</p>
                    <p>Даты отпуска</p>
                    <p>Количество дней</p>
                </div>
                {[
                    { type: 'Отпуск', startDate: '03 марта 2023', endDate: '23 марта 2023', days: 20, arrow: <ArrowYellow width={24} height={24} /> },
                    { type: 'Отгул', startDate: '03 марта 2023', endDate: '7 марта 2023', days: 4, arrow: <ArrowRed width={24} height={24} /> },
                    { type: 'Отгул', startDate: '03 марта 2023', endDate: '7 марта 2023', days: 4, arrow: <ArrowRed width={24} height={24} /> },
                    { type: 'Отгул', startDate: '03 марта 2023', endDate: '7 марта 2023', days: 4, arrow: <ArrowRed width={24} height={24} /> },
                    { type: 'Отгул', startDate: '03 марта 2023', endDate: '7 марта 2023', days: 4, arrow: <ArrowRed width={24} height={24} /> },
                ].map((item, index) => (
                    <div key={index} className={'flex flex-col md:flex-row justify-between border-b border-[#363738] md:px-2 py-4 gap-4'}>
                        <div className="flex flex-col gap-2 md:hidden">
                            <p className={'text-[#B0B1B6]'}>Тип</p>
                            <p>{item.type}</p>
                        </div>
                        <div className="flex flex-col gap-2 md:hidden">
                            <p className={'text-[#B0B1B6]'}>Даты отпуска</p>
                            <span className={'flex items-center gap-2'}>
                                <p>{item.startDate}</p>
                                {item.arrow}
                                <p>{item.endDate}</p>
                            </span>
                        </div>
                        <div className="flex flex-col gap-2 md:hidden">
                            <p className={'text-[#B0B1B6]'}>Количество дней</p>
                            <p>{item.days}</p>
                        </div>
                        <p className="hidden md:block">{item.type}</p>
                        <span className="hidden md:flex items-center gap-2">
                            <p>{item.startDate}</p>
                            {item.arrow}
                            <p>{item.endDate}</p>
                        </span>
                        <p className="hidden md:block">{item.days}</p>
                    </div>
                ))}
            </div>
        </>
    )
}