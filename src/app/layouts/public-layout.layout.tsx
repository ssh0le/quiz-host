import { ReactNode, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PageWrapper } from '@shared/ui';
import { routes } from '@shared/constants/routes';

const navLinks = [
  {
    title: 'Solo Quizzes',
    route: routes.dashboard,
    icon: '📚',
  },
  {
    title: 'Multiplayer',
    route: routes.multiplayer,
    icon: '👥',
  },
  {
    title: 'Settings',
    route: routes.settings,
    icon: '⚙️',
  },
];

const transitionDuration = 300;
const menuItemWidth = 48;

export const PublicLayout = ({ children }: { children: ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      // On mobile, close sidebar by default
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 relative">
      {/* Mobile Overlay */}
      {isMobile && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeSidebar}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`bg-gray-900 text-white overflow-hidden transition-all ease-in-out flex flex-col z-50 ${
          isMobile
            ? `fixed inset-y-0 left-0 ${
                isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
              }`
            : `relative ${isSidebarOpen ? 'w-64' : 'w-20'}`
        }`}
        style={{
          transitionDuration: `${transitionDuration}ms`,
        }}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          {isSidebarOpen && (
            <h1 className="text-xl font-bold text-white whitespace-nowrap">
              Quiz App
            </h1>
          )}
          <button
            onClick={toggleSidebar}
            className="p-1 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center"
            aria-label="Toggle sidebar"
            style={{
              width: `${menuItemWidth}px`,
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isSidebarOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.route;
              return (
                <li key={link.route}>
                  <Link
                    to={link.route}
                    onClick={closeSidebar}
                    className={`flex items-center gap-3 whitespace-nowrap rounded-lg transition-all duration-${transitionDuration} ease-in-out ${
                      isActive
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    } ${isSidebarOpen ? ' px-4 py-2' : 'px-0 py-1'}`}
                    title={!isSidebarOpen ? link.title : undefined}
                    style={{
                      transitionDuration: `${transitionDuration}ms`,
                    }}
                  >
                    <div
                      className={`text-2xl flex-shrink-0 flex items-center justify-center transition-width duration-${transitionDuration} ease-in-out`}
                      style={{
                        transitionDuration: `${transitionDuration}ms`,
                        width: `${menuItemWidth}px`,
                      }}
                    >
                      <span className="text-2xl flex-shrink-0">
                        {link.icon}
                      </span>
                    </div>
                    {isSidebarOpen && (
                      <span className={`font-medium `}>{link.title}</span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto w-full">
        {/* Mobile Menu Button */}
        {isMobile && (
          <div className="sticky top-0 z-30 bg-white border-b border-gray-200 lg:hidden">
            <button
              onClick={toggleSidebar}
              className="p-4 text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        )}
        <PageWrapper>{children}</PageWrapper>
      </main>
    </div>
  );
};
