import React from 'react';
import { Tool } from '../types';

interface ToolSelectorProps {
  tools: Tool[];
  selectedTool: Tool | null;
  onSelectTool: (tool: Tool) => void;
}

const ToolSelector: React.FC<ToolSelectorProps> = ({ tools, selectedTool, onSelectTool }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-2">AI Tool Suite</h1>
      <p className="text-gray-400 mb-6">Select a tool from the options below to begin your task.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {tools.map((tool) => (
          <button
            key={tool.id}
            onClick={() => onSelectTool(tool)}
            className={`bg-lynx-gray p-5 rounded-lg text-left transition-all duration-300 border-2 
                        ${
                          selectedTool?.id === tool.id
                            ? 'border-lynx-blue shadow-lg shadow-lynx-blue/20'
                            : 'border-transparent hover:border-lynx-light-gray'
                        }`}
          >
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 bg-lynx-dark p-3 rounded-md">
                <span className={selectedTool?.id === tool.id ? 'text-lynx-blue' : 'text-gray-300'}>{tool.icon}</span>
              </div>
              <div>
                <p className="font-bold text-white text-lg">{tool.name}</p>
                <p className="text-gray-400 text-sm">{tool.description}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ToolSelector;