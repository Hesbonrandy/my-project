// Routes
{
  path: '/',
  element: <App />,
  children: [
    { index: true, element: <Home /> },          // NEW Home page
    { path: 'menu', element: <Menu /> },
    { path: 'menu/new', element: <CreateMenuItem /> },
    { path: 'menu/:id', element: <MenuItemDetail /> },
    { path: 'login', element: <Login /> }
  ]
}