import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4)

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []);

    return (
        <div className="">
            <div className="text-center">
                <h2 className="text-4xl my-3">Featured Jobs: {jobs.length}</h2>
                <p className="text-xl">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={dataLength === jobs.length ? 'hidden' : 'text-center'}>
                <button onClick={() => setDataLength(jobs.length)} className="border bg-gradient-to-r from-[#7E90FE] to-[#9873FF] p-2 rounded mt-4 text-white text-xl font-semibold mb-9">See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;