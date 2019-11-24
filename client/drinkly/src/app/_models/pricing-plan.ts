
export interface PricingPlan{
    id: string
    name: string
    description: string
    price: string
    currency: string
}

export class PricingPlanMapper{
    static fromJson(data:any) : PricingPlan{
        return {
            id: data['id'],
            name : data['name'],
            description: data['description'],
            price: data['price'],
            currency: data['currency']
        }
    }

    static fromJsonArray(data:any): PricingPlan[]{
        return data &&
               data.map(plan=> PricingPlanMapper.fromJson(plan))
    }
}