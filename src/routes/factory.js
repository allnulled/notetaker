export default (components) => {
    return [
        {
            path: "/project/:id_project",
            component: components.ProjectPage,
        },
        {
            path: "/contact",
            component: components.ContactPage,
        },
        {
            path: "/settings",
            component: components.SettingsPage,
        },
        {
            path: "/zcomponents",
            component: components.ZcomponentsSamplePage,
        },
        {
            path: "/",
            component: components.HomePage,
        },
    ];
}