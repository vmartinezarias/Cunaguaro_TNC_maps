var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Departamentos_2 = new ol.format.GeoJSON();
var features_Departamentos_2 = format_Departamentos_2.readFeatures(json_Departamentos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamentos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamentos_2.addFeatures(features_Departamentos_2);
var lyr_Departamentos_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Departamentos_2, 
                style: style_Departamentos_2,
                popuplayertitle: 'Departamentos',
                interactive: true,
                title: '<img src="styles/legend/Departamentos_2.png" /> Departamentos'
            });
var format_Puertos_3 = new ol.format.GeoJSON();
var features_Puertos_3 = format_Puertos_3.readFeatures(json_Puertos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puertos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puertos_3.addFeatures(features_Puertos_3);
var lyr_Puertos_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puertos_3, 
                style: style_Puertos_3,
                popuplayertitle: 'Puertos',
                interactive: true,
                title: '<img src="styles/legend/Puertos_3.png" /> Puertos'
            });
var format_CLOS_PESCADORES_4 = new ol.format.GeoJSON();
var features_CLOS_PESCADORES_4 = format_CLOS_PESCADORES_4.readFeatures(json_CLOS_PESCADORES_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CLOS_PESCADORES_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLOS_PESCADORES_4.addFeatures(features_CLOS_PESCADORES_4);
var lyr_CLOS_PESCADORES_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLOS_PESCADORES_4, 
                style: style_CLOS_PESCADORES_4,
                popuplayertitle: 'CLOS_PESCADORES',
                interactive: true,
                title: '<img src="styles/legend/CLOS_PESCADORES_4.png" /> CLOS_PESCADORES'
            });
var format_CLOS_LLANEROS_DE_CERRO_5 = new ol.format.GeoJSON();
var features_CLOS_LLANEROS_DE_CERRO_5 = format_CLOS_LLANEROS_DE_CERRO_5.readFeatures(json_CLOS_LLANEROS_DE_CERRO_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CLOS_LLANEROS_DE_CERRO_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLOS_LLANEROS_DE_CERRO_5.addFeatures(features_CLOS_LLANEROS_DE_CERRO_5);
var lyr_CLOS_LLANEROS_DE_CERRO_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLOS_LLANEROS_DE_CERRO_5, 
                style: style_CLOS_LLANEROS_DE_CERRO_5,
                popuplayertitle: 'CLOS_LLANEROS_DE_CERRO',
                interactive: true,
                title: '<img src="styles/legend/CLOS_LLANEROS_DE_CERRO_5.png" /> CLOS_LLANEROS_DE_CERRO'
            });
var format_CLOS_ARENEROS_6 = new ol.format.GeoJSON();
var features_CLOS_ARENEROS_6 = format_CLOS_ARENEROS_6.readFeatures(json_CLOS_ARENEROS_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CLOS_ARENEROS_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLOS_ARENEROS_6.addFeatures(features_CLOS_ARENEROS_6);
var lyr_CLOS_ARENEROS_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLOS_ARENEROS_6, 
                style: style_CLOS_ARENEROS_6,
                popuplayertitle: 'CLOS_ARENEROS',
                interactive: true,
                title: '<img src="styles/legend/CLOS_ARENEROS_6.png" /> CLOS_ARENEROS'
            });
var format_RUNAP_7 = new ol.format.GeoJSON();
var features_RUNAP_7 = format_RUNAP_7.readFeatures(json_RUNAP_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUNAP_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUNAP_7.addFeatures(features_RUNAP_7);
var lyr_RUNAP_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUNAP_7, 
                style: style_RUNAP_7,
                popuplayertitle: 'RUNAP',
                interactive: true,
    title: 'RUNAP<br />\
    <img src="styles/legend/RUNAP_7_0.png" /> Áreas de Recreación<br />\
    <img src="styles/legend/RUNAP_7_1.png" /> Distritos de Conservación de Suelos<br />\
    <img src="styles/legend/RUNAP_7_2.png" /> Distritos Nacionales de Manejo Integrado<br />\
    <img src="styles/legend/RUNAP_7_3.png" /> Distritos Regionales de Manejo Integrado<br />\
    <img src="styles/legend/RUNAP_7_4.png" /> Parque Nacional Natural<br />\
    <img src="styles/legend/RUNAP_7_5.png" /> Parques Naturales Regionales<br />\
    <img src="styles/legend/RUNAP_7_6.png" /> Reserva Natural de la Sociedad Civil<br />\
    <img src="styles/legend/RUNAP_7_7.png" /> Reservas Forestales Protectoras Nacionales<br />\
    <img src="styles/legend/RUNAP_7_8.png" /> Reservas Forestales Protectoras Regionales<br />' });
var format_TitulosMineros2024_8 = new ol.format.GeoJSON();
var features_TitulosMineros2024_8 = format_TitulosMineros2024_8.readFeatures(json_TitulosMineros2024_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitulosMineros2024_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitulosMineros2024_8.addFeatures(features_TitulosMineros2024_8);
var lyr_TitulosMineros2024_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitulosMineros2024_8, 
                style: style_TitulosMineros2024_8,
                popuplayertitle: 'TitulosMineros2024',
                interactive: true,
                title: '<img src="styles/legend/TitulosMineros2024_8.png" /> TitulosMineros2024'
            });
var format_IUCNCategoriaVU_9 = new ol.format.GeoJSON();
var features_IUCNCategoriaVU_9 = format_IUCNCategoriaVU_9.readFeatures(json_IUCNCategoriaVU_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IUCNCategoriaVU_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IUCNCategoriaVU_9.addFeatures(features_IUCNCategoriaVU_9);
var lyr_IUCNCategoriaVU_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IUCNCategoriaVU_9, 
                style: style_IUCNCategoriaVU_9,
                popuplayertitle: 'IUCN Categoria VU',
                interactive: true,
    title: 'IUCN Categoria VU<br />\
    <img src="styles/legend/IUCNCategoriaVU_9_0.png" /> Aves<br />\
    <img src="styles/legend/IUCNCategoriaVU_9_1.png" /> Amphibia<br />\
    <img src="styles/legend/IUCNCategoriaVU_9_2.png" /> Mammalia<br />\
    <img src="styles/legend/IUCNCategoriaVU_9_3.png" /> Reptilia<br />\
    <img src="styles/legend/IUCNCategoriaVU_9_4.png" /> Insecta<br />\
    <img src="styles/legend/IUCNCategoriaVU_9_5.png" /> Testudines<br />\
    <img src="styles/legend/IUCNCategoriaVU_9_6.png" /> Agaricomycetes<br />\
    <img src="styles/legend/IUCNCategoriaVU_9_7.png" /> Crocodylia<br />\
    <img src="styles/legend/IUCNCategoriaVU_9_8.png" /> Cycadopsida<br />\
    <img src="styles/legend/IUCNCategoriaVU_9_9.png" /> Lilipsida<br />\
    <img src="styles/legend/IUCNCategoriaVU_9_10.png" /> Magnoliopsida<br />\
    <img src="styles/legend/IUCNCategoriaVU_9_11.png" /> PECES<br />\
    <img src="styles/legend/IUCNCategoriaVU_9_12.png" /> Pinopsida<br />\
    <img src="styles/legend/IUCNCategoriaVU_9_13.png" /> Polypodiopsida<br />' });
var format_IUCNCategoriaEN_10 = new ol.format.GeoJSON();
var features_IUCNCategoriaEN_10 = format_IUCNCategoriaEN_10.readFeatures(json_IUCNCategoriaEN_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IUCNCategoriaEN_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IUCNCategoriaEN_10.addFeatures(features_IUCNCategoriaEN_10);
var lyr_IUCNCategoriaEN_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IUCNCategoriaEN_10, 
                style: style_IUCNCategoriaEN_10,
                popuplayertitle: 'IUCN Categoria EN',
                interactive: true,
    title: 'IUCN Categoria EN<br />\
    <img src="styles/legend/IUCNCategoriaEN_10_0.png" /> Aves<br />\
    <img src="styles/legend/IUCNCategoriaEN_10_1.png" /> Amphibia<br />\
    <img src="styles/legend/IUCNCategoriaEN_10_2.png" /> Mammalia<br />\
    <img src="styles/legend/IUCNCategoriaEN_10_3.png" /> Reptilia<br />\
    <img src="styles/legend/IUCNCategoriaEN_10_4.png" /> Insecta<br />\
    <img src="styles/legend/IUCNCategoriaEN_10_5.png" /> Testudines<br />\
    <img src="styles/legend/IUCNCategoriaEN_10_6.png" /> Agaricomycetes<br />\
    <img src="styles/legend/IUCNCategoriaEN_10_7.png" /> Crocodylia<br />\
    <img src="styles/legend/IUCNCategoriaEN_10_8.png" /> Cycadopsida<br />\
    <img src="styles/legend/IUCNCategoriaEN_10_9.png" /> Lilipsida<br />\
    <img src="styles/legend/IUCNCategoriaEN_10_10.png" /> Magnoliopsida<br />\
    <img src="styles/legend/IUCNCategoriaEN_10_11.png" /> PECES<br />\
    <img src="styles/legend/IUCNCategoriaEN_10_12.png" /> Pinopsida<br />\
    <img src="styles/legend/IUCNCategoriaEN_10_13.png" /> Polypodiopsida<br />' });
var format_IUCNCategoriaCR_11 = new ol.format.GeoJSON();
var features_IUCNCategoriaCR_11 = format_IUCNCategoriaCR_11.readFeatures(json_IUCNCategoriaCR_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IUCNCategoriaCR_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IUCNCategoriaCR_11.addFeatures(features_IUCNCategoriaCR_11);
var lyr_IUCNCategoriaCR_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IUCNCategoriaCR_11, 
                style: style_IUCNCategoriaCR_11,
                popuplayertitle: 'IUCN Categoria CR',
                interactive: true,
    title: 'IUCN Categoria CR<br />\
    <img src="styles/legend/IUCNCategoriaCR_11_0.png" /> Aves<br />\
    <img src="styles/legend/IUCNCategoriaCR_11_1.png" /> Amphibia<br />\
    <img src="styles/legend/IUCNCategoriaCR_11_2.png" /> Mammalia<br />\
    <img src="styles/legend/IUCNCategoriaCR_11_3.png" /> Reptilia<br />\
    <img src="styles/legend/IUCNCategoriaCR_11_4.png" /> Insecta<br />\
    <img src="styles/legend/IUCNCategoriaCR_11_5.png" /> Testudines<br />\
    <img src="styles/legend/IUCNCategoriaCR_11_6.png" /> Agaricomycetes<br />\
    <img src="styles/legend/IUCNCategoriaCR_11_7.png" /> Crocodylia<br />\
    <img src="styles/legend/IUCNCategoriaCR_11_8.png" /> Cycadopsida<br />\
    <img src="styles/legend/IUCNCategoriaCR_11_9.png" /> Lilipsida<br />\
    <img src="styles/legend/IUCNCategoriaCR_11_10.png" /> Magnoliopsida<br />\
    <img src="styles/legend/IUCNCategoriaCR_11_11.png" /> PECES<br />\
    <img src="styles/legend/IUCNCategoriaCR_11_12.png" /> Pinopsida<br />\
    <img src="styles/legend/IUCNCategoriaCR_11_13.png" /> Polypodiopsida<br />' });
var group_EspeciesAmenazadas = new ol.layer.Group({
                                layers: [lyr_IUCNCategoriaVU_9,lyr_IUCNCategoriaEN_10,lyr_IUCNCategoriaCR_11,],
                                fold: "open",
                                title: 'Especies Amenazadas'});
var group_ComunidadesLocalesdelaOrinoquia = new ol.layer.Group({
                                layers: [lyr_CLOS_PESCADORES_4,lyr_CLOS_LLANEROS_DE_CERRO_5,lyr_CLOS_ARENEROS_6,],
                                fold: "open",
                                title: 'Comunidades Locales de la Orinoquia'});
var group_CapasBase = new ol.layer.Group({
                                layers: [lyr_GoogleHybrid_0,lyr_OpenStreetMap_1,],
                                fold: "open",
                                title: 'CapasBase'});

lyr_GoogleHybrid_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_Departamentos_2.setVisible(true);lyr_Puertos_3.setVisible(false);lyr_CLOS_PESCADORES_4.setVisible(true);lyr_CLOS_LLANEROS_DE_CERRO_5.setVisible(true);lyr_CLOS_ARENEROS_6.setVisible(true);lyr_RUNAP_7.setVisible(false);lyr_TitulosMineros2024_8.setVisible(false);lyr_IUCNCategoriaVU_9.setVisible(false);lyr_IUCNCategoriaEN_10.setVisible(false);lyr_IUCNCategoriaCR_11.setVisible(false);
var layersList = [group_CapasBase,lyr_Departamentos_2,lyr_Puertos_3,group_ComunidadesLocalesdelaOrinoquia,lyr_RUNAP_7,lyr_TitulosMineros2024_8,group_EspeciesAmenazadas];
lyr_Departamentos_2.set('fieldAliases', {'dpto_ccdgo': 'dpto_ccdgo', 'dpto_cnmbr': 'dpto_cnmbr', 'dpto_nano_': 'dpto_nano_', 'dpto_cacto': 'dpto_cacto', 'dpto_nano': 'dpto_nano', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_Puertos_3.set('fieldAliases', {'qc_id': 'qc_id', 'name': 'name', });
lyr_CLOS_PESCADORES_4.set('fieldAliases', {'qc_id': 'qc_id', 'codigo_ver': 'codigo_ver', 'nom_dep': 'nom_dep', 'nomb_mpio': 'nomb_mpio', 'nombre_ver': 'nombre_ver', 'vigencia': 'vigencia', 'fuente': 'fuente', 'descripcio': 'descripcio', 'seudonimos': 'seudonimos', 'area_ha': 'area_ha', 'cod_dpto': 'cod_dpto', 'observacio': 'observacio', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'nombre_clo': 'nombre_clo', 'barrio': 'barrio', 'tipo_clo': 'tipo_clo', });
lyr_CLOS_LLANEROS_DE_CERRO_5.set('fieldAliases', {'qc_id': 'qc_id', 'codigo_ver': 'codigo_ver', 'nom_dep': 'nom_dep', 'nomb_mpio': 'nomb_mpio', 'nombre_ver': 'nombre_ver', 'vigencia': 'vigencia', 'fuente': 'fuente', 'descripcio': 'descripcio', 'seudonimos': 'seudonimos', 'area_ha': 'area_ha', 'cod_dpto': 'cod_dpto', 'observacio': 'observacio', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'nombre_clo': 'nombre_clo', 'barrio': 'barrio', 'tipo_clo': 'tipo_clo', });
lyr_CLOS_ARENEROS_6.set('fieldAliases', {'CODIGO_VER': 'CODIGO_VER', 'NOM_DEP': 'NOM_DEP', 'NOMB_MPIO': 'NOMB_MPIO', 'NOMBRE_VER': 'NOMBRE_VER', 'VIGENCIA': 'VIGENCIA', 'FUENTE': 'FUENTE', 'DESCRIPCIO': 'DESCRIPCIO', 'SEUDONIMOS': 'SEUDONIMOS', 'AREA_HA': 'AREA_HA', 'COD_DPTO': 'COD_DPTO', 'OBSERVACIO': 'OBSERVACIO', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'NOMBRE_CLO': 'NOMBRE_CLO', 'Barrio': 'Barrio', 'Tipo_CLO': 'Tipo_CLO', });
lyr_RUNAP_7.set('fieldAliases', {'qc_id': 'qc_id', 'ap_id': 'ap_id', 'condicion': 'condicion', 'ap_nombre': 'ap_nombre', 'ap_categor': 'ap_categor', 'fecha_insc': 'fecha_insc', 'fecha_regi': 'fecha_regi', 'organizaci': 'organizaci', 'nit': 'nit', 'area_ha_to': 'area_ha_to', 'area_ha_ma': 'area_ha_ma', 'area_ha_te': 'area_ha_te', 'area_ha__1': 'area_ha__1', 'area_ha__2': 'area_ha__2', 'area_ha__3': 'area_ha__3', 'territoria': 'territoria', 'sirap': 'sirap', 'url': 'url', 'wkid': 'wkid', 'territor_1': 'territor_1', });
lyr_TitulosMineros2024_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CODIGO_EXP': 'CODIGO_EXP', 'CODIGO_RMN': 'CODIGO_RMN', 'CODIGO_ANT': 'CODIGO_ANT', 'FECHA_INSC': 'FECHA_INSC', 'FECHA_TERM': 'FECHA_TERM', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_IUCNCategoriaVU_9.set('fieldAliases', {'gbifid': 'gbifid', 'year': 'year', 'phylum': 'phylum', 'class': 'class', 'order': 'order', 'family': 'family', 'genus': 'genus', 'verbatimscientificname': 'verbatimscientificname', 'iucnredlistcategory': 'iucnredlistcategory', });
lyr_IUCNCategoriaEN_10.set('fieldAliases', {'qc_id': 'qc_id', 'year': 'year', 'phylum': 'phylum', 'class': 'class', 'order': 'order', 'family': 'family', 'genus': 'genus', 'verbatimscientificname': 'verbatimscientificname', 'iucnredlistcategory': 'iucnredlistcategory', });
lyr_IUCNCategoriaCR_11.set('fieldAliases', {'gbifID': 'gbifID', 'year': 'year', 'phylum': 'phylum', 'class': 'class', 'order': 'order', 'family': 'family', 'genus': 'genus', 'verbatimScientificName': 'verbatimScientificName', 'iucnRedListCategory': 'iucnRedListCategory', });
lyr_Departamentos_2.set('fieldImages', {'dpto_ccdgo': 'TextEdit', 'dpto_cnmbr': 'TextEdit', 'dpto_nano_': 'Range', 'dpto_cacto': 'TextEdit', 'dpto_nano': 'Range', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_Puertos_3.set('fieldImages', {'qc_id': 'TextEdit', 'name': 'TextEdit', });
lyr_CLOS_PESCADORES_4.set('fieldImages', {'qc_id': 'Range', 'codigo_ver': 'TextEdit', 'nom_dep': 'TextEdit', 'nomb_mpio': 'TextEdit', 'nombre_ver': 'TextEdit', 'vigencia': 'TextEdit', 'fuente': 'TextEdit', 'descripcio': 'TextEdit', 'seudonimos': 'TextEdit', 'area_ha': 'TextEdit', 'cod_dpto': 'TextEdit', 'observacio': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'nombre_clo': 'TextEdit', 'barrio': 'TextEdit', 'tipo_clo': 'TextEdit', });
lyr_CLOS_LLANEROS_DE_CERRO_5.set('fieldImages', {'qc_id': 'TextEdit', 'codigo_ver': 'TextEdit', 'nom_dep': 'TextEdit', 'nomb_mpio': 'TextEdit', 'nombre_ver': 'TextEdit', 'vigencia': 'TextEdit', 'fuente': 'TextEdit', 'descripcio': 'TextEdit', 'seudonimos': 'TextEdit', 'area_ha': 'TextEdit', 'cod_dpto': 'TextEdit', 'observacio': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'nombre_clo': 'TextEdit', 'barrio': 'TextEdit', 'tipo_clo': 'TextEdit', });
lyr_CLOS_ARENEROS_6.set('fieldImages', {'CODIGO_VER': 'TextEdit', 'NOM_DEP': 'TextEdit', 'NOMB_MPIO': 'TextEdit', 'NOMBRE_VER': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FUENTE': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'SEUDONIMOS': 'TextEdit', 'AREA_HA': 'TextEdit', 'COD_DPTO': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'NOMBRE_CLO': 'TextEdit', 'Barrio': 'TextEdit', 'Tipo_CLO': 'TextEdit', });
lyr_RUNAP_7.set('fieldImages', {'qc_id': 'TextEdit', 'ap_id': 'Range', 'condicion': 'TextEdit', 'ap_nombre': 'TextEdit', 'ap_categor': 'TextEdit', 'fecha_insc': 'DateTime', 'fecha_regi': 'TextEdit', 'organizaci': 'TextEdit', 'nit': 'TextEdit', 'area_ha_to': 'TextEdit', 'area_ha_ma': 'TextEdit', 'area_ha_te': 'TextEdit', 'area_ha__1': 'TextEdit', 'area_ha__2': 'TextEdit', 'area_ha__3': 'TextEdit', 'territoria': 'TextEdit', 'sirap': 'TextEdit', 'url': 'TextEdit', 'wkid': 'TextEdit', 'territor_1': 'TextEdit', });
lyr_TitulosMineros2024_8.set('fieldImages', {'OBJECTID': '', 'CODIGO_EXP': '', 'CODIGO_RMN': '', 'CODIGO_ANT': '', 'FECHA_INSC': '', 'FECHA_TERM': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_IUCNCategoriaVU_9.set('fieldImages', {'gbifid': '', 'year': 'Range', 'phylum': 'TextEdit', 'class': 'TextEdit', 'order': 'TextEdit', 'family': 'TextEdit', 'genus': 'TextEdit', 'verbatimscientificname': '', 'iucnredlistcategory': '', });
lyr_IUCNCategoriaEN_10.set('fieldImages', {'qc_id': '', 'year': '', 'phylum': '', 'class': '', 'order': '', 'family': '', 'genus': '', 'verbatimscientificname': '', 'iucnredlistcategory': '', });
lyr_IUCNCategoriaCR_11.set('fieldImages', {'gbifID': '', 'year': '', 'phylum': '', 'class': '', 'order': '', 'family': '', 'genus': '', 'verbatimScientificName': '', 'iucnRedListCategory': '', });
lyr_Departamentos_2.set('fieldLabels', {'dpto_ccdgo': 'hidden field', 'dpto_cnmbr': 'inline label - always visible', 'dpto_nano_': 'hidden field', 'dpto_cacto': 'hidden field', 'dpto_nano': 'hidden field', 'shape_leng': 'hidden field', 'shape_area': 'hidden field', });
lyr_Puertos_3.set('fieldLabels', {'qc_id': 'hidden field', 'name': 'inline label - always visible', });
lyr_CLOS_PESCADORES_4.set('fieldLabels', {'qc_id': 'no label', 'codigo_ver': 'no label', 'nom_dep': 'no label', 'nomb_mpio': 'no label', 'nombre_ver': 'no label', 'vigencia': 'no label', 'fuente': 'no label', 'descripcio': 'no label', 'seudonimos': 'no label', 'area_ha': 'no label', 'cod_dpto': 'no label', 'observacio': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', 'nombre_clo': 'inline label - always visible', 'barrio': 'no label', 'tipo_clo': 'no label', });
lyr_CLOS_LLANEROS_DE_CERRO_5.set('fieldLabels', {'qc_id': 'no label', 'codigo_ver': 'no label', 'nom_dep': 'no label', 'nomb_mpio': 'no label', 'nombre_ver': 'no label', 'vigencia': 'no label', 'fuente': 'no label', 'descripcio': 'no label', 'seudonimos': 'no label', 'area_ha': 'no label', 'cod_dpto': 'no label', 'observacio': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', 'nombre_clo': 'inline label - always visible', 'barrio': 'no label', 'tipo_clo': 'no label', });
lyr_CLOS_ARENEROS_6.set('fieldLabels', {'CODIGO_VER': 'no label', 'NOM_DEP': 'no label', 'NOMB_MPIO': 'no label', 'NOMBRE_VER': 'no label', 'VIGENCIA': 'no label', 'FUENTE': 'no label', 'DESCRIPCIO': 'no label', 'SEUDONIMOS': 'no label', 'AREA_HA': 'no label', 'COD_DPTO': 'no label', 'OBSERVACIO': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'NOMBRE_CLO': 'inline label - always visible', 'Barrio': 'no label', 'Tipo_CLO': 'no label', });
lyr_RUNAP_7.set('fieldLabels', {'qc_id': 'no label', 'ap_id': 'no label', 'condicion': 'no label', 'ap_nombre': 'no label', 'ap_categor': 'no label', 'fecha_insc': 'no label', 'fecha_regi': 'no label', 'organizaci': 'no label', 'nit': 'no label', 'area_ha_to': 'no label', 'area_ha_ma': 'no label', 'area_ha_te': 'no label', 'area_ha__1': 'no label', 'area_ha__2': 'no label', 'area_ha__3': 'no label', 'territoria': 'no label', 'sirap': 'no label', 'url': 'no label', 'wkid': 'no label', 'territor_1': 'no label', });
lyr_TitulosMineros2024_8.set('fieldLabels', {'OBJECTID': 'no label', 'CODIGO_EXP': 'no label', 'CODIGO_RMN': 'no label', 'CODIGO_ANT': 'no label', 'FECHA_INSC': 'no label', 'FECHA_TERM': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_IUCNCategoriaVU_9.set('fieldLabels', {'gbifid': 'no label', 'year': 'no label', 'phylum': 'no label', 'class': 'no label', 'order': 'no label', 'family': 'no label', 'genus': 'no label', 'verbatimscientificname': 'no label', 'iucnredlistcategory': 'no label', });
lyr_IUCNCategoriaEN_10.set('fieldLabels', {'qc_id': 'no label', 'year': 'no label', 'phylum': 'no label', 'class': 'no label', 'order': 'no label', 'family': 'no label', 'genus': 'no label', 'verbatimscientificname': 'no label', 'iucnredlistcategory': 'no label', });
lyr_IUCNCategoriaCR_11.set('fieldLabels', {'gbifID': 'no label', 'year': 'no label', 'phylum': 'no label', 'class': 'no label', 'order': 'no label', 'family': 'no label', 'genus': 'no label', 'verbatimScientificName': 'no label', 'iucnRedListCategory': 'no label', });
lyr_IUCNCategoriaCR_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});