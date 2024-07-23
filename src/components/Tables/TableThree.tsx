import { useNavigate } from 'react-router-dom';

const packageData = [
  {
    name: 'Ferizka',
    price: 0.0,
    invoiceDate: '100',
    status: 'Paid',
  },
  {
    name: 'Chairul',
    price: 59.0,
    invoiceDate: '200',
    status: 'Paid',
  },
  {
    name: 'Andika',
    price: 99.0,
    invoiceDate: '200',
    status: 'Unpaid',
  },
  {
    name: 'Karen',
    price: 59.0,
    invoiceDate: '100',
    status: 'Pending',
  },
];

const TableThree = ({ searchTerm }) => {
  const navigate = useNavigate();

  // Pastikan searchTerm adalah string
  const filteredData = packageData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm ? searchTerm.toLowerCase() : '')
  );

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] py-4 px-4 font-medium text-center text-black dark:text-white xl:pl-11">
                Nama Account Manager
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-center text-black dark:text-white">
                Jumlah Pelanggan diassign
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((packageItem, key) => (
                <tr
                  key={key}
                  onClick={() => navigate(`/detail-am/${key}`)}
                  className="cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800"
                >
                  <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                    <h5 className="font-medium text-center text-black dark:text-white">
                      {packageItem.name}
                    </h5>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-center text-black dark:text-white">
                      {packageItem.invoiceDate}
                    </p>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" className="py-5 text-center text-black dark:text-white">
                  No results found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableThree;
