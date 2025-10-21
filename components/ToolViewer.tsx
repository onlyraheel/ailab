import React, { useState, useEffect, useRef } from 'react';
import { Tool } from '../types';

interface ToolViewerProps {
  tool: Tool | null;
}

const ToolViewer: React.FC<ToolViewerProps> = ({ tool }) => {
    const [isLoading, setIsLoading] = useState(false);
    const viewerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (tool) {
            setIsLoading(true);
            // Scroll the tool into view after a short delay to allow the DOM to update
            setTimeout(() => {
              viewerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    }, [tool]);

    const handleIframeLoad = () => {
        setIsLoading(false);
    };

    if (!tool) {
        return (
            <div className="flex-grow flex flex-col items-center justify-center text-center rounded-lg bg-lynx-gray/30 border-2 border-dashed border-lynx-light-gray p-8 min-h-[40vh]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h12A2.25 2.25 0 0020.25 14.25V3.75A2.25 2.25 0 0018 1.5H6A2.25 2.25 0 003.75 3zM1.5 4.5h1.5m13.5 0h1.5m-16.5 4.5h1.5m13.5 0h1.5m-16.5 4.5h1.5m13.5 0h1.5" />
                </svg>
                <h2 className="text-xl font-semibold text-white">Your Workspace</h2>
                <p className="text-gray-400 mt-1">Select a tool above and it will appear here.</p>
            </div>
        );
    }

    return (
        <div ref={viewerRef} className="w-full relative min-h-[100vh]">
            {isLoading && (
                 <div className="absolute inset-0 bg-lynx-dark rounded-lg flex items-center justify-center z-10 min-h-[300px]">
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
                className={`w-full h-screen border-0 rounded-lg transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                onLoad={handleIframeLoad}
                onError={() => setIsLoading(false)}
            />
        </div>
    );
};

export default ToolViewer;