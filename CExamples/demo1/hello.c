#include <stdio.h>
#include <limits.h>
#include <stdint.h>
int x = 12; // 文件作用域

void increment(int *p)
{
  *p = *p + 1;
};


/**
 * 交换
*/
void Swap(int* i,int* j){
  int temp = *i;
  *i = *j;
  *j = temp;
}

int main()
{
  // int a, b, sum;
  // printf("input two int nums\n");
  // scanf("%d,%d", &a, &b);
  // sum = a + b;
  // printf("%d+%d=%d\n", a, b, sum);
  printf("%5d \n", 50);
  printf("%f \n", 123.0);
  printf("%.2f \n", 123.005);
  printf("%d \n", x);
  int i = 10;
  do
  {
    printf("%d ", i);
  } while (--i > 0);

  char a = 255;
  printf("%d \n", a);

  int ui = INT_MAX;
  printf("%d \n", ui);
  ui++;
  printf("%d \n", ui);

  int_fast8_t c = ui;
  printf("%zd \n", sizeof(c));


  int x = 1;
  printf("x's address is %p\n", &x);

  int aa = 12;
  increment(&aa);
  increment(&aa);
  printf("1122  %d \n", aa);


  int* p = NULL;
  int bb = 13;
  p = &bb;
  *p = 15;
  printf("bb: %d ,p: %d \n", bb, p);

  short* j;
  j = (short*)4662;
  j += 1;
  printf("j: %d \n", j);
  int jj = 5,kk=6;
  printf("jj: %d , kk:%d \n", jj,kk);
  Swap(&jj,&kk);
  printf("jj: %d , kk:%d \n", jj,kk);


  return 0;
}