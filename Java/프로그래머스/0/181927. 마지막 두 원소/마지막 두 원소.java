import java.util.*;

class Solution {
    public int[] solution(int[] num_list) {
        int last = num_list[num_list.length - 1];
        int second_last = num_list[num_list.length - 2];
        
        int new_el = (last > second_last) ? (last - second_last) : (last * 2);
        int[] new_list = Arrays.copyOf(num_list, num_list.length + 1);
        new_list[new_list.length - 1] = new_el;
        
        return new_list;
    }
}