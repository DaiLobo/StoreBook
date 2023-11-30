import { Container } from "components/Container";
import { LatestReleases } from "components/LatestReleases";
import { Search } from "components/Search";

export const Home = () => {
  return (
    <Container>
      <Search />
      <LatestReleases />
    </Container>
  );
};
