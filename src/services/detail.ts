import request from '@/utils/request';

export async function queryBlogById({blogId} : any) {
    debugger
    return request(`/app/blog-service/blogs/queryBlogById/${blogId}`
        , {
            method : 'get',
            // params
            
        });
}

export async function frontLogin(params : any) {
    return request("/app/user-service/user/frontLogin"
        , {
            method : 'POST',
            data: {
                ...params,
                method: 'post',
              },
            
        });
}

export async function commitComment(params : any) {
    return request("/app/comment-service/comment/commit"
        , {
            method : 'POST',
            data: {
                ...params,
                method: 'post',
              },
            
        });
}