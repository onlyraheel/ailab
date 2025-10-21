import React from 'react';

export interface User {
  name: string;
  email: string;
  phone: string;
}

export interface Tool {
  id: string;
  name:string;
  description: string;
  url: string;
  // FIX: Replaced JSX.Element with React.ReactElement to resolve "Cannot find namespace 'JSX'" error in a .ts file.
  icon: React.ReactElement;
}
