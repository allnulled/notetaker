import WelcomeView from "./welcome/WelcomeView.vue";
import HomePage from "./pages/home-page/HomePage.vue";
import ProjectPage from "./pages/project-page/ProjectPage.vue";
import ContactPage from "./pages/contact-page/ContactPage.vue";
import SettingsPage from "./pages/settings-page/SettingsPage.vue";
import ZcomponentsSamplePage from "./pages/zcomponents-sample-page/zcomponents-sample-page.vue";

// @TODO: drop this line when you caught the thing:
import zcomponents from "./zcomponents/zcomponents.js";

export default {
    WelcomeView,
    HomePage,
    ProjectPage,
    ContactPage,
    SettingsPage,
    ...zcomponents,
    // @TODO: drop these 2 line too:
    ZcomponentsSamplePage
};