import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const lazy1 = lazy(() => import(/* webpackChunkName: "LazyHome" */'../dota/pages/Home/Home'));
const lazy2 = lazy(() => import(/* webpackChunkName: "LazyHeroPage" */'../dota/pages/HeroPage/HeroPage'));

export const routes: Route[] = [
    {
        to: '/',
        path: '/',
        Component: lazy1,
        name: 'Home'
    },
    {
        to: 'hero/:id',
        path: 'hero/:id',
        Component: lazy2,
        name: 'Hero Page'
    }
];