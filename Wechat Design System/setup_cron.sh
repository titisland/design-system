#!/bin/bash
# 一键配置周报定时任务（每周一上午9点自动运行）
# 用法：在终端运行 bash setup_cron.sh

SCRIPT_PATH="/Users/TingSu/Documents/Claude/Projects/Wechat Design System/weekly_report_sender.py"
LOG_PATH="/Users/TingSu/Documents/Claude/Projects/Wechat Design System/cron.log"
CRON_MORNING="0 9 * * * /usr/bin/python3 \"$SCRIPT_PATH\" >> \"$LOG_PATH\" 2>&1"
CRON_EVENING="0 17 * * * /usr/bin/python3 \"$SCRIPT_PATH\" >> \"$LOG_PATH\" 2>&1"

echo "正在配置定时任务..."

# 读取当前 crontab，去重后追加两条新任务
(crontab -l 2>/dev/null | grep -v "weekly_report_sender"; echo "$CRON_MORNING"; echo "$CRON_EVENING") | crontab -

echo ""
echo "✅ 定时任务配置成功！"
echo ""
echo "📅 运行时间：每天 09:00 和 17:00"
echo "📄 日志文件：$LOG_PATH"
echo ""
echo "当前所有定时任务："
crontab -l
