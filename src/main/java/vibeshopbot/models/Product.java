package vibeshopbot.models;

public class Product {
    private int id;
    private String name;
    private int price;
    private String category;
    private String imagePath; // новый параметр

    public Product(int id, String name, int price, String category, String imagePath) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.imagePath = imagePath;
    }

    public String getName() { return name; }
    public int getPrice() { return price; }
    public String getCategory() { return category; }
    public String getImagePath() { return imagePath; }

    @Override
    public String toString() {
        return name + " — " + price + " BYN";
    }
}
