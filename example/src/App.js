import React, { useState } from "react";
import useThrottledState from "use-throttled-state";

const App = () => {
  const [queryState, setQueryState] = useState("");

  const query = (query) => setQueryState(query);

  const [searchQuery, setSearchQuery] = useThrottledState("", 550, query);

  return (
    <>
      <label htmlFor="query">Query</label>
      <input
        id="query"
        onChange={(event) => {
          setSearchQuery(event.target.value);
        }}
        value={searchQuery}
      />
      <div>Delay: 500ms</div>
      <div>Local data:{searchQuery} </div>
      <div>Result: {queryState}</div>
    </>
  );
};

export default App;
