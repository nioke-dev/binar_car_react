import { useState } from "react"
import { Alert } from "react-bootstrap";
import CardWrapper from "./CardWrapper";
import { httpFetch } from "../../utils/http";
import { EventTargetForm } from "../../types";


// const BACKEND_URL = import.meta.env['VITE_BACKEND_URL'];

// type FormMobil = {
//     driverType : 'withDriver' | 'withoutDriver',
//     date?: string | undefined,
//     pickupTime: string,
//     passengers: number
// }

const SearchForm = () => {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [foundCars, setFoundCars] = useState<Array<any> | undefined>();

    async function submitCariMobil(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const target = e.target as unknown as EventTargetForm;

        try {
            const json = await httpFetch('cars', false,{
                inputTanggal: String(target.elements.date.value),
                waktuJemput: String(target.elements.pickupTime.value),
                jumlahPenumpang: +target.elements.passengers.value,
            })
            
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            setFoundCars(json as any)
        } catch (error) {
            throw error as Error;
        }

    }

    return (
        <>
            <div className="container" style={{ marginTop: '-65px' }}>
                <section className="responsive-form shadow" >
                    <form 
                        className="realSearchForm" 
                        id="carSearchForm" 
                        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}
                        onSubmit={submitCariMobil}
                    >
                        <div className="form-group" style={{ flex: 1 }}>
                            <label htmlFor="driverType">Tipe Driver</label>
                            <div className="selectDriver-with-icon mt-2">
                                <select className="form-control" id="driverType" required >
                                    <option value="withDriver">Dengan Sopir</option>
                                    <option value="withoutDriver">Tanpa Sopir (Lepas Kunci)</option>
                                </select>
                            </div>
                        </div>
                                                
                        <div className="form-group" style={{ flex: 1, maxWidth: '320px' }}>
                            <label htmlFor="date">Tanggal</label>
                            <input type="date" className="form-control mt-2" id="date" required />
                        </div>
                        <div className="form-group" style={{ flex: 1, maxWidth: '320px' }}>
                            <label htmlFor="pickupTime">Waktu Jemput / Ambil</label>
                            <div className="select-with-icon mt-2">
                                <select className="form-control" id="pickupTime" required >
                                    <option value="08:00">08.00 WIB</option>
                                    <option value="09:00">09.00 WIB</option>
                                    <option value="10:00">10.00 WIB</option>
                                    <option value="11:00">11.00 WIB</option>
                                    <option value="12:00">12.00 WIB</option>
                                </select>
                            </div>
                        </div>      
                        <div className="form-group" style={{ flex: 1, maxWidth: '320px' }}>
                            <label htmlFor="passengers">Jumlah Penumpang</label>
                            <div className="inputPassengers-with-icon mt-2">
                                <input type="number" className="form-control" id="passengers" min="1" max="10" required/>
                            </div>
                        </div>
                        <button 
                            type="submit" 
                            id="searchButton" 
                            className="btn btn-green mt-3 ms-3" 
                            style={{ height: '40px', width: '100px' }} 
                        >
                            Cari Mobil
                        </button>
                    </form>
                </section>

                <section id="filterResults" className="mt-3">
                    {!foundCars && null}
                    {foundCars && foundCars.length === 0 && (<Alert variant='danger'>Cannot found any cars</Alert>)}
                    {foundCars && foundCars?.length > 0 && <CardWrapper cars={foundCars} />}

                </section>

            </div>
            <br />
        </>
    )
}

export default SearchForm
