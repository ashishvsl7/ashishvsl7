function FindSmoothPath (nodeArray, evenSpacing, dotDistance) {
    var nodeArray_ = nodeArray;
    var evenSpacing_ = (evenSpacing != undefined) ? evenSpacing : false;
    var dotDistance_ = (dotDistance != undefined) ? dotDistance : 10;
    var pathArray = [];
    var theAngle = 0;
    var percent = 0;
    var percentStepping = 0.05;
    var drawCurrentItem = 0;
    var stopRender = false;
    var dist;

    function Point(x, y){
        this.x = x || 0;
        this.y = y || 0;
    }

    var findDistance = function (_point1, _point2) {
        // returns the distance from _point1 to _point2
        var dx = _point1.x - _point2.x;
        var dy = _point1.y - _point2.y;
        return Math.floor(Math.sqrt(dx * dx + dy * dy));
    };

    var findTheAngle = function (point1, point2) {
        // find the angle between to points
        var px = point1.x - point2.x;
        var py = point1.y - point2.y;
        var radians = Math.atan2(py, px);
        return Math.floor(radians * 180 / Math.PI);
    };

    var findValue = function (point0, point1, point2, point3, time) {
        var timeSub = (1 - time);
        var returnVal = Math.pow(timeSub, 3) * point0;
        returnVal += 3 * time * Math.pow(timeSub, 2) * point1;
        returnVal += 3 * Math.pow(time, 2) * timeSub * point2;
        returnVal += Math.pow(time, 3) * point3;
        return returnVal;
    };

    while (!stopRender) {
        if (percent >= 1) {
            percent = 0;
            drawCurrentItem += 1;
            if (drawCurrentItem < nodeArray_.length - 1) {
                var subItem = nodeArray_[drawCurrentItem - 1];
                var firstItem = nodeArray_[drawCurrentItem];
                var secondItem = nodeArray_[(drawCurrentItem + 1)];
                var thirdItem = nodeArray_[(drawCurrentItem + 2)];
                if (thirdItem == null) {
                    theAngle = 0;
                    stopRender = true;
                } else {
                    var theSubAngle = findTheAngle(subItem, secondItem);
                    theAngle = findTheAngle(firstItem, thirdItem);
                    //findTheAngle (firstItem, thirdItem);
                    if (evenSpacing_) {
                        // calcuate the distance for a node stepping
                        dist = findDistance(firstItem, secondItem);
                        percentStepping = (dotDistance_ / dist)
                    }
                    var firstDist = findDistance(secondItem, subItem) * .15
                    var radians = theSubAngle / 180 * Math.PI;
                    var x0speed = Math.cos(radians) * firstDist;
                    var y0speed = Math.sin(radians) * firstDist;

                    var secondDist = findDistance(firstItem, thirdItem) * .15
                    radians = theAngle / 180 * Math.PI;
                    var xspeed = Math.cos(radians) * secondDist;
                    var yspeed = Math.sin(radians) * secondDist;
                    var node1 = new Point(firstItem.x - x0speed, firstItem.y - y0speed);
                    var node2 = new Point(secondItem.x + xspeed, secondItem.y + yspeed);
                }
            } else {
                stopRender = true;
            }
        } else {
            var _point = new Point()
            if (firstItem != null && secondItem != null && node1 != null && node2 != null) {
                _point.x = findValue(firstItem.x, node1.x, node2.x, secondItem.x, percent);
                _point.y = findValue(firstItem.y, node1.y, node2.y, secondItem.y, percent);
                pathArray.push(_point)
            }
        }
        percent += percentStepping
    }


    var me = {
        /**
         * Return the set of points that describe the trajectory between two points
         * @returns {Array}
         */
        getArrayOfPoints: function () {
            return pathArray;
        }
    };

    return me;
};