
// const ScuberHeadQuarters=42
function distanceFromHqInBlocks(loc){
  if (loc >42){
    return loc -42;} {return 42-loc;
    }

  }

// console.log(distanceFromHqInBlocks(43, ScuberHeadQuarters))
// console.log(distanceFromHqInBlocks(50, ScuberHeadQuarters))
// console.log(distanceFromHqInBlocks(34, ScuberHeadQuarters))


function distanceFromHqInFeet(loc){ 
    return distanceFromHqInBlocks(loc)*264;
}

console.log(distanceFromHqInFeet(43))
console.log(distanceFromHqInFeet(50))
console.log(distanceFromHqInFeet(34))



function distanceTravelledInFeet(x,y){
  return ((Math.abs(x-y))*264);
};
console.log(distanceTravelledInFeet(43,48));
console.log(distanceTravelledInFeet(50,60));
console.log(distanceTravelledInFeet(34,28));


function calculatesFarePrice(start, destination){
    let calculatesFarePrice = (Math.abs(destination-start)*264);
    if ((calculatesFarePrice  <=400)){
    return 0 ;
    }  
    
    else if ((calculatesFarePrice  > 400) && (calculatesFarePrice  <2000)) {
      return 2.56;
    }
    else if ((calculatesFarePrice >= 2000) && (calculatesFarePrice <= 2500)){
      return 25;
    }
    else {
      return 'cannot travel that far';
    }
}
console.log(calculatesFarePrice(43,44))
console.log(calculatesFarePrice(34,32))
console.log(calculatesFarePrice(50,58))
console.log(calculatesFarePrice(34,24))
