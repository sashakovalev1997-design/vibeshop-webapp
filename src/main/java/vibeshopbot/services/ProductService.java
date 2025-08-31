package vibeshopbot.services;

import vibeshopbot.models.Product;
import java.util.ArrayList;
import java.util.List;

public class ProductService {

    private final List<Product> products = new ArrayList<>();

    public ProductService() {
        // id, name, price, category, imagePath
        products.add(new Product(1, "Футболка", 20, "Футболки", "images/tshirt.jpg"));
        products.add(new Product(2, "Худи", 50, "Кофты", "images/hoodie.jpg"));
        products.add(new Product(3, "Сумка", 35, "Сумки", "images/bag.jpg"));
    }

    public List<Product> getProductsByCategory(String category) {
        List<Product> result = new ArrayList<>();
        for (Product p : products) {
            if (p.getCategory().equalsIgnoreCase(category)) {
                result.add(p);
            }
        }
        return result;
    }

    // Для всех товаров
    public List<Product> listAll() {
        return products;
    }
}
