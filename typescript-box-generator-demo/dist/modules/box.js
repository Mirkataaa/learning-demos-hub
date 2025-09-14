// define a set of named box sizes using TS's enum
// All enum by default are public and we cant change this 
var BoxSizes;
(function (BoxSizes) {
    BoxSizes[BoxSizes["Small"] = 40] = "Small";
    BoxSizes[BoxSizes["Medium"] = 80] = "Medium";
    BoxSizes[BoxSizes["Large"] = 120] = "Large";
    BoxSizes["BOMB"] = "BOMB";
})(BoxSizes || (BoxSizes = {}));
;
