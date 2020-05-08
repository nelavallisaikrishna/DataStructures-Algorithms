
var exp = [
    "2052-10-20","1933-06-06","1960-05-26","1958-09-20","2068-03-16",
    "1912-05-25","2018-12-16","2061-12-26","2030-11-04","1963-07-28"]
function preprocessDate(dates) {
    // Write your code here
    console.log("dates : "+dates)
    console.log("exp : "+exp)
    var monthMap = {
        "Jan" : "01",
        "Feb" : "02",
        "Mar" : "03",
        "Apr" : "04",
        "May" : "05",
        "Jun" : "06",
        "Jul" : "07",
        "Aug" : "08",
        "Sep" : "09",
        "Oct" : "10",
        "Nov" : "11",
        "Dec" : "12"
    }
    var newDates=[]
    for(var i = 0; i < dates.length;i++){
        var dateFormat = ""
        var oneDate = dates[i].split(" ");

        dateFormat = dateFormat+ oneDate[2]+"-"
        dateFormat = dateFormat+ monthMap[oneDate[1]]+"-"
        var DayDate = oneDate[0].substring(0, oneDate[0].length - 2);
        if(DayDate.length < 2){
            DayDate = '0'+DayDate;
        }
        dateFormat = dateFormat+ DayDate
        newDates.push(dateFormat)
    }
    console.log("out : "+newDates)
    return newDates
}


preprocessDate([
    "20th Oct 2052",
    "6th Jun 1933",
    "26th May 1960",
    "20th Sep 1958",
    "16th Mar 2068",
    "25th May 1912",
    "16th Dec 2018",
    "26th Dec 2061",
    "4th Nov 2030",
    "28th Jul 1963"])



var exp = [8,2,2,
    4,
    4,
    1,
    1,
    1,
    5,
    5,
    5,
    5]
itemsSort(exp)
function itemsSort(items) {
    // Write your code here
    console.log("items,"+items)
    console.log("exp,"+exp)
    var n = items[0]
    var countMap={}
    var countValueMap={}
    for(var i = 0; i < items.length; i++){
        if(countMap[items[i]]){
            countMap[items[i]]++
        }else{
            countMap[items[i]] = 1
        }
    }


    var sortable = [];
    for (var oneKey in countMap) {
        sortable.push([oneKey, countMap[oneKey]]);
    }
    sortable.sort(function(a, b) {
        return a[1] - b[1];
    });

    var out =[];
    for(var i = 0 ;i < sortable.length;i++){
        for(var j = 0 ;j < sortable[i][1];j++){
            out.push(sortable[i][0])
        }
    }
    /*
      var out =[],sameValues =[];
      for(var key in countMap){
          if(countMap[key]>1){
              for(var j = 0 ; j < countMap[key];j++ ){
                  sameValues.push(parseInt(key))
              }
          }else{
            out.push(key)
          }
      }*/
    console.log("out,"+out)
    return out
}



