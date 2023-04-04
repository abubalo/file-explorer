import { useState } from "react";
import explorer, {Data} from "./data/FolderData";
import Folder from "./Folder";


function App() {

  const [explorerData, setExplorerData] = useState<Data>(explorer);
  return (
    <>
      <aside className="sidebar">
        <Folder data={explorerData} />
      </aside>
    </>
  );
}

export default App;
