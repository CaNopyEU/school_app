import React, {Component} from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';

import AuthPage from "./pages/Auth";
import EventsPage from "./pages/Events";
import BookingPage from "./pages/Booking";
import UsersPage from "./pages/Users";
import MainNavigation from "./components/Navigation/MainNavigation";
import AuthContext from './context/auth-context';

import './App.css';

class App extends Component {
    state = {
        token: null,
        userId: null
    }
    login = (token, userId, tokenExpiration) => {
        this.setState({token: token, userId: userId});
    }

    logout = () => {
        this.setState({token: null, userId: null});
    };

    render() {
        return (
            <BrowserRouter>
                <AuthContext.Provider
                    value={{
                        token: this.state.token,
                        userId: this.state.userId,
                        login: this.login,
                        logout: this.logout
                    }}>
                    <MainNavigation/>
                    <main className="main-content">
                        <Switch>
                            {!this.state.token && <Redirect from="/bookings" to="/auth" exact/>}
                            {this.state.token && <Redirect from="/" to="/events" exact/>}
                            {this.state.token && <Redirect from="/auth" to="/events" exact/>}
                            {!this.state.token && (
                                <Route path="/auth" component={AuthPage}/>
                            )}
                            <Route path="/events" component={EventsPage}/>
                            {/*TODO: configure routes for Users,*/}
                            <Route path="/users" component={UsersPage}/>
                            {this.state.token && (
                                <Route path="/bookings" component={BookingPage}/>
                            )}
                            {!this.state.token && <Redirect to="/auth" exact/>}

                        </Switch>
                    </main>
                </AuthContext.Provider>
            </BrowserRouter>
        );
    }
}

export default App;
