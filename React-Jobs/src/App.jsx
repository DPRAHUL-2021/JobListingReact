import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from 'react-router-dom'
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import SingleJobPage from './pages/SingleJobPage';
import NotFoundPage from './pages/NotFoundPage';
import EditJobPage from './pages/EditJobPage';
import AddJobPage from './pages/AddJobPage';

const App = () => {

  // For Adding A Job
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs',{
      method:'POST',
      headers:{
        'Content-Type' : 'application/json',
      },
      body:JSON.stringify(newJob),
    });
    return;
  };


  // For Deleting A Job
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`,{
      method:'DELETE',
    });
    return;
  };

  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`,{
      method:'PUT',
      headers:{
        'Content-Type' : 'application/json',
      },
      body:JSON.stringify(job),
    });
    return;
  };
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='/jobs' element={<JobsPage/>}/>
        <Route path='/jobs/:id' element={<SingleJobPage deleteJob={deleteJob}/>}/>
        <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob}/>}/>
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
  
      </Route>
    )
  );
  

  return <RouterProvider router={router}/>
};

export default App