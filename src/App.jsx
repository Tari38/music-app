import { Route, Routes } from "react-router-dom";
import { PageWrapper } from "./components";
import * as Pages from './pages';


import './App.css';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<PageWrapper />}>
              <Route path="/" element={<Pages.Home />} />
              <Route path="/anime" element={<Pages.Anime />} />
              <Route path="/music" element={<Pages.Music />} />
              <Route path="/faves" element={<Pages.Faves />} />
              <Route path="*" element={<Pages.NotFound />} />
            </Route>          
        </Routes>
    )
}

export default App;
