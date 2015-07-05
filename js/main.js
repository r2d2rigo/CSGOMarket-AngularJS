angular.module('CSGOMarket', []);
angular.module('CSGOMarket').controller('MainController', MainController);

function MainController($scope)
{
    $scope.Item = null;

    $scope.onValueChanged = function () {
        if ($scope.Item !== undefined && $scope.Finish !== undefined && $scope.Quality !== undefined) {

            $.get(
                'https://jsonp.afeld.me/?url=http%3A%2F%2Fsteamcommunity.com%2Fmarket%2Fpriceoverview%2F%3Fcurrency%3D3%26appid%3D730%26market_hash_name%3DP250%2520%7C%2520Steel%2520Disruption%2520%28Factory%2520New%29',
                function (result) {
                    $scope.Result = result;
                }
            );
        }
    };
}