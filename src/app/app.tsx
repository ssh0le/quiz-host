import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/dashboard.page';
import Multiplayer from '../pages/multiplayer.page';
import Settings from '../pages/settings.page';
import { PublicLayout } from './layouts/public-layout.layout';

const App = () => {
  return (
    <PublicLayout>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/multiplayer" element={<Multiplayer />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </PublicLayout>
  );
};

export default App;
