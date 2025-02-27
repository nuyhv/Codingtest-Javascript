import java.util.stream.*;

public class Solution {
    public static String[] solution(String[] todo_list, boolean[] finished) {
        return IntStream.range(0, todo_list.length)
                .filter(i -> !finished[i])
                .mapToObj(i -> todo_list[i])
                .toArray(String[]::new);
    }
}
