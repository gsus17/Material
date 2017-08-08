var ContactManagerApp;
(function (ContactManagerApp) {
    var PeopleService = (function () {
        function PeopleService($q) {
            this.$q = $q;
            this.allImgs = [
                "http://www.fillmurray.com/200/200",
                "http://www.fillmurray.com/200/201",
                "http://www.fillmurray.com/200/202",
                "http://www.fillmurray.com/200/204",
                "http://www.fillmurray.com/200/206",
            ];
            this.imgs = [];
            this.selectedUser = null;
            this.users = [
                {
                    name: "Andrew Amernante",
                    rating: 3,
                    img: "http://www.fillmurray.com/200/200",
                    description: "Gluten­free cray cardigan vegan. Lumbersexual pork belly blog, fanny pack put a bird on it selvage",
                    likes: [
                        "Dogs",
                        "Long walks on the beach",
                        "Chopin",
                        "Tacos"
                    ],
                    dislikes: [
                        "Birds",
                        "Red things",
                        "Danish food",
                        "Dead Batteries"
                    ]
                },
                {
                    name: "Frank Wang",
                    rating: 5,
                    img: "http://www.fillmurray.com/200/201",
                    description: "Before errors, mails were only pressures. This is not to discredit the idea that a magic is the prose of anelizabeth. This could be, or perhaps some posit the outmost coil to be less than dedal. Some assert that those treatments are nothing more than carp.",
                    likes: [
                        "Frank",
                        "Manchester United",
                        "Football",
                        "Programming"
                    ],
                    dislikes: [
                        "Dogs",
                        "Long walks on the beach",
                        "Chopin",
                        "Tacos"
                    ]
                },
                {
                    name: "Sissi Chen",
                    rating: 5,
                    img: "http://www.fillmurray.com/200/202",
                    description: "Aaah! Natural light! Get it off me! Get it off me! Oh, loneliness and cheeseburgers are a dangerous mix. D'oh. Here's to alcohol, the cause of all life's problems.",
                    likes: [
                        "Cats",
                        "the beach",
                        "Chopin",
                        "Blue things"
                    ],
                    dislikes: [
                        "Birds"
                    ]
                },
                {
                    name: "Diego Garcia",
                    rating: 2,
                    img: "http://www.fillmurray.com/200/204",
                    description: "Facts are meaningless. You could use facts to prove anything that's even remotely true! I prefer a vehicle that doesn't hurt Mother Earth. It's a go­cart, powered by my ownsense of self­satisfaction. You don't win friends with salad.",
                    likes: [
                        "Talking Spanish",
                        "Spanish food",
                        "Spanish things",
                        "Football"
                    ],
                    dislikes: [
                        "Not talking spanish",
                        "Chopin"
                    ]
                },
                {
                    name: "Fuad Rashid",
                    rating: 4,
                    img: "http://www.fillmurray.com/200/206",
                    description: "Gluten­free cray cardigan vegan. Lumbersexual pork belly blog, fanny pack put a bird on it selvage",
                    likes: [
                        "Dogs",
                        "Long walks on the beach",
                        "Chopin",
                        "Tacos"
                    ],
                    dislikes: [
                        "Birds",
                        "Red things",
                        "Danish food",
                        "Dead Batteries"
                    ]
                }
            ];
        }
        PeopleService.prototype.loadAllUsers = function () {
            return this.$q.when(this.users);
        };
        PeopleService.$inject = ['$q'];
        return PeopleService;
    }());
    ContactManagerApp.PeopleService = PeopleService;
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=userService.js.map