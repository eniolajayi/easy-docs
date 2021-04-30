import React, { useEffect, useMemo, useState } from "react";
// Import the Slate editor factory.
import { createEditor } from "slate";

// Import the Slate components
import { Slate, Editable, withReact } from "slate-react";

const App = () => {
  // We create state for what we pass into editor
  const [value, setValue] = useState([]);
  // then we create a slate Editor object that won't change across renders
  const editor = useMemo(() => {
    withReact(createEditor());
  }, []);
  // Render slate context
  return (
    <Slate
      editor={editor}
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
      }}
    />
  );
};
export default App;
