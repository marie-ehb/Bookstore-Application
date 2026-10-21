import java.util.HashSet;

public class Catalogue {
    private static HashSet <Book> catalogue = new HashSet<>();

    public static void addBook(Book book)
    {
       if (!catalogue.contains(book))
       {
        catalogue.add(book);
       }
    }

    public static void removeBook(Book book)
    {
        if (catalogue.contains(book))
        {
            catalogue.remove(book);
        }
    }

    public static boolean isInCatalogue(Book book)
    {
        return catalogue.contains(book);
    }

    public static void emptyCatalogue()
    {
        if (catalogue.size() != 0)
        {
            catalogue.clear();
        }
    }

    public static int sizeOfCatalogue()
    {
        return catalogue.size();
    }

    public static int howManyInStock()
    {   int stock = 0;
        for (Book book : catalogue)
        {
            stock += book.getStock();
        }
        return stock;
    }

    public static String showCatalogue()
    {
        String catalogueDescription = "";
        for (Book book : catalogue)
        {
            catalogueDescription += "Title: " + book.getTitle()
            + "\n" + "Author: " + book.getAuthor()
            + "\n" + "ISBN: " + book.getISBN()
            + "\n" + "Price: " + book.getPrice()
            + "\n" + "Description: " + book.getDescription() 
            + "\n";
        }
        return catalogueDescription;
    } 


}
