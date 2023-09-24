import { Link } from "react-router-dom";
import { MdOutlineLocationOn } from 'react-icons/md';
import { HiOutlineCurrencyDollar } from 'react-icons/hi';
import PropTypes from 'prop-types';

const Applay = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div>
            <div className="flex gap-4 justify-between border rounded p-4 mb-5 items-center">
                <div className="flex gap-4 items-center">
                    <div className="h-40 w-48 p-4 bg-gray-200 rounded flex items-center justify-center">
                        <img src={logo} alt="" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">{job_title}</h3>
                        <h3 className="text-xl">{company_name}</h3>
                        <div className="mt-3 flex gap-4">
                            <button className="border border-[#9873FF] px-3 py-1 text-[#9873FF] rounded">{remote_or_onsite}</button>
                            <button className="border border-[#9873FF] px-3 py-1 text-[#9873FF] rounded">{job_type}</button>
                        </div>
                        <div className='flex gap-5 items-center '>
                            <div className='flex gap-3 items-center mt-3'>
                                <MdOutlineLocationOn className='text-2xl'></MdOutlineLocationOn>
                                <p>{location}</p>
                            </div>
                            <div className='flex gap-3 items-center mt-3'>
                                <HiOutlineCurrencyDollar className='text-xl'></HiOutlineCurrencyDollar>
                                <p>{salary}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Link to={`/jobdetails/${id}`}>
                        <button className="border bg-gradient-to-r from-[#7E90FE] to-[#9873FF] p-2 rounded mt-4 text-white text-xl font-semibold">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

Applay.propTypes = {
    job: PropTypes.object,
}

export default Applay;