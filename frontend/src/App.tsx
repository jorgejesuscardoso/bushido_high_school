import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home/Home"
import { LayOut } from "./components/LayOut/LayOut"
import { StudentArea } from "./pages/StudentArea.tsx/StudentArea"
import { Contact } from "./pages/contact/Contact"
import { About } from "./pages/About/About"
import { Calendar } from "./pages/Calendar/Calendar"
import { NotFound } from "./pages/NotFound/NotFound"
import { News } from "./pages/News/News"
import { Eventos } from "./pages/Evento/Eventos"
import { Programming } from "./pages/Programming/Programming"
import { Evaluation } from "./pages/Evaluation/Evaluation"
import { SchoolYear } from "./pages/SchoolYear/SchoolYear"
import { Matriculation } from "./pages/Matriculation/Matriculation"
import { ConfirMatric } from "./pages/ConfirMatric/ConfirMatric"
import { SendDocuments } from "./pages/Documents/SendDocuments"
import { Register } from "./pages/Register/Register"
import { Login } from "./pages/Login/Login"
import { TeacherArea } from "./pages/TeacherArea/TeacherArea"
import { AdminArea } from "./pages/Admin/AdminArea"
import { Calendar_events } from "./pages/Evento/Calendar_evens"
import { Dashboard } from './pages/Dashboard/Dashboard'

function App() {

  return (
    <Routes>
      <Route path="/" element={ <LayOut /> } >
        <Route index element={ <Home /> } />
        <Route path="/student_area" element={ <StudentArea /> } />
        <Route path="/calendar" element={ <Calendar /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/about" element={ <About />} />
        <Route path="/news" element={ <News /> } />
        <Route path="/event" element={ <Eventos /> } />
        <Route path="/calendar_event" element={ <Calendar_events /> } />
        <Route path="/programming" element={ <Programming /> } />
        <Route path="/evaluation" element={ <Evaluation /> } />
        <Route path="/school_year" element={ <SchoolYear /> } />
        <Route path="/matriculation" element={ <Matriculation /> } />
        <Route path="/confirm_matric" element={ <ConfirMatric /> } />
        <Route path="/send_document" element={ <SendDocuments /> } />
        <Route path="/teacher_area" element={ <TeacherArea /> } />
        <Route path="/admin" element={ <AdminArea /> } />
      </Route>
      <Route path='/dashboard' element={ <Dashboard /> } >
      </Route>
      <Route path="/register" element={ <Register /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  )
}

export default App
