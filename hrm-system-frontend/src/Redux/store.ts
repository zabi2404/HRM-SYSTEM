import { combineReducers, configureStore } from '@reduxjs/toolkit'
import  userReducer  from './user/userSlice'
import loadingErrorReducer from './user/loadingErrorSlice' 
import MessageReducer from './Message/messageSlice'
import attendanceReducer from './attendance/attendanceSlice'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


 
const rootReducer = combineReducers({
    user:userReducer,
    loadingError: loadingErrorReducer,
    Message:MessageReducer,
    attendance:attendanceReducer
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ["user","attendance"],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;