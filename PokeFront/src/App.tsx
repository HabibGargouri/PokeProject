import "bootstrap/dist/css/bootstrap.css";
import PokeList from "./routes/PokeList";
import PokePage from "./routes/PokePage";
import NotFound from "./routes/NotFound";
import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<PokeList  />} />
        <Route path="/pokemon/:id" element={<PokePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
