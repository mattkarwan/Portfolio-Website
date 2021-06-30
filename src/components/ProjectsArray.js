import WantirnaDesktop_Large from '../assets/screenshots/wantirna_osteo/desktop_large.webp';
import wantirnaDesktop_Small from '../assets/screenshots/wantirna_osteo/desktop_small.jpg';
import WantirnaMobile_Large from '../assets/screenshots/wantirna_osteo/mobile_large.webp';
import wantirnaMobile_Small from '../assets/screenshots/wantirna_osteo/mobile_small.jpg';

import GladysDesktop_Large from '../assets/screenshots/gladys&jack/desktop_large.webp';
import GladysDesktop_Small from '../assets/screenshots/gladys&jack/desktop_small.jpg';
import GladysMobile_Large from '../assets/screenshots/gladys&jack/mobile_large.webp';
import GladysMobile_Small from '../assets/screenshots/gladys&jack/mobile_small.jpg';

import VillagersDesktop_Large from '../assets/screenshots/twelve_villagers/desktop_large.webp';
import VillagersDesktop_Small from '../assets/screenshots/twelve_villagers/desktop_small.webp';
import VillagersMobile_Large from '../assets/screenshots/twelve_villagers/mobile_large.webp';
import VillagersMobile_Small from '../assets/screenshots/twelve_villagers/mobile_small.webp';

import TurtleDesktop_Large from '../assets/screenshots/turtle/desktop_large.jpg';
import TurtleDesktop_Small from '../assets/screenshots/turtle/desktop_small.jpg';
import TurtleMobile_Large from '../assets/screenshots/turtle/mobile_large.jpg';
import TurtleMobile_Small from '../assets/screenshots/turtle/mobile_small.jpg';

export const projects = [
    {
        name : "Wantirna Osteopathy",
        description : "Design and creation of a new website for a local Osteopathy Clinic.",
        url : "https://wantirnaosteo.com.au/",
        desktopId : "wantirnaDesktop",
        desktopImg_large : WantirnaDesktop_Large,
        desktopImg_small : wantirnaDesktop_Small,
        mobileId : "wantirnaMobile",
        mobileImg_large : WantirnaMobile_Large,
        mobileImg_small : wantirnaMobile_Small, 
        color : "#1F3C59"
    },

    {
        name : "Gladys & Jack",
        description : "Fixing issues with Shopify website, custom JavaScript implementation, general site improvements for a local fragrance company.",
        url : "https://gladysandjack.com.au/",
        desktopId : "gladysDesktop",
        desktopImg_large : GladysDesktop_Large,
        desktopImg_small : GladysDesktop_Small,
        mobileId : "gladysMobile",
        mobileImg_large : GladysMobile_Large,
        mobileImg_small : GladysMobile_Small,
        color : "#3a3a3a"
    },

    {
        name : "Twelve Villagers",
        description : "Visualisation of the 'Twelve Villagers' riddle seen in Brooklyn Nine-Nine. Created with JavaScript as a personal project.",
        url : "https://mattkarwan.github.io/Twelve-Villagers/",
        desktopId : "villagersDesktop",
        desktopImg_large : VillagersDesktop_Large,
        desktopImg_small : VillagersDesktop_Small,
        mobileId : "villagersMobile",
        mobileImg_large : VillagersMobile_Large,
        mobileImg_small : VillagersMobile_Small,
        color : "#005FB8"

    },

    {
        name : "Turtle Broadband",
        description : <>Internet provider website concept written in PHP.<br />Submitted as my final project for CS50.<br />View on GitHub.</>,
        url : "https://github.com/mattkarwan/Turtle-Broadband",
        desktopId : "turtleDesktop",
        desktopImg_large : TurtleDesktop_Large,
        desktopImg_small : TurtleDesktop_Small,
        mobileId : "turtleMobile",
        mobileImg_large : TurtleMobile_Large,
        mobileImg_small : TurtleMobile_Small,
        color : "#1F3C59"
    }
]

export default projects;