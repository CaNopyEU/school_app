import React from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';

import AuthPage from "./pages/Auth";
import EventsPage from "./pages/Events";
import BookingPage from "./pages/Booking";
import MainNavigation from "./components/Navigation/MainNavigation";

import './App.css';

function App() {
    return (
        <BrowserRouter>
            <MainNavigation/>
            <main className="main-content">
                <Switch>
                    <Redirect from="/" to="/auth" exact/>
                    <Route path="/auth" component={AuthPage}/>
                    <Route path="/events" component={EventsPage}/>
                    <Route path="/bookings" component={BookingPage}/>
                </Switch>
            </main>
        </BrowserRouter>
    );
}

export default App;
