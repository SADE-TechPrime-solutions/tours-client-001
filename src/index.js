import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageSample from '././Components/Pages/PageSample';
import MountKenyaHike from './Components/Pages/MountKenyaHike';
import GalleryPage from './Components/Pages/GalleryPage/Gallery';
import MountKenyaPage from './Components/Pages/FullExplanation/MtKenya';
import MountKilimanjaroPage from './Components/Pages/FullExplanation/MtKilimanjaro'

ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App />} />
    <Route path='/climbing-mount-kenya' element={<PageSample />}/>
    <Route path='/climbing-mount-kenya-2' element={<MountKenyaHike />}/>
    <Route path='gallery' element={<GalleryPage />} />
    <Route path='/mount-kenya' element={<MountKenyaPage />} />
    <Route path='/mount-kilimanjaro' element={<MountKilimanjaroPage />} />
  </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
