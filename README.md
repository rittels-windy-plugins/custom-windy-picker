# __custom-windy-picker__

This is a custom windy picker made for plugins.

It includes a drag listener and allows you to add content to the picker.  

## How to use it:

To installed it and add to `package.json`:

```
npm install custom-windy-picker
```  

In your plugin.svelte,  or any other modules where you need it:  

```
import { getPickerMarker } from 'custom-windy-picker';
const marker = getPickerMarker();
```
getPickerMarker creates a leaflet marker,  if it has not yet been made,  or gets it from `W.plugins['custom-picker-for-windy-plugins']`

`marker` then has the following methods:

- openMarker(latLon)
- removeMarker()
- getParams() : _returns latLon with source:  'custom-picker'.  If the picker is not open (!marker.isOpen),  will return null_
- destroyMarker() : _Called internally when custom-picker is no longer used.  Detected with checkIfMustClose()_
- onDrag(cbf,intv)
- offDrag(cbf)
- onOpen(cbf)
- offOpen(cbf)
- onClose(cbf)
- offClose(cbf)
- fillLeftDiv(string | html div element, pickerBckgCol = false ) : _If pickerBckgCol == true the right div will be grey,  otherwise transparent._
- fillRightDiv(string | html) : _Same as left,  only pickerBckgColor not needed._
- addLeftPlugin(plugin-name) : _A list of plugin names is maintained that uses the left side of the picker.  `addLeftPlugin` pushes the plugin name to the list.  This plugin then has priority to when using `fillLeftDiv`_
- remLeftPlugin(plugin-name) : _The plugin_name is removed from the list,  the next on the list now gets priority_
- getLeftPlugin(): returns plugin-name
- same for RightPlugin 

## Notes:

Opening,  moving or closing the plugin,  will also trigger the internal windy eventer,  thus will trigger `picker.on('opened', cbf)`  and `'closed'` and `'moved'`.   

If the picker.less is changed,  run less2css.js,  to write the new src/pickerCss.js.

You are welcome to use it,  but **if you change the code,  DO NOT attach it to `W.plugins['custom-picker-for-windy-plugins']`,  else you will mess up my plugins**.

If you use it in an embedded plugin,  there are some finicky things to be aware of,  see my `windy-plugin-demo`.


