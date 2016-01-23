﻿(function () {
    "use strict";

    angular.module("FoodList")
        .controller("NewFoodListController", NewFoodListController);

    NewFoodListController.$inject = ["$mdDialog","$q"];

    function NewFoodListController($mdDialog,$q) {
        var vm = this;
        vm.foodStorage = null;

        vm.btnSaveFoodListItem = btnSaveFoodListItem;
        vm.init = init;
        vm.initNewFoodStorage = initNewFoodStorage;

        //init
        vm.init().then(function(initResults) {
            vm.initNewFoodStorage();
        });

        //functions
        vm.hide = function () {
            $mdDialog.hide();
        };
        vm.cancel = function () {
            $mdDialog.cancel();
        };
        vm.answer = function (answer) {
            $mdDialog.hide(answer);
        };

        function btnSaveFoodListItem() {
            
        }

        function init() {
            var deferred = $q.defer();

            $q.all([])
                .then(function() {
                    var initResults = {

                    }
                    deferred.resolve(initResults);
                }, function(err) {
                    console.error("Azure error: " + err);
                });

            return deferred.promise;
        }

        function initNewFoodStorage() {
            vm.foodStorage = new FoodStorage();
        }
    }
})()