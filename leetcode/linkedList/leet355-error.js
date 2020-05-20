/**
 * Initialize your data structure here.
 */
var Twitter = function() {
    this.userIds = [];
    this.detail = {
        // 12: {
        //     news: [],
        //     follows: []
        // }
    };
};

/**
 * Compose a new tweet. 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    if (!this.userIds.includes(userId)) {
        this.userIds.push(userId)
        this.detail[userId] = {
            news: [],
            follows: []
        }
    }
    this.detail[userId].news.push(tweetId)
    // // 关注者
    // const otherUseIds = this.userIds.filter(u => {
    //     if (u !== userId) {
    //         return u
    //     }
    // })
    // for(let user of otherUseIds) {
    //     // console.log(user, JSON.stringify(this.detail), this.detail[user].follows.includes(userId));
    //     if (this.detail[user].follows.includes(userId)) {
    //         this.detail[user].news.push(tweetId)
    //     }
    // }
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent. 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    if (!this.userIds.includes(userId)) {
        return []
    }
    function formatArr(arr) {
        return [...arr].reverse().splice(0, 10)
    }
    const selfNews = formatArr(this.detail[userId].news)
    const otherNews = []
    // 关注者
    const otherUseIds = this.userIds.filter(u => {
        if (u !== userId) {
            return u
        }
    })
    for(let user of otherUseIds) {
        // console.log(user, JSON.stringify(this.detail), this.detail[user].follows.includes(userId));
        if (this.detail[userId].follows.includes(user)) {
            otherNews.push(...formatArr(this.detail[user].news))
        }
    }
    return [ ...otherNews, ...selfNews]
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    if (!this.userIds.includes(followerId)) {
        this.userIds.push(followerId)
        this.detail[followerId] = {
            news: [],
            follows: []
        }
    }
    this.detail[followerId].follows.push(followeeId)
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    const index = this.detail[followerId].follows.indexOf(followeeId)
    this.detail[followerId].follows.splice(index, 1)
};
