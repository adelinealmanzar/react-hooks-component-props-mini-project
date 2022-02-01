import react from "react";
import Article from "./Article";

function ArticleList({posts}) {
    const eachPost = posts.map(post => {
        if (post.minutes <= 30) {
            let roundedNum = Math.ceil((post.minutes)/5)
            const emoji = '☕️'
            let emojis = emoji.repeat(roundedNum)
            return (
                <Article key={post.id} title={post.title} date={post.date} minutes={post.minutes} emojis={emojis} preview={post.preview} />
            )
        } else {
            let roundedNum = Math.ceil((post.minutes)/10)
            const emoji = '🍱'
            let emojis = emoji.repeat(roundedNum)
            return (
                <Article key={post.id} title={post.title} date={post.date} minutes={post.minutes} emojis={emojis} preview={post.preview} />
            )
        }
    })
    return (
        <main>{eachPost}</main>
    )
}

export default ArticleList;