import request from '@/utils/request';

export async function queryBlogsByYear(params : any) {
    return request("/app/blog-service/blogs/findAllBlogsByYear"
        , {
            method : 'get',
            params
            
        });
}