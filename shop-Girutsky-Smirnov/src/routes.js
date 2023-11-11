import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Services from "./pages/Services";
import Tasks from "./pages/Tasks";
import About from "./pages/About";
import Vacancies from "./pages/Vacancies";
import { HOME_ROUTE, ABOUT_ROUTE, CONTACTS_ROUTE, SERVICES_ROUTE, TASKS_ROUTE, VACANCIES_ROUTE } from "./utils/consts";

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },

    {
        path: ABOUT_ROUTE,
        Component: About
    },

    {
        path: CONTACTS_ROUTE,
        Component: Contacts
    },

    {
        path: SERVICES_ROUTE,
        Component: Services
    },

    {
        path: TASKS_ROUTE,
        Component: Tasks
    },

    {
        path: VACANCIES_ROUTE,
        Component: Vacancies
    }
    
]


export const authRoutes = [
    {
        
    }
]