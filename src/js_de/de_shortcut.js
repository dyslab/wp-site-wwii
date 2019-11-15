import GetShortcutBody from './de_shortcut_body.js';
import OutputShortcut from '../js_common_base/common_shortcut.js';

OutputShortcut(
    'de', 
    GetShortcutBody(require('./de_shortcut.json')), 
    require('./de_menu.json')
);
