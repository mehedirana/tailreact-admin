import { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
import './App.css';
import Loader from './components/common/Loader/Loader';
import DefaultLayout from './layout/DefaultLayout';




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
        <div className="bg-red-500">
          kjwdhj kjw qk
        </div>
      </DefaultLayout>
    );
}

export default App;
