// App.js
import { useState } from 'react';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';

function App() {

  const [page, setPage] = useState('home');

  return (
    <Layout selectedPage={page} onSetPage={setPage}>

      {page === 'home' && <HomePage />}
      {page === 'about' && <AboutPage />}
      {page === 'project' && <ProjectPage />}

    </Layout>
  );
}

export default App;
