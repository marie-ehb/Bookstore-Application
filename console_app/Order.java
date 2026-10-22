import java.time.LocalDate;

public class Order {
    private LocalDate dueDate;
    

    public String orderBook(Book book)
    {
        if (book.getStock() > 0)
        {
            this.dueDate = LocalDate.now().plusDays(3);
            book.removeBookFromStock();
            return "Your book has been ordered. It will be available on " + this.dueDate + ".";
        }
        else
        {
            return "This book is currently not available.";
        }
    }
}
