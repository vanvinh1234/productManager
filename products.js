let Product = function (name) {
    this.name = name;
    this.getName = function () {
        return this.name
    }
};

let App = function () {

    this.products = [];

    this.index = function () {
        document.getElementById("total-product").innerHTML = this.products.length + " products";
        let html = "";

        if (this.products.length > 0) {

            for (let i = 0; i < this.products.length; i++) {
                html += "<tr>";
                html += "<td>" + this.products[i].getName() + "</td>";
                html += "<td><button onclick='app.delete(" + i +")'>Delete</button></td>";
                html += "<td><button>Update</button></td>";
                html += "</tr>";
            }

            document.getElementById("list-product").innerHTML = html;
        } else {
            html += "<tr>";
            html += "<td colspan='3'>Khong co san pham nao</td>";
            html += "</tr>";
            document.getElementById("list-product").innerHTML = html;
        }
    };

    this.add = function () {
        let name = document.getElementById("name").value;
        let product = new Product(name);
        this.products.push(product);
        document.getElementById("name").value = "";
        this.index();
    };

    this.delete = function (index) {
        this.products.splice(index, 1);
        this.index();
    };

    this.update = function (index) {

    }

};

let app = new App();
app.index();