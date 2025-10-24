import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { DarkModeProvider } from "./darkMode";
import { ChatLayout } from "./ChatLayout.tsx";

function App() {
    return (
        <DarkModeProvider initialMode="light">
            <BrowserRouter>
                <Routes>
                    <Route path="/messenger" element={<ChatLayout />} />
                    <Route path="/" element={<Navigate to="/messenger" replace />} />
                </Routes>
            </BrowserRouter>
        </DarkModeProvider>
    );
}

export default App
