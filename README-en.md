# EXPORT Swatch-GPL

This plugin for Adobe Illustrator aims to create a export method of swatch (palette of colors) to the QGIS color file GLP. This format is based on the GIMP Palette file. With this file is possible to load a color dataset into QGIS.

## METADATA

* Author: Marcelo Baliú Fiamenghi
* Creation Date: 2020-10-18
* Version: 0.1

## INSTALL

**INSTALL SCRIPT**: Move the JSX file into the folder: `C:\Program Files\Adobe\Adobe Illustrator <version>\Presets\en_US\Scripts`. Then reopen the Illustrator.

or

**LOAD-AND-USE**: In this case, it isn't necessery to install the script, just have to load when want to run the script. Go to `File > Scripts > Other Script...` and find the script file. It will run the script immediately.

## HOW TO USE

1. Organize the Swatch. All colors in the Swatch painel will be used. (only RGB color system is available)
2. Run the script, selecting it on `File > Scripts` or loading it.
3. Choose a folder to save the export file.
4. Done

Loading in QGIS

1. Go to `Selection a color Tab > Swatch > Project Colors`
2. Select the `...` buttom and the `Import Colors`
3. Choose the `SWATCH_exported.gpl` file