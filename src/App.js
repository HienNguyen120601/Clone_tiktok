import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Fragment } from 'react'
import { publicRoutes } from './routes'

import Defaultlayout from './components/Layout/Defaultlayout'
function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout = route.layout === null ? Fragment : Defaultlayout
            const Page = route.component
            return <Route key={index} path={route.path} element={<Layout>
              <Page />
            </Layout>}></Route>
          })}
        </Routes>
      </div>
    </Router>
  )
}

export default App;
