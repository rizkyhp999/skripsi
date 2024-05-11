import React from "react";
interface data {
  items: string[];
  onSelect: (item: string) => void;
}
export default function dropdownContent({ items, onSelect }: data) {
  return (
    <ul>
      {items.map((item) => (
        // <DropdownItem key={item} label={item} onClick={() => onSelect(item)} />
        <li onClick={() => onSelect(item)}>{item}</li>
      ))}
    </ul>
  );
}
