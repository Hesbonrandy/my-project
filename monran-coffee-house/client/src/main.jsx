import Menu from './pages/Menu';
import MenuItemDetail from './pages/MenuItemDetail';
import CreateMenuItem from './pages/CreateMenuItem';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
    { path: 'menu', element: <Menu /> },
    { path: 'menu/new', element: <CreateMenuItem /> },
    { path: 'menu/edit/:id', element: <CreateMenuItem /> },
    { path: 'menu/:id', element: <MenuItemDetail /> },
    { path: 'events', element: <Events /> },
    { path: 'login', element: <Login /> }
  ]
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
  <RouterProvider router={router} />
</AuthProvider>
  </React.StrictMode>
);