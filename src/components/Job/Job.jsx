import { MdOutlineLocationOn } from 'react-icons/md';
import { HiOutlineCurrencyDollar } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className="border p-5">
            <div className="h-10">
                <img src={logo} alt="img" />
            </div>
            <h2 className="text-2xl font-bold mt-7">{job_title}</h2>
            <h4 className="text-xl mt-2">{company_name}</h4>
            <div className="mt-3 flex gap-4">
                <button className="border border-[#9873FF] px-3 py-1 text-[#9873FF] rounded">{remote_or_onsite}</button>
                <button className="border border-[#9873FF] px-3 py-1 text-[#9873FF] rounded">{job_type}</button>
            </div>
            <div className='flex gap-9 items-center '>
                <div className='flex gap-3 items-center mt-3'>
                    <MdOutlineLocationOn className='text-2xl'></MdOutlineLocationOn>
                    <p>{location}</p>
                </div>
                <div className='flex gap-3 items-center mt-3'>
                    <HiOutlineCurrencyDollar className='text-xl'></HiOutlineCurrencyDollar>
                    <p>{salary}</p>
                </div>
            </div>
            <Link to={`/jobdetails/${id}`}>
                <button className="border bg-gradient-to-r from-[#7E90FE] to-[#9873FF] p-2 rounded mt-4 text-white text-xl font-semibold">View Details</button>
            </Link>
        </div>
    );
};

Job.propTypes = {
    job: PropTypes.object,
  }

export default Job;