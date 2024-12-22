import "./App.css";
// components
import { MarkdownPreview } from "./components/MarkdownPreview";
import { MarkdownWriteSpace } from "./components/MarkdownWriteSpace";

function App() {
  return (
    <div className="app-container">
      <h1 className="app-container-title">Simple Markdown converter</h1>
      <div className="app-container-md">
        <MarkdownWriteSpace />
        <MarkdownPreview />
      </div>
    </div>
  );
}

export default App;
