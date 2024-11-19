// import { useLocation } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import Loader from './components/common/Loader/Loader';
import DefaultLayout from './layout/DefaultLayout';
import { Route, Routes } from 'react-router-dom';
import Calendar from './pages/Calendar';
import PageTitle from './components/PageTitle';




const App = () => {
  const [loading, setLoading] = useState(false)
  // const { pathname } = useLocation();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ?
    <Loader />
    : (
      <DefaultLayout>
        <Routes>
          <Route
            path='/calendar'
            element={
              <>
                <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Calendar />
              </>
            }
          >

          </Route>
        </Routes>
      </DefaultLayout>
    );
}

export default App;
