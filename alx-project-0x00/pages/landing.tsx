import React from "react";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="space-y-4 p-4">
      <h1 className="text-xl font-bold">Landing Page</h1>

      <Button title="Small - rounded-sm" size="small" shape="rounded-sm" styles="bg-red-500" />
      <Button title="Medium - rounded-md" size="medium" shape="rounded-md" styles="bg-green-500" />
      <Button title="Large - rounded-full" size="large" shape="rounded-full" styles="bg-yellow-500" />
      <Button title="Medium - rounded-lg" size="medium" shape="rounded-lg" styles="bg-purple-500" />
    </div>
  );
};

export default Landing;

