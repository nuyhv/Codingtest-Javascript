public class Solution {
    public static int solution(int[] num_list) {
        int odd_sum = 0;
        int even_sum = 0;
        
        for (int i = 0; i < num_list.length; i++) {
            if (i % 2 == 0) {
                odd_sum += num_list[i];
            } else {
                even_sum += num_list[i];
            }
        }
        
        return Math.max(odd_sum, even_sum);
    }
}
