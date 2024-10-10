const config = {
    secret: '9238fSf9fAKckj332Knaksnf9012ADSN',
    env: process.env.ENV,
    port: 3000,
    db: {
        dbUrl: 'mongodb+srv://dmitriy-phoenix:d215237d@dmitriy.attsacm.mongodb.net/im?retryWrites=true&w=majority',
        dbName: 'diploma',
        dbHost: 'localhost',
        dbPort: 27017,
    },
    userCommentActions: {
        like: 'like',
        dislike: 'dislike',
        violate: 'violate',
    },
    requestTypes: {
        order: 'order',
        consultation: 'consultation',
    }
};

module.exports = config;