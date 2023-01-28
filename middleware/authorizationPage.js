import cookies from 'next-cookies'

export const unAuthorizationPage = ctx => {
    return new Promise(resolve => {
        const cookie = cookies(ctx)
        if (cookie.token) return ctx.res.writeHead(302, {
            Location: '/'
        }).end()
        return resolve('Unauthorization')
    })
}

export const authorizationPage = ctx => {
    return new Promise(resolve => {
        const cookie = cookies(ctx)
        if (!cookie.token) return ctx.res.writeHead(302, {
            Location: '/login'
        }).end()
        return resolve({
            token: cookie.token
        });
    })
}