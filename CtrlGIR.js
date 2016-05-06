var a = angular.module("myapp", []);
a.controller('cartctrl', function ($scope) {

    //set item name
    $scope.item1 = "Apple Watch Band";
    $scope.item2 = "BlackBerry STR100-2";
    $scope.item3 = "Epson Projector";
    $scope.item4 = "Huawei GX8";
    $scope.item5 = "iPhone 6s Plus Case";
    $scope.item6 = "Jarv FLIGHT In-Ear";
    $scope.item7 = "Netgear Extender";
    $scope.item8 = "RAV wireless charger";

    //set scope of items price and quantity
    $scope.price1 = 399.99;
    $scope.price2 = 199.99;
    $scope.price3 = 799.99;
    $scope.price4 = 145.99;
    $scope.price5 = 9.97;
    $scope.price6 = 74.49;
    $scope.price7 = 139.99;
    $scope.price8 = 61.67;
    $scope.qty1 = 1;
    $scope.qty2 = 1;
    $scope.qty3 = 1;
    $scope.qty4 = 1;
    $scope.qty5 = 1;
    $scope.qty6 = 1;
    $scope.qty7 = 1;
    $scope.qty8 = 1;
    $scope.totalitems = 0;
    $scope.totalprice = 0;

    $scope.items = [];

    //set view of cart elements initially
    $scope.cartelements = true;
    $scope.emptycart = true;

    //add to cart 
    $scope.addtocart = function (name, qty, price, id) {
        $scope.name = name;
        $scope.totalitems += qty;
        $scope.totalprice += (qty * price);

        $scope.tax = 0.13 * $scope.totalprice;
        $scope.shipping = 10.99;
        $scope.subtotal = $scope.totalprice + $scope.tax + $scope.shipping;

        $scope.items.push({
            name,
            qty,
            price,
            totalprice: qty * price,
                id

        });

        //set view of cart elements after items are added
        $scope.cartelements = false;
        $scope.emptycart = false;
    }

    //subtract the quantity from total items, when Remove Item(s) is clicked
    $scope.emptybox = function (name, qty, price) {
        $scope.totalitems -= qty;
        $scope.totalprice -= (qty * price);

        var index = -1;
        for (index in $scope.items) {
            if ($scope.items[index].name == name) {
                $scope.items.splice(index, 1);
                $scope.calc();
            }
        }
    }

    //remove the item from cart page, subtracting the tax and with new subtotal
    $scope.removefromcart = function (index) {



        price = $scope.items[index].price;
        qty = $scope.items[index].qty;
        name = $scope.items[index].name;


        //set the buttons at home page to reset, when item is removed from cart.
        //working = $scope.items[index].id => add2 => string , identifier of variable
        // $scope['beforeadd2']=false
        $scope[$scope.items[index].id] = false;

       for(var i = 1; i<=8; i++){
          if($scope.name == $scope.items[i - 1].name){
             $scope['qty' + i] = 1;
          }
       }

        $scope.items.splice(index, 1);
        $scope.totalitems -= qty;
        $scope.totalprice -= (qty * price);
        $scope.calc();
    }

    //calculate the tax, shipping and subtotal
    $scope.calc = function () {
        $scope.tax = 0.13 * $scope.totalprice;
        if ($scope.tax == 0) {
            $scope.shipping = 0;
            //redirect to home page when all items from cart are removed
            $scope.newcartmsg = true;
            setTimeout("location.href = 'GIR.html'", 1300);
            //set view of cart elements after items are removed
            $scope.cartelements = true;
            $scope.emptycart = true;
        } else {
            $scope.shipping = 10.99;
        }
        $scope.subtotal = $scope.totalprice + $scope.tax + $scope.shipping;
    }

    //toggle product page and cart page with click of buttons
    $scope.prodpage = true;
    $scope.cartpg = function () {
        $scope.cartpage = true;
        $scope.prodpage = false;
    }

    $scope.prod = function () {
        $scope.prodpage = true;
        $scope.cartpage = false;
    }

});

//toggle Add to cart button after clicking it, for item 1
//$scope.afteradd1 = false;
//$scope.beforeadd1 = true;
//$scope.showhidetoggle1 = function () {
//    $scope.afteradd1 = !$scope.afteradd1;
//    $scope.beforeadd1 = !$scope.beforeadd1;
//}

//not a good way to push values in a two dimentional array
//if ($scope.items.indexOf($scope.addtocart) < 0) {
//$scope.items.push({ name, qty, price }); 
//}

//else {
//    $scope.error = "xyz";
//    $scope.addtocart = "";
//}

//$scope.price1 = 100;
//$scope.price2 = 100;
//$scope.price3 = 100;
//$scope.price4 = 100;
//$scope.price5 = 100;
//$scope.price6 = 100;
//$scope.price7 = 100;
//$scope.price8 = 100;