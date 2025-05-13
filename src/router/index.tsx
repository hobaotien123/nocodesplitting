import {createBrowserRouter} from 'react-router'
import Home from '../pages/Home'
import {queryClient} from '../queryClient'
import {movieDetailsLoader} from '../pages/MovieDetails/loader'
import About from '../pages/About'
import NotFound from '../pages/NotFound'
import MovieDetails from '../pages/MovieDetails'
import Movies from '../pages/Movies'

export const router = createBrowserRouter([
  {
    id: 'root',
    // element: <AppLayout />,
    children: [
      {
        id: 'home',
        path: '/',
        element: <Home />,
      },
      {
        id: 'about',
        path: '/about',
        element: <About />,
      },
      {
        id: 'movies',
        path: '/movies',
        element: <Movies />,
      },
      {
        id: 'movieDetail',
        path: '/movies/:id',
        loader: movieDetailsLoader(queryClient),
        element: <MovieDetails />,
      },
      {
        id: 'not-found',
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])
