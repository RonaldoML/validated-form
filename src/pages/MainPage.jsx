import { useQuery } from '@tanstack/react-query';
import { Form } from '../components/Form';
import { getStarWarsFilms } from '../network/getFilms';
import { RequestStatesBanner } from '../components/RequestStatesBanner';
import './main-page.css';

const MainPage = () => {
  const { isPending, isError, data } = useQuery(getStarWarsFilms());

  if (isPending) return (
    <section className='request-states-banner-container '>
      <RequestStatesBanner message='Loading...' />
    </section>
  );
  if (isError) return (
    <section className='request-states-banner-container '>
      <RequestStatesBanner message='Something went wrong!' />
    </section>
  );

  const films = data.data.allFilms.films;

  return (
    <Form films={films} />
  );
};

export default MainPage;