import { useState } from "react";

export type Data = {
  data: {
    id: string | number;
    name: string;
    isFolder: boolean;
    items: Data[];
  };
};

const Folder = ({ data }: Data) => {
const [expand, setExpand] = useState(false);

  if (data.isFolder) {
    return (
      <div>
        <>
          <span style={{}}>📁 {data.name}</span>
          <button type="button">file</button>
          <button type="button">folder</button>
          
          {data.items && data.items.map((item) => (
            <Folder data={item} />
          ))}
        </>
      </div>
    );
  } else {
    return <span className="">📄 {data.name}</span>;
  }
};

export default Folder;
