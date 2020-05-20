/**
 * Initialize your data structure here.
 */
var Twitter = function() {
    this.users = new Map()
    this.news = [
        // [user, new]
    ]
};

/**
 * Compose a new tweet. 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    this.news.push([userId, tweetId])
    // console.log('post', JSON.stringify(this));
    
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent. 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    const followees = this.users.get(userId) || []
    const news = [...this.news]
    let index = news.length - 1
    let res = []
    // for (let index = len; index > -1 && res.length < 11; index--) {
    //     res.push[news[index]]
    // }
    while(index >= 0 && res.length < 11) {
        const [curAuthor, curNew] = news[index]
        if (curAuthor == userId || this.users.get(userId).includes(curAuthor)) {
            res.push(curNew)
        }
        index -= 1
    }
    return res
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    const allusers = [...this.users].map(d => d[0])
    if (!allusers.includes(followerId)) {
        this.users.set(followerId, [])
    }
    const followees = this.users.get(followerId) || []
    // this.users.set(followerId, followees)
    this.users.set(followerId, 6)
    console.log('follow', JSON.stringify(this));
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    const followees = this.users.get(followerId) || []
    const index = followees.indexOf(followeeId)
    if (index > 0) {
        followees.splice(index, 1)
    }
    this.users.set(followerId, followees)
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */

var obj = new Twitter()
console.log(obj.postTweet(1, 5));
console.log(obj.getNewsFeed(1));
console.log(obj.follow(1, 2));
console.log(obj.postTweet(2, 6));
console.log(obj.getNewsFeed(1));
// console.log(obj.unfollow(1, 2));
// console.log(obj.getNewsFeed(1));

// ["Twitter","postTweet","follow","follow","getNewsFeed","postTweet","getNewsFeed","getNewsFeed","unfollow","getNewsFeed","getNewsFeed","unfollow","getNewsFeed","getNewsFeed"]
// [[],         [1,5],     [1,2],     [2,1], [2],           [2,6],     [1],              [2],      [2,1],     [1],            [2],         [1,2],      [1],           [2]]


// [null,null,[5],null,null,[6,5],null,[5]]
 var testData = [
     {
        operation: ["Twitter","postTweet","getNewsFeed","follow","postTweet","getNewsFeed","unfollow","getNewsFeed"],
        detail: [[],[1,5],[1],[1,2],[2,6],[1],[1,2],[1]]
     }
 ]

// for (let item of testData) {
//     // console.log(item);
//     let res = []
//     for (let step in item.operation ) {
//         let obj
//         let operation = item.operation[step]
//         let detail = item.detail[step]
//         switch(operation) {
//             case 'postTweet':
//                 console.log(JSON.stringify(obj));
//                 // obj.postTweet(...detail)
//                 // res.push(obj.postTweet(...detail))
//                 break
//             case 'getNewsFeed':
//                 res.push(obj.getNewsFeed(...detail))
//                 break
//             case 'follow':
//                 res.push(obj.follow(...detail))
//                 break
//             case 'unfollow':
//                 res.push(obj.unfollow(...detail))
//                 break
//             default:
//                 obj = new Twitter()
//                 res.push(undefined)
//                 break
//         }
//     }
//     console.log(res);
    
    
// }