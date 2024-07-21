import { Routes,Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Edit from "./pages/Edit/Edit"
const App = () => {
  return (
    <>
    <div className="h-screen w-full bg-gradient-to-tr from-indigo-950 to-indigo-900 text-white flex flex-col  items-center justify-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Home />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </div>
    </>
  )
}

export default App