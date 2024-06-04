import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const data = [
    { name: 'Доступно сейчас', value: 32 },
    { name: 'Запланировано', value: 8 },
    { name: 'Использовано/недоступно', value: 4 },
];

const COLORS = ['#25824F', '#DB4546', '#FFB649'];

interface DonutChartProps {
    activeIndex: number | null;
    activeValue: number | null;
    lastActiveIndex: number | null;
    lastActiveValue: number | null;
}

const getDayLabel = (value: number) => {
    const lastDigit = value % 10;
    const lastTwoDigits = value % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
        return 'дней';
    }

    if (lastDigit === 1) {
        return 'день';
    }

    if (lastDigit >= 2 && lastDigit <= 4) {
        return 'дня';
    }

    return 'дней';
};

const DonutChart: React.FC<DonutChartProps> = ({ activeIndex, activeValue, lastActiveIndex, lastActiveValue }) => {
    const displayIndex = activeIndex !== null ? activeIndex : lastActiveIndex;
    const displayValue = activeValue !== null ? activeValue : lastActiveValue;

    return (
        <div className="relative">
            <PieChart width={160} height={160}>
                <Pie
                    data={data}
                    cx={75}
                    cy={75}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            stroke={'#232324'}
                            strokeWidth={displayIndex === index ? '0' : '10'}
                            fill={COLORS[index % COLORS.length]}
                        />
                    ))}
                </Pie>
            </PieChart>
            {displayValue !== null && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-[34px] gap-2">
                    {displayValue}
                    <div className="text-[#76787A] text-sm font-medium">{getDayLabel(displayValue)}</div>
                </div>
            )}
        </div>
    );
};

export default DonutChart;