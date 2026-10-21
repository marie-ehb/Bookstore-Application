import java.util.ArrayList;

public class User {
    private String username;
    private String password;
    private boolean isLoggedIn = false;
    private ArrayList<Book> listOfBooks = new ArrayList<>();
    private ArrayList<Review> listOfReviews = new ArrayList<>();
    
    public User(String username, String password)
    {
        this.username = username;
        this.password = password;
        listOfBooks.clear();
    }

    public String getUsername()
    {
        return this.username;
    }

    public String getPassword()
    {
        return this.password;
    }

    public void setUsername(String username)
    {
        this.username = username;
    }

    public void setPassword(String password)
    {
        this.password = password;
    }

    public void logIn(String username, String password)
    {
        if (this.username == username && this.password == password)
        {
            this.isLoggedIn = true;
        }
        else
        {
            System.out.println("Username or password is not valid");
        }
    }

    public void logOut()
    {
        this.isLoggedIn = false;
    }

    public void orderBook(Book book)
    {
        if (this.isLoggedIn & Catalogue.isInCatalogue(book))
        {
            Order order = new Order();
            this.listOfBooks.add(book);
        }
    }


        public void writeReview(Book book, Review review)
    {
        if (this.isLoggedIn && listOfBooks.contains(book) && review.getUser() == this)
        {
            this.listOfReviews.add(review);
            if (review.getBook() == book)
            {
              book.addReview(review);
            }
        }
    }

}
