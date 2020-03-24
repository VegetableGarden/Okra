import Products from './products';
import { Router, Route, Switch } from "dva/router";

export function AppRouter({history, app}) {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" component={Products}></Route>
            </Switch>
        </Router>
    )
}