"use client";

const AzureButton = ({ action }: { action: () => void }) => {
  return (
    <button
      onClick={() => action()}
      className="bg-blue-700 rounded-md px-4 py-2 text-foreground mb-2"
    >
      Sign In with Azure
    </button>
  );
};

export default AzureButton;
