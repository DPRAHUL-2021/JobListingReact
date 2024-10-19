import React from 'react'
import Joblisting from './Joblisting'
import { useEffect , useState } from 'react'
import Spinner from './Spinner'

const Browse = ({isHome = false}) => {
    const [jobs,setJobs] = useState([]);
    const [loading , setLoading] = useState(true);

    useEffect(() => {
      const fetchJobs = async () => {
        const apiUrl = isHome 
        ? '/api/jobs?_limit=6' 
        : '/api/jobs';
        try {
          const res = await fetch(apiUrl);
          const data = await res.json();
          setJobs(data);
        } catch (error) {
          console.log('Error Fetching Data',error);
        }finally{
          setLoading(false);
        }
      };

      fetchJobs();
    },[]);

  return (
    <section class="bg-blue-50 px-4 py-12">
      <div class="container-xl lg:container m-auto">
        <h2 class="text-4xl font-bold text-indigo-500 mb-8 text-center">
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>
        
            {loading ? 
            (<Spinner loading={loading}/>) : 
            (
              <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                {jobs.map((job) => (
                <Joblisting key={job.id} job = {job}/>
            ))}
              </div>
            )}
          
        </div>
    </section>
  )
}

export default Browse