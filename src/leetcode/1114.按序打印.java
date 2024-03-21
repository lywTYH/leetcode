/*
 * @lc app=leetcode.cn id=1114 lang=java
 *
 * [680] 验证回文串 II
 */
// @lc code=start
class Foo {
    private final CountDownLatch firstJobDone ;
    private final CountDownLatch secondJobDone ;
    public Foo() {
      firstJobDone= new CountDownLatch(1);
      secondJobDone= new CountDownLatch(1);
    }

    public void first(Runnable printFirst) throws InterruptedException {

        // printFirst.run() outputs "first". Do not change or remove this line.
        printFirst.run();
        firstJobDone.countDown();
    }

    public void second(Runnable printSecond) throws InterruptedException {
        firstJobDone.await();
        // printSecond.run() outputs "second". Do not change or remove this line.
        printSecond.run();
        secondJobDone.countDown();
    }

    public void third(Runnable printThird) throws InterruptedException {
        secondJobDone.await();
        // printThird.run() outputs "third". Do not change or remove this line.
        printThird.run();
    }
}
// @lc code=end
