(function (window, document, undefined) {
    window.onload = run;
    function run() {
        var data = [
            {
                name: 'Settings Sync',
                description: 'Synchronize Settings, Snippets, Themes, File Icons, Launch, Keybindings, Workspaces and Extensions Across Multiple Machines Using GitHub Gist.',
                author: 'Shan Khan',
                url: 'https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync',
                installs: 3069953,
                stars: 674,
                price: 'Free',
                selector: 'extension1'
            },
            {
                name: 'Shopify Liquid Template Snippets',
                description: 'Shopify Liquid Template Snippets',
                author: 'Franky Lau',
                url: 'https://marketplace.visualstudio.com/items?itemName=killalau.vscode-liquid-snippets',
                installs: 87797,
                stars: 2,
                price: 'Free',
                selector: 'extension2'
            }
        ];

        function Package(data) {
            this.name = data.name;
            this.description = data.description;
            this.author = data.author;
            this.url = data.url;
            this.installs = data.installs;
            this.stars = data.stars;
            this.selector = data.selector;

            this.getFormattedAuthor = function () {
                return '<span> Author  : ' + this.author.toLocaleString() + '</span>';
            };

            this.getFormattedInstalls = function () {
                return '<span> Installs : ' + this.installs.toLocaleString() + '</span>';
            };
            this.getFormattedStars = function () {
                return '<span> Stars : ' + this.stars.toLocaleString() + '</span>';
            };
        }

        var getTodaysDate = function () {
            var today = new Date();
            return today.toDateString();
        }

        var getElement = function (id) {
            return document.getElementById(id);
        }

        var writePackageInfo = function (package) {
            var selector = package.selector;
            var nameElement = getElement(selector + '-name');
            var descElement = getElement(selector + '-description');
            var authElement = getElement(selector + '-author');
            var installElement = getElement(selector + '-installs');
            var starsElement = getElement(selector + '-stars');

            nameElement.innerHTML = package.name;
            descElement.innerHTML = package.description;
            authElement.innerHTML = package.getFormattedAuthor();
            installElement.innerHTML = package.getFormattedInstalls();
            starsElement.innerHTML = package.getFormattedStars();
        }

        var dateElement = getElement('date');
        dateElement.innerHTML = getTodaysDate();

        var authorElement = getElement('author');
        var topicElement = getElement('topic');

        authorElement.innerHTML = '<b>' + 'Sherise Prusinski' + '</b>';
        topicElement.innerHTML = '<i>' + 'Visual Studio Code IDE' + '</i>';

        for(var i=0; i < data.length ; i++) {
            var extension = new Package(data[i]);
            writePackageInfo(extension);
        }
    }
})(window, document, undefined);