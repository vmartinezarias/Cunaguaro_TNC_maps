var size = 0;
var placement = 'point';
function categories_RUNAP_7(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Áreas de Recreación':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(153,80,119,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(161,39,205,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Distritos de Conservación de Suelos':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(153,80,119,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(146,205,122,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Distritos Nacionales de Manejo Integrado':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(153,80,119,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(115,165,219,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Distritos Regionales de Manejo Integrado':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(153,80,119,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(239,43,59,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Parque Nacional Natural':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(153,80,119,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(206,21,147,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Parques Naturales Regionales':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(153,80,119,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(200,220,53,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Reserva Natural de la Sociedad Civil':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(153,80,119,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(41,15,208,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Reservas Forestales Protectoras Nacionales':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(153,80,119,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(38,210,196,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Reservas Forestales Protectoras Regionales':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(153,80,119,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(27,218,88,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_RUNAP_7 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("ap_categor");
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
    
    var style = categories_RUNAP_7(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
