// Code your solution in this file!

function  distanceFromHqInBlocks(numberValue){
    if(numberValue < 42){
        return(42-numberValue);
    }
    else {
        return(numberValue-42);
    }
}

function distanceFromHqInFeet(numberValue){
    return distanceFromHqInBlocks(numberValue)*264;
}

function distanceTravelledInFeet(a,b){
    if (b>a){
      return((b-a)*264);
    }
    else
      return((a-b)*264);
  }

  function calculatesFarePrice(start,end){
    let distance = distanceTravelledInFeet(start,end);
    if (distance<= 400){
      return 0;
    }
    if (distance>=400 && distance<=2000){
      return (distance-400)* 0.02;
    }
    else if(distance>=2000&& distance<=2500){
      return 25;
    }
    else if (distance > 2500){
      return "cannot travel that far";
    }
  }