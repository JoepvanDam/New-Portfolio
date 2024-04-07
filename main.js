// Imports
import { switchProjects, openProject } from "./modules/projects.js";
import { toGmail, toLinkedIn, toGithub } from "./modules/links.js";
import animationSwitch from "./modules/animSwitch.js";
import languageSwitch from "./modules/langSwitch.js";
import { switchTabs } from "./modules/tabSwitch.js";
import stickyTalks from "./modules/stickyTalks.js";
import darkModeSwitch from "./modules/darkmode.js";
import setMoonPhase from "./modules/moonPhase.js";
import openSettings from "./modules/settings.js";
import { sendPlane } from "./modules/planes.js";
import updateDates from "./modules/dates.js";
import "./modules/scroll.js";

// Adding necessary functions to scope
window.updateStickyTalks = updateStickyTalks;
window.animationSwitch = animationSwitch;
window.updateLanguage = updateLanguage;
window.darkModeSwitch = darkModeSwitch;
window.switchProjects = switchProjects;
window.openSettings = openSettings;
window.openProject = openProject;
window.toLinkedIn = toLinkedIn;
window.switchTabs = switchTabs;
window.sendPlane = sendPlane;
window.toGithub = toGithub;
window.toGmail = toGmail;

// Global variables
var currentTalkNum = 0;
var currentLan = 0;

// Global functions
function updateStickyTalks(num) { currentTalkNum = num; stickyTalks(num, currentLan); }
function updateLanguage(num) { languageSwitch(num); currentLan = num; updateStickyTalks(currentTalkNum); }

// On start
// darkModeSwitch(true);
updateStickyTalks(0);
switchTabs(0);
switchProjects(0);
updateDates();