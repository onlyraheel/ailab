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
  icon: React.ReactElement;
}
