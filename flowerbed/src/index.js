import dva from 'dva';
import './index.less';
import {message} from "antd";
import createBrowserHistory from "history/createBrowserHistory";
import createLoading from "dva-loading";


import models from "./models/products";
import {AppRouter} from "./routers";

const app = dva({
    history: createBrowserHistory(),
    initialState: {
        products: [
            {name: 'dva', id: 1},
            {name: 'antd', id: 2},
        ],
    },
});

app.use(createLoading());

app.model(models.default);

app.router(AppRouter);

app.start('#root');