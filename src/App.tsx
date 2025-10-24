import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { DarkModeProvider } from "./darkMode";
import { AvatarProvider } from "./avatar/AvatarProvider.tsx";
import { ChatLayout } from "./ChatLayout.tsx";

function App() {
    return (
        <DarkModeProvider initialMode="light">
            <AvatarProvider initialAvatar="/images/avatar/avatar-12.jpg" initialUsername="Travis Fuller">
                <BrowserRouter>
                    <Routes>
                        <Route path="/messenger" element={<ChatLayout />} />
                        <Route path="/messenger/:contactId" element={<ChatLayout />} />
                        <Route path="/" element={<Navigate to="/messenger" replace />} />
                    </Routes>
                </BrowserRouter>
            </AvatarProvider>
        </DarkModeProvider>
    );
}

export default App
