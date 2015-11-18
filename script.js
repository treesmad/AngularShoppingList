var modupal = angular.module('aModule', []);

modupal.controller('aController', function($scope){
  $scope.groceries = [
    {item: 'Frozen Pizza', price: 3.99},
    {item: 'Apple', price: 0.99},
    {item: 'Cupcake', price: 2.99},
    {item:'Icecream', price: 5.99},
    {item:'Grapes', price: 1.99}
  ];
  $scope.graveyard=[];
      var total = 0;
      for(var i = 0; i < $scope.groceries.length; i++){
          total += $scope.groceries[i].price;
      }
      $scope.total = total;


  $scope.addNew = function () {
    $scope.groceries.push({
      item: $scope.groceryItem,
      price:$scope.groceryPrice
    });
    $scope.total += $scope.groceryPrice;
    $scope.groceryItem = "";
    $scope.groceryPrice = "";
  }

  $scope.removeThis = function(one) {
      $scope.graveyard.push($scope.groceries[one]);
      $scope.groceries.splice(one, 1);
      $scope.total -= $scope.graveyard[one].price;
    };
  });
