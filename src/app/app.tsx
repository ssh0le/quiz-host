import { Routes, Route } from 'react-router-dom';
import { routes } from '@shared/constants/routes';
import Dashboard from '../pages/dashboard.page';
import DashboardDetail from '../pages/dashboard-detail.page';
import Multiplayer from '../pages/multiplayer.page';
import Settings from '../pages/settings.page';
import { PublicLayout } from './layouts/public-layout.layout';

const App = () => {
  return (
    <PublicLayout>
      <Routes>
        <Route path={routes.dashboard} element={<Dashboard />} />
        <Route path={routes.dashboardDetail} element={<DashboardDetail />} />
        <Route path={routes.multiplayer} element={<Multiplayer />} />
        <Route path={routes.settings} element={<Settings />} />
        <Route path={routes.root} element={<Dashboard />} />
      </Routes>
    </PublicLayout>
  );
};

export default App;
