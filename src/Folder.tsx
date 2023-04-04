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
      <div className="item">
        <div className="folder">
          <span className="name">📁 {data.name}</span>
          <div className="buttons">
            <button type="button" className="button">
              🗃️
            </button>
            <button type="button" className="button">
              📄
            </button>
          </div>
        </div>

        {data.items &&
          data.items.map((item) => <Folder key={item.id} data={item} />)}
      </div>
    );
  } else {
    return <span className="file">📄 {data.name}</span>;
  }
};

export default Folder;
