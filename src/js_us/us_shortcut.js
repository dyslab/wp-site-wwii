import GetShortcutBody from './us_shortcut_body.js';
import OutputShortcut from '../js_common_base/common_shortcut.js';

OutputShortcut(
    'us', 
    GetShortcutBody(require('./us_shortcut.json')), 
    require('./us_menu.json')
);
