import { Header } from "components/Header";
import { LatestReleases } from "components/LatestReleases";
import { Search } from "components/Search";
import styled from "styled-components";

const AppContainer = styled.div`
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589);
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Search />
      <LatestReleases />
    </AppContainer>
  );
}

export default App;
