pid_websersocket=$(pgrep -f "websersocket_581d5cdd-d53a-4500-a649-c85cef68c2f3.js")
watch -n 1 ps -p $pid_websersocket -o pid,etime,%cpu,%mem,cmd