public class Book {
    private final String ISBN, title, author;
    private String description;
    private double price;

    public Book(String ISBN, String title, String author)
    {
        this.ISBN = ISBN;
        this.title = title;
        this.author = author;
        this.price = 0.0;
        this.description = "";
    }

    public Book(String ISBN, String title, String author,double price)
    {
        this.ISBN = ISBN;
        this.title = title;
        this.author = author;
        this.price = price;
        this.description = "";
    }
    
    public Book(String ISBN, String title, String author, double price, String description)
    {
        this.ISBN = ISBN;
        this.title = title;
        this.author = author;
        this.price = price;
        this.description = description;
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
    // Setters
    public void setPrice(double price)
    {
        this.price = price;
    }
    public void setDescription(String description)
    {
       this.description = description;
    }
}
