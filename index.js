// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
   return Math.abs(42-distance)
};
function distanceFromHqInFeet(distance) {
    return distanceFromHqInBlocks(distance)*264
};
function distanceTravelledInFeet(start,destination) {
    return (Math.abs(start-destination))*264
};
function calculatesFarePrice(start,destination) {
    let fare
    if (distanceTravelledInFeet(start,destination)<=400) {
        return 0
    }
    else if (distanceTravelledInFeet(start,destination) > 400 && distanceTravelledInFeet(start, destination) <=2000) {
        return .02*(distanceTravelledInFeet(start,destination)-400)
    }
    else if (distanceTravelledInFeet(start,destination) > 2000 && distanceTravelledInFeet(start,destination) <= 2500)
    {
        return 25
    }
    else if (distanceTravelledInFeet(start,destination)>2500) {
        return "cannot travel that far"
    };
}