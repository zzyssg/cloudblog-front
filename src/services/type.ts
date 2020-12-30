import request from '@/utils/request';

export async function queryAllTypes(params : any) {
    return request("/app/blog-service/type/queryAllTypes"
        , {
            method : 'get',
            params
            
        });
}
export async function queryTypeByTypeId(params : any) {
    return request("/app/blog-service/type/queryTypeByTypeId"
        , {
            method : 'get',
            params
            
        });
}