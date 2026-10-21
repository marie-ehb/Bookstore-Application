import java.util.ArrayList;

public class Book {
    private final String ISBN, title, author;
    private String description;
    private double price;
    private int stock;
    private ArrayList <Review> listOfReviews = new ArrayList<>();

    public Book(String ISBN, String title, String author)
    {
        this.ISBN = ISBN;
        this.title = title;
        this.author = author;
        this.price = 0.0;
        this.description = "";
        this.stock = 1;
    }

    public Book(String ISBN, String title, String author,double price)
    {
        this.ISBN = ISBN;
        this.title = title;
        this.author = author;
        this.price = price;
        this.description = "";
        this.stock = 1;
    }
    
    public Book(String ISBN, String title, String author, double price, String description)
    {
        this.ISBN = ISBN;
        this.title = title;
        this.author = author;
        this.price = price;
        this.description = description;
        this.stock = 1;
    }
    
    public Book(String ISBN, String title, String author, int stock)
    {
        this.ISBN = ISBN;
        this.title = title;
        this.author = author;
        this.price = 0.0;
        this.description = "";
        this.stock = stock;
    }

    public Book(String ISBN, String title, String author,double price, int stock)
    {
        this.ISBN = ISBN;
        this.title = title;
        this.author = author;
        this.price = price;
        this.description = "";
        this.stock = stock;
    }

    public Book(String ISBN, String title, String author, double price, String description, int stock)
    {
        this.ISBN = ISBN;
        this.title = title;
        this.author = author;
        this.price = price;
        this.description = description;
        this.stock = stock;
    }
    // Getters
    public String getISBN()
    {
        return this.ISBN;
    }
    public String getTitle()
    {
        return this.title;
    }
    public String getAuthor()
    {
        return this.author;
    }
    public double getPrice()
    {
        return this.price;
    }
    public String getDescription()
    {
        return this.description;
    }
    public int getStock()
    {
        return this.stock;
    }

    // Setters
    public void setPrice(double price)
    {
        this.price = price;
    }
    public void setDescription(String description)
    {
       this.description = description;
    }

    // Methods
    public void addBookToStock()
    {
        this.stock++;
    }

    public void removeBookFromStock()
    {
        if (this.stock > 0)
        {
            this.stock--;
        }
    }

    public void addReview(Review review)
    {
        this.listOfReviews.add(review);
    }
}
