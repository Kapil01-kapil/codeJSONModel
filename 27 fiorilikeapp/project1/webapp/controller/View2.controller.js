sap.ui.define([
    "sap/ui/core/mvc/Controller",
     "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel) {
        "use strict";
       
        return Controller.extend("project1.controller.View2", {
            onInit: function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("RouteView2").attachMatched(this._onRouteMatched, this);
            },
            _onRouteMatched: function(oEvent) {
            const emailId =   oEvent.getParameters().arguments
            console.log("emailId",emailId);
                var oModel = this.getView().getModel("viewData");
               
                console.log("oModessl==>",oModel);
                const aaModel = new JSONModel(oModel.oData);
                this.getView().setModel(aaModel, "viewData");
            }
        });
    });
