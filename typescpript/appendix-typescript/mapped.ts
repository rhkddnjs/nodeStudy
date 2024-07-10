type Feature = {
    event: string;
    coupon:string;
}
// type FeaturePermission = {
//     event?:boolean;
//     coupon?:boolean;
// } => 맵트타입으로 변경
type FeaturePermission = {[ket in keyof Feature]?:boolean};