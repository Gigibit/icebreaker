import * as moment from 'moment';


export function titleCaseWord(word: string) {
    if (!word) return word;
    return word[0].toUpperCase() + word.substr(1).toLowerCase();
  }

export function timeSince(date:string) {
    if(date) return moment.utc(date).fromNow()
    else return ""
}
export function isOnline(date: string){
  return date && moment(date).isAfter(moment.utc().subtract(15, 'minutes')) ;
}

export function age(date: string){
  return date ? "" + moment.utc().diff(date, 'years') : ""
}

export function getFormattedDistance(distance: number) : string{
  return distance ? distance >= 1000  ? `${Math.round(distance/10) / 100} km`.replace('.', ",") : `${distance} m` : ''
}
export function removeObjectFromArray(array: any[],obj:any): any[]{
    const index = array.indexOf(obj, 0);
    if (index > -1) {
      array.splice(index, 1);
    }
    return array;
  }
export function withCommaOrEmpty(str: string): string{
  return str && str.length > 0 ? str + ", " : ""
}

export function joinWithCommaOrEmpty(...str: string[]){
  if(!str || str.length < 0) return ""
  
  var res = ""
  for(var i = 0 ; i < str.length - 1 ; i++)
    res += withCommaOrEmpty(str[i])
  
  res += str[ str.length - 1 ]
  return res
}


export function getAppFormatDate(date){
  return  moment.utc(date).format('YYYY-MM-DD')
}

export function getErrorForCode(code: string){
  
  return code
}