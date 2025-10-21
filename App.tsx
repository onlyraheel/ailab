import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import ToolSelector from './components/ToolSelector';
import ToolViewer from './components/ToolViewer';
import { User, Tool } from './types';
import { TOOLS } from './constants';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);

  const handleLogin = (userData: User) => {
    // In a real application, you would send this data to your backend.
    // For this demo, we'll just store it in state.
    console.log('New lead captured:', userData);
    setUser(userData);
  };
  
  const handleLogout = () => {
      setUser(null);
      setSelectedTool(null);
  }

  return (
    <div className="flex flex-col min-h-screen bg-lynx-dark">
      <Header user={user} onLogout={handleLogout}/>
      
      {!user ? (
        <main className="flex-grow flex items-center justify-center p-4">
            <AuthModal onLogin={handleLogin} />
        </main>
      ) : (
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-10">
          <ToolSelector
            tools={TOOLS}
            selectedTool={selectedTool}
            onSelectTool={setSelectedTool}
          />
          <ToolViewer tool={selectedTool} />
        </main>
      )}
      
      <Footer />
    </div>
  );
};

export default App;