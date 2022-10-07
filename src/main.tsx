import ReactDOM from 'react-dom/client';
import Root from './pages/Root';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Router, { Route } from './components/Router';

const container = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(container).render(
  <Router>
    <Route path='/' component={<Root />} />
    <Route path='/about' component={<About />} />
    <Route path='*' component={<NotFound />} />
  </Router>
);
