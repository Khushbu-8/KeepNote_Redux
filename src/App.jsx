import Header from "./Component/Header/Header"
import AddNote from "./Component/Note/AddNote/AddNote"
import ViewNote from "./Component/Note/ViewNote/ViewNote"

function App() {

  return (
  <>
  <div>
    <Header/>
    <div className="container mt-4">
    <AddNote/>  
    <ViewNote/>
    </div>
   
  </div>
  </>
  )
}

export default App
