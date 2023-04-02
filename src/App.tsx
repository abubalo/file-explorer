import { useState } from "react";
import "./App.css";
import explorer, {Data} from "./data/FolderData";
import Folder from "./Folder";

type Props = {
  data: {
    id: string | number;
    name: string;
    isFolder: boolean;
    items?: Props[];
  }
};

function App() {

  const [explorerData, setExplorerData] = useState(explorer);
  return (
    <>
      <aside className="">
        <Folder data={explorerData} />
      </aside>
    </>
  );
}

export default App;
