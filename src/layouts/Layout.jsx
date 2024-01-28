import { useContext } from 'react';
import MainPage from '../pages/MainPage';
import { MyContext } from '../MyContext';
import SubmittedPage from '../pages/SubmittedPage';
import './layout.css';

const Layout = () => {
  const { isSubmitted } = useContext(MyContext);

  return (
    <div className='container'>
      <header className='header'>
        <h1>My App</h1>
      </header>
      <main className='main'>
        {
          !isSubmitted ?
            (<MainPage />)
            : (<SubmittedPage />)
        }
      </main>
    </div>
  );
};

export default Layout;
