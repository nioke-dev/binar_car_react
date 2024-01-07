import { Table } from "react-bootstrap";

type Car = {
    plate : string;
    model : string;
    rent_per_day: number;
    image : string;
    updated_at : string;
}

// type Table<T> = {
//     items: T[] 
// }

function CustomeTable() {

    const cars : Car[] = [
        { plate: 'AB 12 CC', model: 'Avanza', rent_per_day: 100_000, image: '', updated_at: new Date().toString() },
        { plate: 'AB 13 CC', model: 'Yars', rent_per_day: 200_000, image: '', updated_at: new Date().toString() }
    ]

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Plate</th>
                    <th>Model</th>
                    <th>Rent Per Day</th>
                    <th>Updated At</th>
                </tr>
            </thead>
            <tbody>
                { cars.map(car => (
                    <tr key={car.plate}>
                        <td>{ car.plate }</td>
                        <td>{ car.model }</td>
                        <td>{ car.rent_per_day }</td>
                        <td>{ car.updated_at }</td>
                    </tr>
                )) }
            </tbody>
        </Table>
    )
}

export default CustomeTable;