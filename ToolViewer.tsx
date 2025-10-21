import React, { useState, useEffect } from 'react';
import { Tool } from '../types';

interface ToolViewerProps {
  tool: Tool | null;
}

const ToolViewer: React.FC<ToolViewerProps> = ({ tool }) => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (tool) {
            setIsLoading(true);
        }
    }, [tool]);

    const handleIframeLoad = () => {
        setIsLoading(false);
    };

    if (!tool) {
        return (
            <div className="bg-lynx-gray rounded-lg shadow-lg p-8 h-full flex flex-col items-center justify-center text-center min-h-[50vh]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-lynx-blue mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
                </svg>
                <h2 className="text-2xl font-bold text-white">Welcome to the AI Lab</h2>
                <p className="text-gray-400 mt-2 max-w-md">
                    Select a tool from the sidebar on the left to get started. Each tool is loaded in a secure frame for you to interact with.
                </p>
            </div>
        );
    }

    return (
        <div className="bg-lynx-gray rounded-lg shadow-lg w-full overflow-hidden flex flex-col relative">
            {isLoading && (
                 <div className="absolute inset-0 bg-lynx-gray bg-opacity-75 flex items-center justify-center z-10">
                    <div className="flex flex-col items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-10 w-10 text-lynx-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <p className="mt-4 text-white text-lg">Loading {tool.name}...</p>
                    </div>
                 </div>
            )}
            <iframe
                src={tool.url}
                title={tool.name}
                className={`w-full h-screen border-0 transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                onLoad={handleIframeLoad}
                onError={() => setIsLoading(false)}
            />
        </div>
    );
};

export default ToolViewer;