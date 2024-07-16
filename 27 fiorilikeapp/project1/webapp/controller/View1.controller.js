sap.ui.define([
    "sap/ui/core/mvc/Controller",
     "sap/ui/core/Fragment",
      "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Fragment, JSONModel) {
        "use strict";
        const users = [
            { email: "kapilvidua@gmail.com",
                 password: "kapil@34",  
                 name: "kapil",
                mobile: 9111606923, },
            { email: "kapilvidua001@gmail.com", password: "kapil@34",
                name: "kapil, vidua",
                mobile: 9111606924
             },
             {
                email: "kapilviduaManger@gmail.com", password: "kapil@34",
                name: "kapil dev vidua",
                mobile: 9111606925,
             }
        ];
        return Controller.extend("project1.controller.View1", {
            onInit: function () {
                var oModel = new JSONModel({
                    name: "",
                    email: ""
                });
                this.getView().setModel(oModel);
                console.log("oModel==>",oModel);
                oModel.setData({ message: "Condition is true!",   textStyle: "color: green; font-weight: bold;"});
            },
            onSubmitForm: function () {
                var oModel = this.getView().getModel();
                var oData = oModel.getData();
                console.log("Form Data:", oData);
            },
            onLogin: function () {
                const email = this.byId("emailInput").getValue();
                const password = this.byId("passwordInput").getValue();
               
                const user = users.find(u => u.email === email && u.password === password);
   
                if (user) {
                  
                  
                    if (email === "kapilviduaManger@gmail.com"  && password=== "kapil@34") {
                        var oModel = new sap.ui.model.json.JSONModel(users);
                        
                    
                        this.getOwnerComponent().setModel(oModel, "viewData")
                        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                        oRouter.navTo("RouteView2",user);
                     
                    } else {
                    
                        var Model = new sap.ui.model.json.JSONModel([user]);
                       
                        this.getOwnerComponent().setModel(Model, "viewData");
                        
                        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                      
                        oRouter.navTo("RouteView2",user);
                        
                    }
                    
                   
                } else {
                    sap.m.MessageToast.show("Invalid email or password.");
                }
            },
            handleSave:function(event){
               console.log("event==>",event); 
            },
      
            onOpenDialog: function () {
                if (!this._oDialog) {
                    // Load the fragment
                    Fragment.load({
                        name: "project1.view.MyFragment",
                        controller: this
                    }).then(function (oDialog) {
                        // Add the fragment to the view
                        this.getView().addDependent(oDialog);
                        this._oDialog = oDialog;
                        this._oDialog.open();
                    }.bind(this));
                } else {
                    this._oDialog.open();
                }
            },
            onCloseDialog: function () {
                this._oDialog.close();
            }
        });
    });
