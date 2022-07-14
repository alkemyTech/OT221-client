
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicRoutes from "../routes/PublicRoutes";
import PrivateRoutes from "./RouteProtectors/PrivateRoutes";
import DashboardRoutes from "../routes/DashboardRoutes";
import BackofficeRoutes from "../routes/BackofficeRoutes";
import AdminRoutes from "./RouteProtectors/AdminRoutes";
import Footer from '../components/Footer'
import Navbar from '../components/Navbar/Navbar.jsx';

const AppRouter = () => {

    return (
        <>
            <Router>
            <Navbar></Navbar>
                <div>
                    <Routes>

                        <Route path="/*" element={<PublicRoutes />} />

                        <Route path="/auth/*" element={
                            // Rutas para usuarios registrados
                            <PrivateRoutes>
                                <DashboardRoutes />
                            </PrivateRoutes>
                        } />
                        <Route path="/backoffice/*" element={
                            // Rutas para usuarios administradores
                            <AdminRoutes>
                                <BackofficeRoutes />
                            </AdminRoutes>
                        } />

                    </Routes>
                </div>
                <Footer></Footer>
            </Router>
        </>
    );

}

export default AppRouter;
