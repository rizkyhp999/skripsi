import React from "react";
import Image from "next/image";

interface MyComponentProps {
  // ... other props
}

const MyComponent: React.FC<MyComponentProps> = () => {
  return (
    <div>
      <Image
        src="/Peta_provinsi_Indonesia.svg" // Path to your SVG in the public folder
        alt="Descriptive alt text for your SVG image"
        width={1000} // Optional width for responsive layout
        height={1000} // Optional height for responsive layout
        className="hover:bg-black"
      />
    </div>
  );
};

export default MyComponent;
