import { useState } from 'react';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import TableThree from '../components/Tables/TableThree';
import TableDetailsAM from '../components/Tables/TableDetailsAM';
import { CiSearch } from 'react-icons/ci';

const Tables = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <Breadcrumb pageName="Profil Pelanggan" />
      <div className="flex flex-col gap-10">
        <div className="relative w-full xl:w-125">
          <button className="absolute left-0 top-1/2 transform -translate-y-1/2">
            <CiSearch className="fill-current" size={20} />
          </button>
          <input
            type="text"
            placeholder="Type to search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-transparent pl-9 pr-4 text-black focus:outline-none dark:text-white"
          />
        </div>
        {/* Pastikan searchTerm dikirimkan dengan benar */}
        <TableThree searchTerm={searchTerm} />
      </div>
    </>
  );
};

export default Tables;
