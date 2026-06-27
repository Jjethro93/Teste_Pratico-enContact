import { useEffect } from 'react'
import './App.css'
import AppRoutes from './routes'
import "aos/dist/aos.css";
import AOS from 'aos'
import { DarkModeProvider, useDarkMode } from './context/darkModeContext';

function AppContent() {
  const { darkMode } = useDarkMode();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [darkMode]);

  return <AppRoutes />;
}

function App() {
  return (
    <DarkModeProvider>
      <AppContent />
    </DarkModeProvider>
  );
}

export default App
