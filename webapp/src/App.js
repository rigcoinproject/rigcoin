import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import { AuthProvider, RequireAuth } from './components/auth';
import HomeView from './views/home';
import TabView from './views/tab';
import TosView from './views/tos';
import ErrorView from './views/error';

const App = (props) => {
  return (

    <AuthProvider>
      <Routes>
        <Route path="/" element={
          <HomeView />
        }/>
      <Route path="app" element={
            <RequireAuth>
              <TabView />
            </RequireAuth>
          }/>
        <Route path="tos" element={
            <TosView />
          }/>
          <Route path="*" element={
            <ErrorView />
          }/>
      </Routes>
    </AuthProvider>);
}

export default App;
