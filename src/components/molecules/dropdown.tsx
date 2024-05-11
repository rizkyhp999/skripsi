import { useState } from "react";

// Definisikan tipe data
type DataType = {
  id: number;
  name: string;
};

interface DropdownProps {
  data: DataType[]; // Interface untuk props data
}

export default function Dropdown(props: DropdownProps) {
  const [selected, setSelected] = useState<DataType | null>(null);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = Number(e.target.value);
    const selectedItem = props.data.find((item) => item.id === selectedId);
    setSelected(selectedItem || null);
  };
  console.log(props.data);
  return (
    <div>
      <select
        className="w-[150px] h-[60px] text-2xl font-semibold text-center border-black border rounded-xl my-2 mx-2 lg:w-[180px] lg:h-[70px] "
        value={selected?.id}
        onChange={handleSelectChange}
      >
        {props.data.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}
