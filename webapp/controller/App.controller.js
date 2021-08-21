sap.ui.define([
	"sap/ui/core/mvc/Controller"
],//esto es un array de dependencias
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

        //Este controlador se extiende a la vista.
		return Controller.extend("pruebacli.pruebacli.controller.App", {
			onInit: function () {
                const oJSONModel = new sap.ui.model.json.JSONModel();
                const oView = this.getView();
                oJSONModel.loadData("./model/SelectionScreenMenu.json");
                oView.setModel(oJSONModel, "selectionScreen");
            },
            onFilter: function (oEvent) {

            },
            onClearFilter: function () {
                const oModelSelScreen = this.getView().getModel("selectionScreen");
                oModelSelScreen.setProperty("/ShipName", "");
                oModelSelScreen.setProperty("/CountryKey", "");  
            }
		});
    });
//13.- De la manera que esta instanciado en la linea no hace falta importar arriba la libreria.
//Porque cuando se instancia llama a la libreria.
