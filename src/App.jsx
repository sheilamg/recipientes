import VasoMarcas from "./components/VasoMarcas/VasoMarcas";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <VasoMarcas maximaCapacidad={3} />
        <VasoMarcas />
        <VasoMarcas />
      </div>
    </>
  );
}

export default App;
