import com.sun.net.httpserver.HttpServer;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpExchange;
import java.io.*;
import java.net.InetSocketAddress;
import java.util.HashMap;
import java.util.Map;

public class a {
    private static final int PORT = 3001;

    public static void main(String[] args) throws Exception {
        // Start HTTP server
        HttpServer server = HttpServer.create(new InetSocketAddress(PORT), 0);
        server.createContext("/products", new ProductsHandler());
        server.setExecutor(null); // creates a default executor
        server.start();
        System.out.println("Server is running on port 3000");
    }

    static class ProductsHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            if ("GET".equals(exchange.getRequestMethod())) {
                // Retrieve products from database
                Map<String, Object> products = new HashMap<>();
                products.put("product_1", new Product("https://m.media-amazon.com/images/I/71uGU7evScL._AC_UF1000,1000_QL80_.jpg", "Kurkure", 20));
                products.put("product_2", new Product("https://5.imimg.com/data5/SELLER/Default/2022/7/MT/CN/UO/122190343/lays-blue-20-10pc-.jpg", "Lays", 25));
                products.put("product_3", new Product("https://images-cdn.ubuy.co.in/665406a018a71d03487d6aba-cheetos-crunchy-flamin-hot-cheese.jpg", "Cheetos", 30));
                products.put("product_4", new Product("https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTKFlM-7YFohKA04PmZfd8XsH79KXs1UeFtg5U7OgpDXMgTWnAuMskDRXGfcxdjCdz_C7ldMWcrJjaDI8wjaRsnhFfBOjYhBIzkQ-YdEfgL_2T70z2j-tTf&usqp=CAE", "Doritos", 35));
                products.put("product_5", new Product("https://rukminim1.flixcart.com/image/300/300/xif0q/chips/i/e/k/-original-imaggpg3z6kshykw.jpeg", "Uncle Chips", 15));
                products.put("product_6", new Product("https://m.media-amazon.com/images/I/71GvH9QK08L.jpg", "Pringles", 50));
                products.put("product_7", new Product("https://www.luckystore.in/cdn/shop/files/CocaColaOriginal250ML_imported.png?v=1722411776", "Coca Cola (imported) 250ml", 20));
                products.put("product_8", new Product("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwcvEsDSnMsTq_fyRAkxKVyJV0nZGhPc8Szw&s", "Haldiram Bhujia", 10));
                products.put("product_9", new Product("https://www.bigbasket.com/media/uploads/p/l/40186139_2-cornitos-nacho-chips-peri-peri.jpg", "Nachos", 40));
                products.put("product_10", new Product("https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Mama_instant_noodle_block.jpg/640px-Mama_instant_noodle_block.jpg", "noodles", 18));
                products.put("product_11", new Product("https://herbivo.in/wp-content/uploads/2023/08/sour-cream-1-825x1024.png", "Mojo", 22));
                products.put("product_13", new Product("https://m.media-amazon.com/images/I/61IhdI0oN8L._AC_UF1000,1000_QL80_.jpg", "Good Day", 20));
                products.put("product_14", new Product("https://www.jiomart.com/images/product/original/492577967/parle-hide-seek-chocolate-chip-cookies-400-g-product-images-o492577967-p590836230-0-202203150106.jpg", "Hide & Seek", 30));
                products.put("product_15", new Product("https://m.media-amazon.com/images/I/41x4l8FAtEL._SX300_SY300_QL70_FMwebp_.jpg", "Marie Gold", 12));
                products.put("product_16", new Product("https://www.bigbasket.com/media/uploads/p/xxl/302099-2_12-parle-20-20-butter-cookies.jpg", "20-20", 15));
                products.put("product_17", new Product("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjc0pNIr8s7-k_JVd3BAOULf-quOgwlpf8Rg&s", "Monaco", 10));
                products.put("product_18", new Product("https://5.imimg.com/data5/LV/XD/JW/SELLER-32943822/krack-jack-biscuits.jpg", "Krackjack", 20));
                products.put("product_19", new Product("https://m.media-amazon.com/images/I/615Qx1LqYCL._AC_UF1000,1000_QL80_.jpg", "Popcorn", 35));
                products.put("product_20", new Product("https://www.jiomart.com/images/product/original/492862122/yellow-diamond-cream-and-onion-potato-chips-100-g-product-images-o492862122-p602482594-0-202306211758.jpg", "Diamond Chips", 30));
                products.put("product_21", new Product("https://www.utzsnacks.com/cdn/shop/products/07084_Utz_15oz_PotatoStix_Canister.jpg?v=1605653127", "Potato Sticks", 15));
                products.put("product_22", new Product("https://m.media-amazon.com/images/I/61puk7SmEDL._AC_UF1000,1000_QL80_.jpg", "Piknik", 20));
                products.put("product_23", new Product("https://bazaar5.com/image/cache/catalog/pro/product/apiData/b06xy5h91m-kurkure-snacks-solid-masti-twisteez-90g-pack-of-2-promo-pack-0-320x320h.jpg", "Kurkure Solid Masti", 18));
                products.put("product_24", new Product("https://www.ruffles.com/sites/ruffles.com/files/2024-02/Ruffles%20ORIGINAL%202024.png", "Ruffles", 25));
                products.put("product_25", new Product("https://www.goldenwonder.com/wp-content/uploads/2021/12/fun-snax-tangy-toms-pack1.png", "Tangy Tom", 12));
                products.put("product_26", new Product("https://m.media-amazon.com/images/I/31w3jIGeLhL.jpg", "Wafers", 22));
                products.put("product_27", new Product("https://jagsfresh-bucket.s3.amazonaws.com/media/package/img_one/2020-10-16/Bingo_Mad_Angles_-_Mmmmm_Masala_72.5gm.jpg", "Mad Angles", 35));

                // Convert to JSON-like string
                String response = products.toString();
                exchange.getResponseHeaders().set("Content-Type", "application/json");
                handleCors(exchange);  // CORS headers
                exchange.sendResponseHeaders(200, response.getBytes().length);
                OutputStream os = exchange.getResponseBody();
                os.write(response.getBytes());
                os.close();
            } else {
                exchange.sendResponseHeaders(405, -1); // Method Not Allowed
            }
        }
    }

    static class Product {
        String img;
        String name;
        int price;

        Product(String img, String name, int price) {
            this.img = img;
            this.name = name;
            this.price = price;
        }

        @Override
        public String toString() {
            return "{\"img\":\"" + img + "\", \"name\":\"" + name + "\", \"price\":" + price + "}";
        }
    }

    // Method to set CORS headers
    private static void handleCors(HttpExchange exchange) {
        exchange.getResponseHeaders().add("Access-Control-Allow-Origin", "*");
        exchange.getResponseHeaders().add("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
        exchange.getResponseHeaders().add("Access-Control-Allow-Headers", "Content-Type");
        if ("OPTIONS".equals(exchange.getRequestMethod())) {
            try {
                exchange.sendResponseHeaders(204, -1); // No content for preflight
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
