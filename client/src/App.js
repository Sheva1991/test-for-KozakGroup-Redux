import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import NavbarContainer from './components/NavbarConteiner';
// import { Loader } from './components/Loader';
import LoginPage from './pages/LoginPage';
import 'materialize-css'
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import RegisterPage from './pages/RegisterPage';
import CreatePageContainer from './pages/CreatePageContainer';
import EmployeesPageContainer from './pages/EmployeesPageContainer';
import { Loader } from './components/Loader';

const App = (props) => {
  // const [initialized, setInitializedSucsess] = useState(false)
  // // useEffect(() => {
  // //   if (localStorage.getItem('token')) {
  // //     setInitializedSucsess(true)
  // //   };
  // // }, [setInitializedSucsess])

  // // if (!initialized) {
  // //   return <Loader />
  // // }

  return (<div>
    <NavbarContainer />
    < div className='container' >
      <Route path='/' exact >
        <LoginPage />
      </Route>
      <Route path='/register' exact >
        <RegisterPage />
      </Route>
      <Route path='/employees' exact>
        <EmployeesPageContainer />
      </Route>
      <Route path='/create' exact>
        <CreatePageContainer />
      </Route>
    </div >
  </div >
  )
}

const KozakTestApp = () => {
  return <BrowserRouter basename={process.env.PUBLIC_URL + '/'}>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter >
}

export default KozakTestApp

