class Solution {
    public int solution(int[] num_list) {
        int answer = 0;
        int sum = num_list[0], mul = num_list[0];
        
        for (int i = 1; i < num_list.length; i++) {
            mul *= num_list[i];
            sum += num_list[i];
        }
        
        if (mul < (sum * sum)) {
            return 1;
        }
        return answer;
    }
}