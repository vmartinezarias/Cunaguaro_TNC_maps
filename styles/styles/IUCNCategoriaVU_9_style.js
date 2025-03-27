var size = 0;
var placement = 'point';
function categories_IUCNCategoriaVU_9(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Aves':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [800, 800],
                  scale: 0.0275,
                  anchor: [400.0, 400.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/toucan-tropical-bird-svgrepo-com.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Amphibia':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [800, 800],
                  scale: 0.0275,
                  anchor: [400.0, 400.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/frog.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Mammalia':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [800, 800],
                  scale: 0.0275,
                  anchor: [400.0, 400.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/opossum-mammal-animal-silhouette-svgrepo-com.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Reptilia':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [800, 800],
                  scale: 0.0275,
                  anchor: [400.0, 400.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/lizard-facing-right-svgrepo-com.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Insecta':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [800, 800],
                  scale: 0.0275,
                  anchor: [400.0, 400.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/bug-svgrepo-com.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Testudines':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [800, 800],
                  scale: 0.0275,
                  anchor: [400.0, 400.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/turtle-4-svgrepo-com.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Agaricomycetes':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [800, 800],
                  scale: 0.0275,
                  anchor: [400.0, 400.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/mushroom-svgrepo-com.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Crocodylia':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [800, 800],
                  scale: 0.0275,
                  anchor: [400.0, 400.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/crocodile-2-svgrepo-com.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Cycadopsida':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [800, 800],
                  scale: 0.0275,
                  anchor: [400.0, 400.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/Plantae.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Lilipsida':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [800, 800],
                  scale: 0.0275,
                  anchor: [400.0, 400.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/Plantae_1.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Magnoliopsida':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [800, 800],
                  scale: 0.0275,
                  anchor: [400.0, 400.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/Plantae_2.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'PECES':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [800, 800],
                  scale: 0.0275,
                  anchor: [400.0, 400.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/fish-svgrepo-com.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Pinopsida':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [800, 800],
                  scale: 0.0275,
                  anchor: [400.0, 400.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/Plantae_3.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Polypodiopsida':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [800, 800],
                  scale: 0.0275,
                  anchor: [400.0, 400.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/Plantae_4.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_IUCNCategoriaVU_9 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("class");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_IUCNCategoriaVU_9(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
