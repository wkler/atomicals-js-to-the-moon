#!/bin/bash

# 使用说明：
# 命令输入：./auto.sh 币种名称 挖矿费率 执行次数
# 例如： 在命令行输入   ./auto.sh qubit 55 10    意思是挖掘 qubit 代币，费率使用 55，连续执行 10 次。

# 注意不要动以下代码
# 获取指定的币种名称
COIN_NAME=$1
# 获取指定费率
FEE_RATE=$2
# 获取指定的执行次数
LOOP_COUNT=$3
# 指定输出的日志文件 记录交易相关信息
LOG_FILE="log.txt"

main(){
    echo "币种名称: $COIN_NAME"
    echo "使用费率(fee-rate): $FEE_RATE sats/vB"
    echo "循环次数: $LOOP_COUNT"
    echo "确认以上信息正确? (y/n)"
    read -r response
    if [[ $response =~ ^([yY][eE][sS]|[yY])$ ]]; then
        # 确认信息
        for (( i=1; i<$LOOP_COUNT+1; i++ ))
        do
            echo "这是第${i}次循环"
            # 执行命令
            yarn cli mint-dft $COIN_NAME --satsbyte $FEE_RATE
            echo "第${i}次循环结束 ..."
            # 等待多少秒再次执行 (可选)
            # sleep 1
        done
        echo "总循环执行完成"
    else
    echo "终止运行."
    fi
}
main | tee -a log.txt #将main函数的所有输出都打印到屏幕上并保存到文件中

