import { Routes, Route } from "react-router"
import { ArchiveProvider } from "../context/archiveContext";
import Login from "../pages/Login"
import MainPage from "../pages/MainPage"
import ArchivedPage from "../pages/ArchivedPage";
import { UserProvider } from "../context/userContext"; 
import PrivateRoute from "./PrivateRoute";
import { HashRouter } from "react-router";


const AppRoutes = () => {

    return (
    <HashRouter>
        <UserProvider>
            <ArchiveProvider>
                <Routes>
                    <Route path="/" element={<Login />} />

                    <Route
                        path="/home"
                        element={
                            <PrivateRoute>
                                <MainPage />
                            </PrivateRoute>
                        }
                    />

                    <Route
                        path="/archives"
                        element={
                            <PrivateRoute>
                                <ArchivedPage />
                            </PrivateRoute>
                        }
                    />

                    <Route
                        path="*"
                        element={<h2>Página não encontrada</h2>}
                    />
                </Routes>
            </ArchiveProvider>
        </UserProvider>
    </HashRouter>
);

}


export default AppRoutes