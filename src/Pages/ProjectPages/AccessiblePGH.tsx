import { useEffect, useState } from "react";
import Tabbar from "../../Components/Tabbar";
import Grid from "@mui/material/Grid";

function AccessiblePGH() {
  const [story, setStory] = useState("");
  const [loadError, setLoadError] = useState(false);
  const headerStyle = {
  textAlign: "center" as any,
  borderBottom: "2px solid",
  }

  return (
    <div style={{ height: "100dvh", display: "flex", flexDirection: "column" }}>
      <Tabbar page={2} />
         <div style={headerStyle}>
      <h1 data-heading="Accessible Pittsburgh">Accessible Pittsburgh</h1>
    </div>

       {loadError ? (
        <p role="alert" style={{ padding: "24px" }}>
          The UCRE reflection could not be loaded. Please try again later.
          {loadError}
        </p>
      ) : (
        <iframe
          title="Emily Amspoker's UCRE reflection"
          src="assets\UCREReflection.html"
          style={{ border: 0, flex: 1, minHeight: "0", width: "100%" }}

        />
      )}
    </div>
  );
}

export default AccessiblePGH;