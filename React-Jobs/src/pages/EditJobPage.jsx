import React from 'react'
import { useNavigate} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { toast } from 'react-toastify';

const EditJobPage = ({updateJobSubmit}) => {

    const {id} = useParams();
    const [job,setJob] = useState(null);
    const [loading,setLoading] = useState(true);
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [location, setLocation] = useState('');
    const [salary, setSalary] = useState('');
    const [description, setDescription] = useState('');
    const [contactemail, setContactEmail] = useState('');
    const [contactphone, setContactPhone] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [companyDescription, setCompanyDescription] = useState('');
  
    useEffect(() => {
      const fetchJob = async () => {
        try {
          const res = await fetch(`/api/jobs/${id}`);
          const data = await res.json();
          setJob(data);
          setTitle(data.title);
          setType(data.type);
          setLocation(data.location);
          setSalary(data.salary);
          setDescription(data.description);
          setContactEmail(data.company.contactemail);
          setContactPhone(data.company.contactphone);
          setCompanyName(data.company.name);
          setCompanyDescription(data.company.description);
        } catch (error) {
          console.log('Error Fetching Data', error);
        } finally {
          setLoading(false);
        }
      };
      fetchJob();
    }, [id]);

    const submitForm = (e) => {
        e.preventDefault();
        const updateJob = {
            id,
            title,
            type,
            description,
            location,
            salary,
            company:{
                name:companyName,
                description:companyDescription,
                contactemail,
                contactphone
            } ,
        };
        updateJobSubmit(updateJob);
        toast.success('Job updated successfully');
        return navigate(`/jobs/${id}`);
    };


  return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div
          className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
        >
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">Update Job</h2>

            <div className="mb-4">
              <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                >Job Type</label
              >
              <select
                id="type"
                name="type"
                className="border rounded w-full py-2 px-3"
                required
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Job Listing Name</label
              >
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Beautiful Apartment In Miami"
                required
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
                >Description</label
              >
              <textarea
                id="description"
                name="description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Add any job duties, expectations, requirements, etc"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-4">
              <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                >Salary</label
              >
              <select
                id="salary"
                name="salary"
                className="border rounded w-full py-2 px-3"
                required
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              >
                <option value="Under ₹5L">Under ₹5L</option>
                <option value="₹5L - ₹6L">₹5L - ₹6L</option>
                <option value="₹6L - ₹7L">₹6L - ₹7L</option>
                <option value="₹7L - ₹8L">₹7L - ₹8L</option>
                <option value="₹8L - ₹9L">₹8L - ₹9L</option>
                <option value="₹9L - ₹10L">₹9L - ₹10L</option>
                <option value="₹10L - ₹12L">₹10L - ₹12L</option>
                <option value="₹12L - ₹15L">₹12L - ₹15L</option>
                <option value="₹15L - ₹18L">₹15L - ₹18L</option>
                <option value="₹18L - ₹20L">₹18L - ₹20L</option>
                <option value="Over ₹20L">Over ₹20L</option>
              </select>
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Location
              </label>
              <input
                type='text'
                id='location'
                name='location'
                className='border rounded w-full py-2 px-3 mb-2'
                placeholder='Company Location'
                required           
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <h3 className="text-2xl mb-5">Company Info</h3>

            <div className="mb-4">
              <label htmlFor="company" className="block text-gray-700 font-bold mb-2"
                >Company Name</label
              >
              <input
                type="text"
                id="company"
                name="company"
                className="border rounded w-full py-2 px-3"
                placeholder="Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="company_description"
                className="block text-gray-700 font-bold mb-2"
                >Company Description</label
              >
              <textarea
                id="company_description"
                name="company_description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="What does your company do?"
                value={companyDescription}
                onChange={(e) => setCompanyDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="contact_email"
                className="block text-gray-700 font-bold mb-2"
                >Contact Email</label
              >
              <input
                type="email"
                id="contact_email"
                name="contact_email"
                className="border rounded w-full py-2 px-3"
                placeholder="Email address for applicants"
                required
                value={contactemail}
                onChange={(e) => setContactEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="contact_phone"
                className="block text-gray-700 font-bold mb-2"
                >Contact Phone</label
              >
              <input
                type="tel"
                id="contact_phone"
                name="contact_phone"
                className="border rounded w-full py-2 px-3"
                placeholder="Optional phone for applicants"
                value={contactphone}
                onChange={(e) => setContactPhone(e.target.value)}
              />
            </div>

            <div>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Update Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default EditJobPage