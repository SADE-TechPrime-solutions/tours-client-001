import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageSample from '././Components/Pages/PageSample';
import MountKenyaHike from './Components/Pages/MountKenyaHike';
import GalleryPage from './Components/Pages/GalleryPage/Gallery';
import MountKenyaPage from './Components/Pages/FullExplanation/MtKenya';
import MountKilimanjaroPage from './Components/Pages/FullExplanation/MtKilimanjaro';
import MountRuwenzoriPage from './Components/Pages/FullExplanation/MtRuwenzori';
import NothernKenya from './Components/Pages/FullExplanation/NothernKenya';
import KenyanPhotographicSafarisPage from './Components/Pages/FullExplanation/KPS';
import KenyanCoastPage from './Components/Pages/FullExplanation/KenyanCoast';
import AboutUs from './Components/Pages/AboutUs/AboutUs'

ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App />} />
    <Route path='/climbing-mount-kenya' element={<PageSample />}/>
    <Route path='/climbing-mount-kenya-2' element={<MountKenyaHike />}/>
    <Route path='gallery' element={<GalleryPage />} />
    <Route path='/mount-kenya' element={<MountKenyaPage />} />
    <Route path='/mount-kilimanjaro' element={<MountKilimanjaroPage />} />
    <Route path='/nothern-kenya' element={<NothernKenya />} />
    <Route path='/mount-ruwenzori' element={<MountRuwenzoriPage />} />
    <Route path='/kenyan-photographic-safaris' element={<KenyanPhotographicSafarisPage />} />
    <Route path='/kenyan-coast' element={<KenyanCoastPage />} />
    <Route path='/about-us' element={<AboutUs />} />
  </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
