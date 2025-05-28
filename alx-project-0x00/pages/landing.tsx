import React from "react";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="space-y-4 p-4">
      <h1 className="text-xl font-bold">Landing Page</h1>
      
      <Button title="Small Button" size="small" shape="rounded-sm" />
      <Button title="Medium Button" size="medium" shape="rounded-md" />
      <Button title="Large Button" size="large" shape="rounded-full" />
    </div>
  );
};

export default Landing;
