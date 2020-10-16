import React from 'react';
import Layout from './components/Layout/Layout';
import AppBuilder from './containers/AppBuilder/AppBuilder';

function App() {
  return (
    <div>
      <Layout>
        <AppBuilder />
      </Layout>
    </div>
  );
}

export default App;
