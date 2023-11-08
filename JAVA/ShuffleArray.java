package JAVA;

import java.util.Arrays;
import java.util.Random;

public class ShuffleArray {

    static void randomize( int a[], int n){
        Random r = new Random();
        for(int i=n-1; i>0; i--){
            int j = r.nextInt(i+1);
            int t = a[i];
            a[i] = a[j];
            a[j] = t;
        }
    }

    public static void main(String[] args) {
        int a[] = {1,2,3,4,5,6,7};
        randomize(a, a.length);
        System.out.println(Arrays.toString(a));
    }
}
