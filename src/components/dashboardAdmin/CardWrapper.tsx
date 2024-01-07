import React from 'react';
import CarCard from './CarCard';

interface Car {
    id: string;
    image: string;
    type: string;
    description: string;
    capacity: number;
    transmission: string;
    year: number;
    rentPerDay: number;
}

interface CardWrapperProps {
    cars: Car[];
}

const CardWrapper: React.FC<CardWrapperProps> = ({ cars }) => {

    const rows: Car[][] = [];
    for (let i = 0; i < cars.length; i+=3) {
        rows.push(cars.slice(i, i + 3));
    }

    return (
        <>
            {rows.map((row, rowIndex) => (
                <div key={rowIndex} className="row mt-3">
                    {row.map((car, columnIndex) => (
                        <CarCard key={columnIndex} car={car} />
                    ))}
                </div>
            ))}
        </>
    );
};

export default CardWrapper;
