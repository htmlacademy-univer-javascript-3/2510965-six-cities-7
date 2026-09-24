import MainPage from '../main-page/main-page';

interface AppProps {
  data: {
    offersCount: number;
    city: string;
  };
}

function App({ data }: AppProps) {
  return (
    <MainPage offersCount={data.offersCount} />
  );
}

export default App;
