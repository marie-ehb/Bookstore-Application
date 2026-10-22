public class Review {
    private int score;
    private String text;
    private Book book;
    private User user;

    public void setScore(int score)
    {
        this.score = score;
    }

    public void setText(String text)
    {
        this.text = text;
    }

    public int getScore()
    {
        return this.score;
    }

    public String getText()
    {
        return this.text;
    }

    public Book getBook()
    {
        return this.book;
    }

    public User getUser()
    {
        return this.user;
    }
}
