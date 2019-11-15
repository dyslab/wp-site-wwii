import GetShortcutBody from './fr_shortcut_body.js';
import OutputShortcut from '../js_common_base/common_shortcut.js';

OutputShortcut(
    'fr', 
    GetShortcutBody(require('./fr_shortcut.json')), 
    require('./fr_menu.json')
);
