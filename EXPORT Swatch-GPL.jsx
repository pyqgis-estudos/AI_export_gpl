#target Illustrator

/*
* ----ABOUT------------
* This plugin for Adobe Illustrator aims to create a export method of 
* swatch (palette of colors) to the QGIS color file GLP. This format is 
* based on the GIMP Palette file. With this file is possible to load a
* color dataset into QGIS.
*
* ----WARING------------
* This code is experimental and for studing proporse. It was developed 
* with several others codes and references. It should not be used for
* commercial proporses.
*
* ----METADATA------------
* REPOSITORY: 
* CREATION DATE: 2020-10-18
* VERSION: 0.1
*
*/


// COLORS MODE: HEX , RGB , CMYK , HSL
// HEX -> RGB
// HEX -> CMYK
// RGB -> HEX ----DONE
// RGB -> CMYK
// CMYK -> HEX
// CMYK -> RGB

// Header for the GPL file
function header() {
    var header_lines = ["GIMP Palette", "Name: QGIS Palette", "Columns: 4", "#"];
    return header_lines
}


// Int Formatter
function padSpace( num, str_size, string_Pad) {
    var s = num.toString();
    // string_Pad = "0"
    while (s.length < str_size) {
        s = string_Pad + s};
    return s;
}


// Convert RBG to HEXADECIMAL
function rgb_2_hex(red_color, green_color, blue_color) {
    var rgb = [red_color, green_color, blue_color];
    var hex_code = "#";

    /*
    for (i=0; rgb.length; i++) {
        var i_hex = rgb[i].toString(16);
        hex_code = hex_code + i_hex;
    }
    */

    var h_red = red_color.toString(16);
    h_red = padSpace(h_red, 2, "0");

    var h_green = green_color.toString(16);
    h_gren = padSpace(h_green, 2, "0");

    var h_blue = blue_color.toString(16);
    h_blue = padSpace(h_blue, 2, "0");

    hex_code = hex_code + h_red + h_gren + h_blue;

    return hex_code
}


function main () {
    try {  
        if (app.documents.length > 0 ) {  

            // SAVE FOLDER
            var destFolder = null; 
            destFolder = Folder.selectDialog( 'Select folder for CSV output.', '~' );
            
            // 
            if (destFolder != null) {
                var idoc = app.activeDocument;  // Access the document
                var colr = idoc.swatches;  // Access all the swatches


                // INFO: Color informations
                var info = new Array();


                // ---- POPULATE INFO - CMYK or RGB modes ----
                // ColorMode: CMYK
                if(idoc.documentColorSpace == DocumentColorSpace.CMYK) {
                    //info.push("ID,C,M,Y,K");  OBSOLETE

                    for(var i = 0; i < colr.length; i++) {  // Swatches size
                        if(colr[i].color == "[CMYKColor]") {
                            var c = Math.round(colr[i].color.cyan);
                            var m = Math.round(colr[i].color.magenta);
                            var y = Math.round(colr[i].color.yellow);
                            var k = Math.round(colr[i].color.black);
                            info.push(c + " " + m + " " + y + " " + k);

                        }
                    }
                }
                
                // ColorMode: RGB
                if(idoc.documentColorSpace == DocumentColorSpace.RGB) {
                    for(var i = 0; i < colr.length; i++) {  // Swatches size
                        if(colr[i].color=="[RGBColor]") {
                            var r_int = Math.round(colr[i].color.red);
                            var g_int = Math.round(colr[i].color.green);
                            var b_int = Math.round(colr[i].color.blue);

                            var r = padSpace(r_int, 3, " ");
                            var g = padSpace(g_int, 3, " ");
                            var b = padSpace(b_int, 3, " ");

                            // var color_hex = rgb_2_hex(colr[i].color.red, colr[i].color.green, colr[i].color.blue);
                            var color_hex = rgb_2_hex(r_int, g_int, b_int);
                            // var color_hex = "TESTE";

                            info.push(r + " " + g + " " + b + "\t" + color_hex);

                        }
                    }
                }

                // FILENAME
                // var listName = idoc.name + ".csv";  // Filename same the project
                var listName = "SWATCH_exported" + ".gpl";
                var listfilepath = destFolder + "/" + listName;
                // FILE
                var ifile = new File(listfilepath);  //pass the file to a Variable
                var isOpen = ifile.open("w");  //open file for editing
                if (isOpen) {
                    ifile.seek(0,0);

                    // Write header
                    var header_file = header()
                    for(var j = 0; j < header_file.length; j++) {
                        ifile.writeln(header_file[j]);
                    }
                    

                    // Write the N colors
                    for(var j = 0; j < info.length; j++) {
                        ifile.writeln(info[j]);
                    }
                    ifile.close();
                }
                // COMPLETE: Ok!
                alert('Export Complete');
            } else{
                // COMPLETE: Abort
                alert('Export Aborted');
            }
        } else{
            // ERROR
            throw new Error('There are no documents open!');
        }
    }
    catch(e) {
        alert( e.message, "Script Alert", true);  
    }
}  // end main

main()