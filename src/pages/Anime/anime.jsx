import { Routes, Route, Outlet } from "react-router-dom";
import { BlackClover, Bleach, JujutsuKaisen, Naruto, Overlord, Slime} from ".";

const Anime = () => {
    return(
        <Routes>
            <Route path="/anime" element={<Anime />}>
                <Route path="blackClover" element={<BlackClover />}></Route>
                <Route path="bleach" element={<Bleach />}></Route>
                <Route path="jujutsuKaisen" element={<JujutsuKaisen />}></Route>
                <Route path="naruto" element={<Naruto />}></Route>
                <Route path="overlord" element={<Overlord />}></Route>
                <Route path="slime" element={<Slime />}></Route>
            </Route>
            <Outlet />
        </Routes>
    )
}

export default Anime;