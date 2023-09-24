import { useLoaderData, useParams } from "react-router-dom";
import { HiOutlineCurrencyDollar } from 'react-icons/hi';
import { MdOutlineLocationOn, MdOutlineSubtitlesOff, MdOutlineMail } from 'react-icons/md';
import { BsTelephone } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../Utility/localStorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt);
    const { job_description, job_responsibility, educational_requirements, experiences, salary, company_name, contact_information } = job;

    const handleApplyJob = () => {
        saveJobApplication(idInt);
        toast('You have applay succsess fully')
    }

    return (
        <div className="my-14">
            <div className="grid gap-4 md:grid-cols-3">
                <div className="md:col-span-2">
                    <h3 className="mb-8"><span className="font-bold">Job Description:</span> {job_description}</h3>
                    <h3 className="mb-8"><span className="font-bold">Job Responsibiliry:</span> {job_responsibility}</h3>
                    <h3 className="font-bold mb-2">Educational Requirements:</h3>
                    <p>{educational_requirements}</p>
                    <h3 className="font-bold mb-2 mt-8">Experiences:</h3>
                    <p>{experiences}</p>
                </div>
                <div className="md:col-span-1">
                    <div className=" bg-violet-100 rounded-lg py-4 px-6">
                        <div>
                            <h2 className="font-bold text-[17px]">Job Details</h2>
                            <hr className="border-[1px] border-violet-300 my-4" />
                            <div className="flex items-center gap-3 mb-3">
                                <HiOutlineCurrencyDollar className="text-2xl text-violet-500"></HiOutlineCurrencyDollar>
                                <p><span className="font-bold">Salary:</span> {salary} (Per Month)</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <MdOutlineSubtitlesOff className="text-2xl text-violet-500"></MdOutlineSubtitlesOff>
                                <p><span className="font-bold">Job Title:</span> {company_name}</p>
                            </div>
                        </div>
                        <div className="mt-7">
                            <h2 className="font-bold text-[17px]">Contact Informationf</h2>
                            <hr className="border-[1px] border-violet-300 my-4" />
                            <div className="flex items-center gap-3 mb-3">
                                <BsTelephone className="text-2xl text-violet-500"></BsTelephone>
                                <p><span className="font-bold">Phone:</span> {contact_information.phone}</p>
                            </div>
                            <div className="flex items-center gap-3 mb-3">
                                <MdOutlineMail className="text-2xl text-violet-500"></MdOutlineMail>
                                <p><span className="font-bold">Email:</span> {contact_information.email}</p>
                            </div>
                            <div className="flex gap-3">
                                <MdOutlineLocationOn className="text-5xl text-violet-500"></MdOutlineLocationOn>
                                <p className="mt-[6px]"><span className="font-bold">Address:</span> {contact_information.address}</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 bg-violet-400 rounded text-center">
                        <button onClick={handleApplyJob} className="py-[10px] text-white font-bold">Apply Now</button>
                    </div>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default JobDetails;