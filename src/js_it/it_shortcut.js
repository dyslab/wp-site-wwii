import GetShortcutBody from './it_shortcut_body.js';
import OutputShortcut from '../js_common_base/common_shortcut.js';

OutputShortcut(
    'it', 
    GetShortcutBody(require('./it_shortcut.json')), 
    require('./it_menu.json')
);
