export default function DeliveryList() {
  const mockDeliveries = [
    {
      id: 1,
      client: 'John Doe',
      fuelType: 'Diesel',
      litres: 50,
      status: 'Pending',
    },
    {
      id: 2,
      client: 'Sarah Smith',
      fuelType: 'Petrol',
      litres: 40,
      status: 'On The Way',
    },
    {
      id: 3,
      client: 'Mike Johnson',
      fuelType: 'LPG',
      litres: 1,
      status: 'Delivered',
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-green-600 mb-4">
        Driver Delivery List
      </h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 p-2">Client</th>
            <th className="border border-gray-300 p-2">Fuel Type</th>
            <th className="border border-gray-300 p-2">Litres</th>
            <th className="border border-gray-300 p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {mockDeliveries.map((d) => (
            <tr key={d.id}>
              <td className="border border-gray-300 p-2">{d.client}</td>
              <td className="border border-gray-300 p-2">{d.fuelType}</td>
              <td className="border border-gray-300 p-2">{d.litres}</td>
              <td className="border border-gray-300 p-2 text-sm text-gray-700">
                {d.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
