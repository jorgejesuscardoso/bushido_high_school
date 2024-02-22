import { Route, Routes } from "react-router-dom"
import { Home } from "./components/Home/Home"
import { LayOut } from "./components/LayOut/LayOut"

function App() {

  return (
    <Routes>
      <Route path="/" element={<LayOut />} >
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
