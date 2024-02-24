import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home/Home"
import { LayOut } from "./components/LayOut/LayOut"
import { StudentArea } from "./pages/StudentArea.tsx/StudentArea"
import { Contact } from "./pages/contact/Contact"
import { About } from "./pages/About/About"
import { Calendar } from "./pages/Calendar/Calendar"
import { NotFound } from "./pages/NotFound/NotFound"

function App() {

  return (
    <Routes>
      <Route path="/" element={ <LayOut /> } >
        <Route index element={ <Home /> } />
        <Route path="/studentarea" element={ <StudentArea /> } />
        <Route path="/calendar" element={ <Calendar /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/about" element={ <About />} />
      </Route>
        <Route path="*" element={ <NotFound /> } />
    </Routes>
  )
}

export default App
