var app = angular.module("blogApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "pages/home.html",
            controller: "HomeController"
        })
        .when("/post/:id", {
            templateUrl: "pages/post.html",
            controller: "PostController"
        })
        .otherwise({
            redirectTo: "/"
        });
});

app.controller("HomeController", function ($scope) {
    $scope.posts = [
        { id: 1, title: "First Post", content: "This is the first post." },
        { id: 2, title: "Second Post", content: "This is the second post." }
    ];
});

app.controller("PostController", function ($scope, $routeParams) {
    var postId = $routeParams.id;
    var posts = [
        { id: 1, title: "First Post", content: "This is the first post." },
        { id: 2, title: "Second Post", content: "This is the second post." }
    ];

    $scope.post = posts.find(post => post.id == postId);
});
