import React, { useState } from "react";
import Button from "../atoms/button";
import DropdownContent from "../molecules/dropdownContent";

interface DropdownProps {
  label: string;
  items: string[];
  onSelect: (item: string) => void;
}

export default function dropdown({ label, items, onSelect }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleSelect = (item: string) => {
    onSelect(item);
    setIsOpen(false);
  };

  return (
    <div>
      <Button label={label} onClick={handleToggle} />
      {isOpen && <DropdownContent items={items} onSelect={handleSelect} />}
    </div>
  );
}
