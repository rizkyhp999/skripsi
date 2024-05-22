import { useState } from "react";
import Subjudul from "../atoms/text";
// Definisikan tipe data
type DataType = {
  id: number;
  name: string;
};

interface DropdownProps {
  data: DataType[];
  classname: string; // Interface untuk props data
  id?: string;
  children?: React.ReactNode;
}

export default function Dropdown({ data, classname, children }: DropdownProps) {
  const [selected, setSelected] = useState<DataType | null>(null);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = Number(e.target.value);
    const selectedItem = data.find((item) => item.id === selectedId);
    setSelected(selectedItem || null);
  };
  return (
    <div className="flex flex-col">
      {children}
      <select
        className={classname}
        value={selected?.id}
        onChange={handleSelectChange}
      >
        {data.map((item) => (
          <option className="py-2 px-4 text-xl" key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}
