import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import UserLanding from './components/UserLanding'
import Contact from './components/Contact'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'

const Router = () => {
    const checkAuth = () => {
        const cookies = cookie.parse(document.cookie)
        return cookies['loggedIn'] ? true : false
    }

    const ProtectedRoute = ({ component: Component, ...rest }) => {
        return (
            <Route
                {...rest}
                render={(props) =>
                    checkAuth() ? <Component {...props} /> : <Redirect to="/" />
                }
            />
        )
    }

    return (
        <Switch>
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/AboutMe" component={AboutMe} />
            <Route exact path="/Projects" component={Projects} />
            <Route exact path="/" component={UserLanding} />
        </Switch>
    )
}

export default Router
