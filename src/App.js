import { Routes, Route } from "react-router-dom";

import Layout from "./compnents/Layout";
import LoginReg from "./compnents/Auth/LoginReg";
import DogBreedList from "./compnents/BreedList/DogBreedList";
import DogBreedImage from "./compnents/BreedImage/DogBreedImage";


function App() {
  return (
    <>
      
      <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<LoginReg/>}/>
      <Route path="/BreedList" element={<DogBreedList/>} />
      <Route path="/breedImage" element={<DogBreedImage/>} />




      </Route>
      </Routes>
      

      
    </>
  );
}

export default App;
