// 通过：git status 查看当前文件状态
// 显示的装填：未被追踪的文件：untrack

// 可以使用 clear 清除屏幕信息

// 查看状态精简命令：git status -s
// ?? 这个表示当前文件未被追踪的意思

// 要添加追踪文件：git add 你要追踪的文件
// 其中可以先书写两个字母，然后摁下 tab 键，可以补齐路径
// A 表示当前文件已处于追踪文件了

// M 表示当前文件已经修改了

// git commit -m '描述信息'
// -m 就是表示 message 的意思，命令后面的描述信息，一定要写

// 暂存已修改的文件

/**
 * 复习：
 * 1、git init 初始化本地仓库，会生成 .git 隐藏文件
 * 2、git add 你要追踪的文件
 * 3、git status -s 查看状态
 * 4、git commit -m '描述信息'
 * 5、git add 你要追踪的文件
 * 6、git status -s -> M
 * 
 */

// 添加了个人 token