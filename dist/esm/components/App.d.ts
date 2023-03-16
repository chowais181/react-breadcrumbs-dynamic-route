/// <reference types="react" />
export interface Route {
    name: string;
    url: string;
}
interface Breadcrumb {
    routes: Route[];
    containerClass?: string;
}
declare function Breadcrumbs({ routes, containerClass }: Breadcrumb): JSX.Element;
export default Breadcrumbs;
