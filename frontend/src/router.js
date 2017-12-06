import createRouter from 'router5';
import loggerPlugin from 'router5/plugins/logger';
import listenersPlugin from 'router5/plugins/listeners';
import browserPlugin from 'router5/plugins/browser';

const routes = [
    { name: 'landing-page', path: '/'},
    { name: 'users', path: '/users' }
];

export default function configureRouter() {
    const router = createRouter(routes, {
        defaultRoute: 'landing-page'
    })
        .usePlugin(loggerPlugin)
        .usePlugin(listenersPlugin())
        .usePlugin(browserPlugin({ useHash: false }));

    return router;
}
