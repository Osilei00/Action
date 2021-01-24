
var pfx="and"
var sfx=["o", "as", "a", "amos", "ais", "am"];

var rad=[
	["eu",pfx],
	["tu",pfx],
	["ele",pfx],
    ["nós",pfx],
    ["vós",pfx],
    ["eles",pfx]]

    for(var v=0;v<6;v++){
        for(var i=0;i<2;i++){

            document.write(rad[v][i]+" ")
        }
        document.write("<br>")
    }

    
/*var	cont;
var mochila=[
	["Corda",1],
	["Cura",10],
	["Lanterna",1],
	["Pilhas",20]
];

for(var l=0;l<4;l++){
	for (var c=0;c<2;c++){
		document.write(mochila[l][c]+" ");
	}
	document.write("<br>");
}	*/