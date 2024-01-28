import { useState } from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { MyContext } from "./MyContext";
import Layout from './layouts/Layout';


const buildProvidersTree = (componentsWithProps) => {
  const initialComponent = ({ children }) => <>{children}</>;
  return componentsWithProps.reduce(
    (AccumulatedComponents, [Provider, props = {}]) => {
      // eslint-disable-next-line react/display-name, react/prop-types
      return ({ children }) => {
        return (
          <AccumulatedComponents>
            <Provider {...props}>{children}</Provider>
          </AccumulatedComponents>
        );
      };
    },
    initialComponent
  );
};

const queryClient = new QueryClient();

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const ProvidersTree = buildProvidersTree([
    [QueryClientProvider, { client: queryClient }],
    [MyContext.Provider, { value: { isSubmitted, setIsSubmitted } }],
  ]);

  return (
    <ProvidersTree>
      <Layout />
    </ProvidersTree>
  );
}

export default App;
