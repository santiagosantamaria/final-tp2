const axios = require("axios");
const chai = require("chai");

const { Post } = require("../db/models/");

const { assert } = chai;

describe("Post endpoint", function (done) {
    it("should get the same ammount of posts", function () {
        let posts = Post.findAll().then((posts) => {
            let result = axios({
                method: "get",
                url: "http://localhost:5555/posts",
            })
                .then((result) => {
                    assert.equal((result.length = posts.length));
                    done();
                })
                .catch((err) => {
                    done(err);
                });
        });
    });
});
