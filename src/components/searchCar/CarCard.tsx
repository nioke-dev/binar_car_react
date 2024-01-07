import React from 'react';

interface Car {
    image: string;
    type: string;
    description: string;
    capacity: number;
    transmission: string;
    year: number;
    rentPerDay: number;
}

interface CarCardProps {
    car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <div className="card-body">
                    <img
                        className="card-img-top"
                        src={car.image}
                        alt="Card image cap"
                        style={{ height: '270px', width: '100%', objectFit: 'cover' }}
                    />
                    <div className="mt-3">
                        <h5 className="card-title">{car.type}</h5>
                        <h3>
                            <b>{car.rentPerDay} /hari</b>
                        </h3>
                        <p className="card-text" style={{ marginBottom: '20px' }}>
                            {car.description}
                        </p>
                        <div className="penumpang d-flex">
                            <img
                                src="https://i.ibb.co/SrMTbBZ/icon-penumpang.png"
                                alt="icon-penumpang"
                                style={{ width: '25px', height: '25px' }}
                            />
                            <p className="ms-3">{car.capacity} orang</p>
                        </div>
                        <div className="settings d-flex">
                            <img
                                src="https://i.ibb.co/n3MNDF5/icon-settings.png"
                                alt="icon-settings"
                                style={{ width: '25px', height: '25px' }}
                            />
                            <p className="ms-3">{car.transmission}</p>
                        </div>
                        <div className="carYear d-flex">
                            <img
                                src="https://i.ibb.co/Sy9GJgm/fi-calendar.png"
                                alt="fi-calendar"
                                style={{ width: '25px', height: '25px' }}
                            />
                            <p className="ms-3">Tahun {car.year}</p>
                        </div>
                        <a href="#" className="btn btn-green btn-block" style={{ marginTop: '20px', width: '100%', textAlign: 'center' }}>
                            Pilih Mobil
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarCard;
