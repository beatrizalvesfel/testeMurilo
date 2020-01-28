var app = angular.module("angular-tabela", []);
app.controller('AngularTabela', ['$scope', function($scope){

$scope.tabela = [];
$scope.row = "";


$scope.addRow = function(){

    $scope.tabela.push($scope.row);
    $scope.row = "";
    console.log($scope.tabela);
};

$scope.removeRow = function(index){

$scope.tabela.splice(index, 1);
};

}]);

