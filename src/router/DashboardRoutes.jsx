import { Routes, Route } from 'react-router-dom';
import { Footer, Navbar } from '../ui';
import { routes } from './';

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      
      <Routes>
      { 
        routes.map(({ path, Component }) => (
          <Route key={ path } path={ path } element={<Component />}/>
        ))
      }
    </Routes>

    <Footer />
    </>
    
  )
}
