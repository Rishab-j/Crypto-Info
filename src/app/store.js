import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../services/crytoApi";
import { cryptoNewsApi } from "../services/crytoNewsApi";

export default configureStore({
    reducer : {
        [cryptoApi.reducerPath] : cryptoApi.reducer,
        [cryptoNewsApi.reducerPath] : cryptoNewsApi.reducer,
    },
});