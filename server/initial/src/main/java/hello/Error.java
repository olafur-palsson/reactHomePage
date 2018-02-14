package hello;

public class Error {

    private final long id;
    private final String content;

    public Error() {
        this.id = 1;
        this.content = "Swaglords server";
    }

    public long getId() {
        return id;
    }

    public String getContent() {
        return content;
    }
}
