angular.module('CSGOMarket', []);
angular.module('CSGOMarket').controller('MainController', MainController);

function MainController($scope)
{
    $scope.Item = null;

    $scope.onValueChanged = function () {
        if ($scope.Item !== undefined && $scope.Finish !== undefined && $scope.Quality !== undefined) {

            var requestUrl = "https://jsonp.afeld.me/?callback=?&url=";

            var urlParameter = "http://steamcommunity.com/market/priceoverview/?currency=2&appid=730&market_hash_name=";
            urlParameter = urlParameter.concat($scope.Item);
            urlParameter = urlParameter.concat(" | ");
            urlParameter = urlParameter.concat($scope.Finish);
            urlParameter = urlParameter.concat(" (");
            urlParameter = urlParameter.concat($scope.Quality);
            urlParameter = urlParameter.concat(")");

            urlParameter = encodeURIComponent(urlParameter);
            urlParameter = urlParameter.replace("(", "%28");
            urlParameter = urlParameter.replace(")", "%29");

            requestUrl = requestUrl.concat(urlParameter);

            $.getJSON(
                requestUrl,
                function (result) {
                    var text = document.createElement("textarea");
                    text.innerHTML = result.median_price;

                    $scope.Result = text.value;
                }
            );
        }
    };
}