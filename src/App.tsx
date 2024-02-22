import { Route, Routes } from "react-router-dom"
import { Home } from "./components/Home/Home"
import { LayOut } from "./components/LayOut/LayOut"
import { StudentArea } from "./components/StudentArea.tsx/StudentArea"
import { Contact } from "./components/contact/Contact"
import { About } from "./components/About/About"
import { Calendar } from "./components/Calendar/Calendar"

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
        <Route path="*" element={ <h1>Not Found</h1> } />
    </Routes>
  )
}

export default App
