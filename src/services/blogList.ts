import request from '@/utils/request';

export async function queryBlogList (params : any){
    // return request('/app/front/queryBlogList',
    return request('/app/blog-service/blogs/findAllBlogs',
        {
            method : 'post',
            data : {
                ...params
            }
        }
    );
}

export async function queryBlogsByTypeId ({typeId} : any){
    // return request('/app/front/queryBlogsByTypeId',
    debugger
    return request(`/app/blog-service/blogs/queryBlogsByTypeId/${typeId}`,
        {
            method : 'Get',
        }
    );
}