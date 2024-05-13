import { Box, Flex, Grid, GridItem, Show, HStack } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';
import GameHeading from './components/GameHeading';
import Footer from './components/Footer';

function App() {
    const [gameQuery, setGameQuery] = useState({});
    return (<Grid templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"`,
        }} templateColumns={{
            base: '1fr',
            lg: '250px 1fr',
        }}>
      <GridItem area="nav">
        <NavBar onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}/>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })} selectedGenre={gameQuery.genre}/>
        </GridItem>
      </Show>

      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery}/>
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })}/>
            </Box>
            <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })}/>
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery}/>
      </GridItem>
      <GridItem >
            <GridItem className=""></GridItem>
            <Footer />
          </GridItem>
    </Grid>);
}
export default App;
