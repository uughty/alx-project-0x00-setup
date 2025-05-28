import React from "react";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-xl font-semibold">Landing Page</h1>

      {/* Buttons with different shapes and sizes */}
      <Button title="Small Rounded-sm" size="small" shape="rounded-sm" />
      <Button title="Medium Rounded-md" size="medium" shape="rounded-md" />
      <Button title="Large Rounded-full" size="large" shape="rounded-full" />
    </div>
  );
};

export default Landing;