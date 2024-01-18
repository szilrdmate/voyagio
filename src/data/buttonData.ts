import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import {
  faUmbrellaBeach,
  faPersonBiking,
  faPersonHiking,
  faLandmark,
  faBook,
  faCloudMoon,
  faBagShopping,
  faSpa,
  faBurger,
  faUser,
  faUserGroup,
  faPeopleGroup,
  faHouseChimney,
} from "@fortawesome/free-solid-svg-icons";

const activities = [
    { name: "Beaches", icon: faUmbrellaBeach, value: "beaches" },
    { name: "Hiking", icon: faPersonHiking, value: "hiking" },
    { name: "Culture", icon: faBook, value: "culture" },
    { name: "Sports", icon: faPersonBiking, value: "sports" },
    { name: "Nightlife", icon: faCloudMoon, value: "nightlife" },
    { name: "Food Exploration", icon: faBurger, value: "food exploration" },
    { name: "Sightseeing", icon: faLandmark, value: "sightseeing" },
    { name: "Wellness", icon: faSpa, value: "wellness" },
    { name: "Shopping", icon: faBagShopping, value: "shopping" },
  ];

const budgetOptions = [
    {
      label: "Budget",
      value: "under a 1000$",
      range: "0 - 1000 USD",
      icon: faCreditCard,
    },
    {
      label: "Mid",
      value: "between 1000 and 2500$",
      range: "1000 - 2500 USD",
      icon: faCreditCard,
    },
    {
      label: "Luxury",
      value: "above 2500$",
      range: "2500+ USD",
      icon: faCreditCard,
    },
  ];

const groupOptions = [
    {
      label: "Solo",
      value: "solo traveller",
      icon: faUser,
    },
    {
      label: "Couple",
      value: "couple",
      icon: faUserGroup,
    },
    {
      label: "Friends",
      value: "group of friends",
      icon: faPeopleGroup,
    },
    {
      label: "Family",
      value: "family",
      icon: faHouseChimney,
    },
  ];

  export { activities, budgetOptions, groupOptions };
