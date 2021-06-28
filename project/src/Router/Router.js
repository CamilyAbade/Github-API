import React from 'react';
import SearchUser from '../pages/SearchUser/SearchUser'
import UserInfo from '../pages/UserInfo/UserInfo'
import UserRepos from '../pages/UserRepos/UserRepos';
import UserStarred from '../pages/UserStarred/UserStarred';
import Error from '../pages/Error/Error';


import {BrowserRouter, Switch, Route} from 'react-router-dom';

const Router = () => {
    return(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' >
                <SearchUser />
            </Route>

            <Route exact path='/:user'>
                <UserInfo/>
            </Route>

            <Route exact path='/:user/repos'>
                <UserRepos/>
            </Route>

            <Route exact path='/:user/starred'>
                <UserStarred/>
            </Route>

            <Route>
                <Error/>
            </Route>

        </Switch>
    </BrowserRouter>

    )
}

export default Router;
