import java.math.BigInteger;

public class Solution {
    public int solution(String number) {
        BigInteger bigInt = new BigInteger(number);
        return bigInt.mod(BigInteger.valueOf(9)).intValue();
    }
}
