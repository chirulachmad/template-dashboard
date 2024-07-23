import React from "react";
import Sidebar from "../../components/Sidebar";


const UploadFile = () => {
    const fileTypes = [
        { id: 'PMS', label: 'PMS File', description: 'PMS file only' },
        { id: 'MAPPING_AM', label: 'MAPPING AM File', description: 'MAPPING AM file only' },
        { id: 'AOSODOMORO', label: 'AOSODOMORO File', description: 'AOSODOMORO file only' },
        { id: 'COLLECTION', label: 'COLLECTION File', description: 'COLLECTION file only' },
        { id: 'MASTER_CBASE', label: 'MASTER CBASE File', description: 'MASTER CBASE file only' },
    ];

    const uploadFields = fileTypes.map(({ id, label, description }) => (
        <div key={id} className="flex items-center mb-4 w-full">
            {/* Area upload */}
            <div
                id={`FileUpload${id}`}
                className="relative flex-grow border border-gray-200 rounded-lg bg-gray-100 p-5 flex items-center"
            >
                <input
                    type="file"
                    accept=".csv"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                />
                <div className="text-center flex-grow">
                    <svg
                        className="mx-auto mb-2"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3 12C3 8.68629 5.68629 6 9 6C10.6746 6 12.1931 6.71926 13.1936 8.03894L17.8636 8.32959L15.0578 11.1354L12.0578 8.13539L9 11.1926L11.1926 13.3852L13.1936 11.3842C14.6635 9.99118 16.9938 9.09167 19 10C22 11 23 12.8943 23 16C23 19.3056 20.3025 22 17 22H6.5C3.2025 22 1 19.3056 1 16V14C1 10.8797 2.75981 8.64942 5.91571 8.27204L6.32388 7.97373C6.3651 7.93885 6.4115 7.90228 6.46068 7.87746C6.74154 7.7235 7.06815 7.62559 7.42175 7.58008C7.64447 7.5505 7.8658 7.55456 8.08256 7.5928C8.43726 7.62936 8.78777 7.71874 9.11347 7.84548L9.20771 7.88463C9.72715 8.0694 10.2504 8.31069 10.7637 8.59023L12 6.9L9 4.73261L6.68528 7.04734C6.43104 7.30134 6.17079 7.55395 5.92771 7.79823L5 8.58567V12Z"
                            fill="#3C50E0"
                        />
                    </svg>
                    <p className="text-sm text-gray-700">
                        <span className="text-blue-600">{label}</span>
                    </p>
                    <p className="text-xs text-gray-500">{description}</p>
                </div>
            </div>
            {/* Tombol upload */}
            <button
                type="button"
                className="bg-blue-600 text-white xs px-10 py-10 ml-9 rounded hover:bg-blue-700"
                onClick={() => {
                    document.getElementById(`FileUpload${id}`).querySelector('input').click();
                }}
            >
                Upload
            </button>
        </div>
    ));

    return (
        <div className="space-y-6">
            {uploadFields}
            {/* Area untuk contoh template */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-md">
                <h2 className="text-lg font-semibold mb-3">Contoh Template</h2>
                <p className="text-gray-700 mb-3">
                    Untuk memastikan file CSV Anda sesuai dengan format yang diharapkan, 
                    Anda dapat mengunduh contoh template di bawah ini.
                </p>
                <a 
                    href="/path/to/template.csv" 
                    download
                    className="inline-block px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700"
                >
                    Unduh Template CSV
                </a>
                <div className="mt-3">
                    <h3 className="text-sm font-medium mb-1">Panduan Format:</h3>
                    <ul className="list-disc list-inside text-gray-600 text-xs">
                        <li>Kolom A: Nama</li>
                        <li>Kolom B: Email</li>
                        <li>Kolom C: Telepon</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UploadFile;

