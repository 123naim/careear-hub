import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utility/localStorage";
import Applay from "../Applay/Applay";

const AppliedJobs = () => {
    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleJobsFilter = filter => {
        if (filter === 'all') {
            setDisplayJobs(appliedJobs)
        }
        else if (filter === 'remote') {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if (filter === 'onsite') {
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs)
        }
    }

    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job)
                }
            }

            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);

        }
    }, [jobs])
    return (
        <div>
            <div className="flex justify-center my-8">
                <ul className="flex gap-6">
                    <li onClick={() => handleJobsFilter('all')}> <button className="py-2 px-3 bg-violet-400 rounded text-xl text-white font-bold"><a>All</a></button> </li>
                    <li onClick={() => handleJobsFilter('remote')}><button className="py-2 px-3 bg-violet-400 rounded text-xl text-white font-bold"><a>Remote</a></button></li>
                    <li onClick={() => handleJobsFilter('onsite')}><button className="py-2 px-3 bg-violet-400 rounded text-xl text-white font-bold"><a>Onsite</a></button></li>
                </ul>
            </div>
            <ul>
                {
                    displayJobs.map(job => <Applay key={job.id} job={job}></Applay>)
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;