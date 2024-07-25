import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="container mx-auto p-4 flex-grow">
        <h1 className="text-3xl font-bold mb-6">Welcome to My App</h1>
        
        <Card className="mb-6">
          <CardHeader>
            <h2 className="text-2xl font-semibold">About</h2>
          </CardHeader>
          <CardContent>
            <p>This is a bare-bones application that you can modify and build upon.</p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <h2 className="text-2xl font-semibold">Features</h2>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              <li>Basic layout structure</li>
              <li>Shadcn UI components</li>
              <li>Responsive design</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold">Actions</h2>
          </CardHeader>
          <CardContent>
            <Button className="mr-2">Primary Action</Button>
            <Button variant="outline">Secondary Action</Button>
          </CardContent>
        </Card>
      </main>

      <footer className="bg-gray-100 mt-8">
        <div className="container mx-auto p-4">
          <div className="flex justify-between items-center">
            <p>&copy; 2023 My App. All rights reserved.</p>
            <nav>
              <ul className="flex space-x-4">
                <li><a href="#" className="text-blue-600 hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="text-blue-600 hover:underline">Terms of Service</a></li>
                <li><a href="#" className="text-blue-600 hover:underline">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;