export interface QueryFilter{
    enableWomen : boolean,
    enableMen : boolean,
    ageRange : {
        lower : number,
        upper : number
    },
    onlyOnline: boolean,
    nationality?: string,
}

export const FILTER_PREFERENCES_KEY = 'filterPreference'

export class QueryFilterUtils{
    static default(){
        return {
            enableWomen : true,
            enableMen : true,
            ageRange : {
                lower : 19,
                upper : 122
            },
            onlyOnline: false,
          }
    }
}