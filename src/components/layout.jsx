import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";
import { sidebarConfig } from '../config/sidebarConfig';

export default function Layout() {
    const { pathname } = useLocation();

    // Pega a função raiz da rota
    const section = '/' + pathname.split('/')[1];
    const sidebarItems = sidebarConfig[section] ?? sidebarConfig['/'];

    return (
        <div style={{
            display:'flex',
            flexDirection: 'column',
            minHeight: '100vh',
        }}>
            <Navbar />

            <div style = {{
                display: 'flex',
                flex: 1,
            }}>
                <Sidebar items={sidebarItems} />

                <main style={{
                    flex: 1,
                    padding: '24px'
                }}>
                    <Outlet /> {/** aqui renderiza a página atual */}
                </main>
            </div>

            <Footer />
        </div>
    );
};
