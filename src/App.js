import "./styles.css";
import ContentLoader from "react-content-loader";

export default function App() {
  const Notes_Loader = () => (
    <ContentLoader
      speed={2}
      backgroundColor={"grey"}
      foregroundColor={"lightgrey"}
    >
      <rect x="0" y="0" rx="10" ry="10" width="180" height="90" />
    </ContentLoader>
  );

  const Notes_Data_Loader = () => (
    <ContentLoader
      speed={2}
      backgroundColor={"grey"}
      foregroundColor={"lightgrey"}
    >
      <rect x="0" y="0" rx="10" ry="10" width="180" height="40" />
      <rect x="0" y="50" rx="10" ry="10" width="180" height="100" />
    </ContentLoader>
  );
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Notes_Loader />
        <Notes_Loader />
        <Notes_Loader />
      </div>
      <div>
        <Notes_Data_Loader />
      </div>
    </div>
  );
}
