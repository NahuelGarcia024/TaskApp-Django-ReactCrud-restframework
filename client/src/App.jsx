import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { TasksPage } from './pages/TasksPage';
import { TasksFormPage } from './pages/TasksFromPage';
import { Navigation } from './components/Navigation';
import {Toaster} from "react-hot-toast";
function App() {
  return (
    
    <BrowserRouter>
    <div className='container mx-auto'>
    <Navigation />
      <Routes>

        
        <Route path='/' element={<Navigate to="/tasks"/>}/>
        <Route path='/tasks' element={<TasksPage/>}/>
        <Route path="/tasks/:id" element={<TasksFormPage/>}/>
        <Route path='/tasks-create' element={<TasksFormPage/>}/>
        






      </Routes>
      <Toaster/>

    </div>
    </BrowserRouter>
  )
}


export default App