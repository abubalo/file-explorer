import { useState, FC } from "react";

export type Data = {
  id: string | number;
  name: string;
  isFolder: boolean;
  items?: Data[];
};

const Folder: FC<{ data: Data }> = ({ data }) => {
  const [expand, setExpand] = useState(false);

  if (data.isFolder) {
    return (
      <div>
        <>
          <span style={{ color: "#fff" }}>📁 {data.name}</span>
          <button type="button">file</button>
          <button type="button">folder</button>

          {data.items &&
            data.items.map((item) => <Folder key={item.id} data={item} />)}
        </>
      </div>
    );
  } else {
    return <span className="">📄 {data.name}</span>;
  }
};

export default Folder;
