import React from 'react';

function Table({ data, search }) {

    const filteredData = data.filter(item => 
        Object.values(item).some(val => 
            val.toString().toLowerCase().includes(search.toLowerCase())
        )
    );
    return (
        <>
       
        <table className="min-w-full bg-white border border-gray-300">
            <thead>
                <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b">Date</th>
                    <th className="py-2 px-4 border-b">Order Number</th>
                    <th className="py-2 px-4 border-b">Product Name</th>
                    <th className="py-2 px-4 border-b">Option</th>
                    <th className="py-2 px-4 border-b">Quantity</th>
                    <th className="py-2 px-4 border-b">Status</th>
                    <th className="py-2 px-4 border-b">Amount</th>
                    <th className="py-2 px-4 border-b">Delivery</th>
                </tr>
            </thead>
            <tbody>
                {filteredData.map((item, index) => (
                    <tr key={index}>
                        <td className="py-2 px-4 border-b">{item.date}</td>
                        <td className="py-2 px-4 border-b">{item.orderNumber}</td>
                        <td className="py-2 px-4 border-b">{item.productName}</td>
                        <td className="py-2 px-4 border-b">{item.option}</td>
                        <td className="py-2 px-4 border-b">{item.quantity}</td>
                        <td className="py-2 px-4 border-b">{item.status}</td>
                        <td className="py-2 px-4 border-b">{item.amount}</td>
                        <td className="py-2 px-4 border-b">{item.delivery}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    );
}

export default Table;