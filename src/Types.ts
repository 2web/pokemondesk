export interface IAccMenu {
    [n: string]: () => JSX.Element;
}

export interface IGeneralMenu {
    title: string;
    link: string;
    component: () => JSX.Element;
}