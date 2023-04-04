import { useState } from "react";
import "./App.css";
import explorer, { Data } from "./data/FolderData";
import Folder from "./Folder";

type Props = {
  data: {
    id: string | number;
    name: string;
    isFolder: boolean;
    items?: Props[];
  };
};

function App() {
  const [explorerData, setExplorerData] = useState<Data>(explorer);

  return (
    <div className="App">
      <aside>
        <Folder data={explorerData} />
      </aside>
    </div>
  );
}

export default App;
