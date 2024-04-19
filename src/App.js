import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Layout from './Components/Layout/Layout';
import Layout2 from './Components/Layout/Layout2';
import Layout3 from './Components/Layout/Layout3';
import Home from './Pages/Home';
import Home2 from './Pages/Home2';
import Home3 from './Pages/Home3';
import Home4 from './Pages/Home4';
import Home5 from './Pages/Home5';
import Home6 from './Pages/Home6';
import Home7 from './Pages/Home7';
import Home8 from './Pages/Home8';
import Home9 from './Pages/Home9';
import Home10 from './Pages/Home10';
import Home11 from './Pages/Home11';
import Home12 from './Pages/Home12';
import Home13 from './Pages/Home13';
import Layout4 from './Components/Layout/Layout4';
import Home14 from './Pages/Home14';
import Layout5 from './Components/Layout/Layout5';
import Home15 from './Pages/Home15';
import Layout6 from './Components/Layout/Layout6';
import Home16 from './Pages/Home16';
import PostDetails from './Pages/PostDetails';
import PageNotFound from './Components/404/PageNotFound';
import Multipage from './Pages/Multipage/Multipage';
import Layout7 from './Components/Layout/Layout7';
import AboutPage from './Pages/Multipage/AboutPage';
import GalleryPage from './Pages/Multipage/GalleryPage';
import PricingPage from './Pages/Multipage/PricingPage';
import PostPage from './Pages/Multipage/PostPage';
import ContactPage from './Pages/Multipage/ContactPage';
import Layout8 from './Components/Layout/Layout8';
import Multipage2 from './Pages/Multipage/Multipage2';
import Multipage3 from './Pages/Multipage/Multipage3';
import Layout9 from './Components/Layout/Layout9';
import DoctorProfilePage from './Pages/DoctorProfilePage';
import DoctorProfilePage2 from './Pages/DoctorProfilePage2';
import DoctorProfilePage3 from './Pages/DoctorProfilePage3';

import Chat from './chat'

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      {/* <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home2" element={<Home2 />} />
        <Route path="home3" element={<Home3 />} />
        <Route path="home4" element={<Home4 />} />
        <Route path="home5" element={<Home5 />} />
        <Route path="home6" element={<Home6 />} />
        <Route path="home7" element={<Home7 />} />
        <Route path="home8" element={<Home8 />} />
        <Route path="home10" element={<Home10 />} />
        <Route path="home12" element={<Home12 />} />
        <Route path="home13" element={<Home13 />} />
        <Route path="/doctor-profile" element={<DoctorProfilePage />} />
        <Route path="post/:postId" element={<PostDetails />} />
        <Route path="*" element={<PageNotFound />} />

      </Route> */}

      <Route path="/home11" element={<Layout2 />}>
        <Route index element={<Home11 />} />
      </Route>

      <Route path="/home9" element={<Layout3 />}>
        <Route index element={<Home9 />} />
      </Route>

      <Route path="/home14" element={<Layout4 />}>
        <Route index element={<Home14 />} />
        <Route path="doctor-profile2" element={<DoctorProfilePage2 />} />
      </Route>

      <Route path="/" element={<Layout5 />}>
        <Route index element={<Home15 />} />
        <Route path="doctor-profile3" element={<DoctorProfilePage3 />} />
      </Route>
      <Route path="/chat" element={<Layout5 />}>
        <Route index element={<Chat />} />
        <Route path="doctor-profile3" element={<DoctorProfilePage3 />} />
      </Route>

      <Route path="/home16" element={<Layout6 />}>
        <Route index element={<Home16 />} />
        <Route path="doctor-profile2" element={<DoctorProfilePage2 />} />
      </Route>

      <Route path="/multipage" element={<Layout7 />}>
        <Route index element={<Multipage />} />
        <Route path='home' element={<Multipage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='gallery' element={<GalleryPage />} />
        <Route path='pricing' element={<PricingPage />} />
        <Route path="post" element={<PostPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="post/:postId" element={<PostDetails />} />
      </Route>

      <Route path="/multipage2" element={<Layout8 />}>
        <Route index element={<Multipage2 />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='gallery' element={<GalleryPage />} />
        <Route path='pricing' element={<PricingPage />} />
        <Route path="post" element={<PostPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="post/:postId" element={<PostDetails />} />
      </Route>

      <Route path="/multipage3" element={<Layout9 />}>
        <Route index element={<Multipage3 />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='gallery' element={<GalleryPage />} />
        <Route path='pricing' element={<PricingPage />} />
        <Route path="post" element={<PostPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="post/:postId" element={<PostDetails />} />
      </Route>
    </Routes>
  );
};

export default App;
