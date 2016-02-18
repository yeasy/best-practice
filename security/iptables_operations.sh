#!/bin/bash

#github.com/yeasy
#This will make some secure protection using iptables. root privilege required.
#During the operation, the network connection may break.
#Please operate with console, and restart the iptables service at last.


echo "clean all rules"
iptables -F

echo "set default drop rule"
iptables -p INPUT DROP
iptables -p OUTPUT DROP
iptables -p FORWARD DROPF

echo "allow local loop"
iptables -A INPUT -i lo -p all -j ACCEPT
iptables -A OUTPUT -o lo -p all -j ACCEPT

echo "allow common tcp port"
iptables -A INPUT -m multiport --dport 22,80,3306,8000:8999 -p tcp -j ACCPET

echo "control ICMP request: allow ping out, but not income"
iptables -A INPUT -p icmp --icmp-type Echo-Request -j DROP
iptables -A INPUT -p icmp --icmp-type Echo-Reply -j ACCEPT
iptables -A INPUT -p icmp --icmp-type destination-Unreachable -j ACCEPT

echo "drop invalid pkt"
iptables -A INPUT -m state --state INVALID -j DROP
iptables -A OUTPUT -m state --state INVALID -j DROP
iptables -A FORWARD -m state --state INVALID -j DROP

echo "protect DDOS attack"
iptables -A INPUT -p tcp --dport 80 --syn -m recent --name web_viewer --rcheck --seconds 60 --hitcount 30 -j LOG --log-prefix 'CC_ATTACK:' --log-ip-options
iptables -A INPUT -p tcp --dport 80 --syn -m recent --name web_viewer --rcheck --seconds 60 --hitcount 30 -j DROP
iptables -A INPUT -p tcp --dport 80 --syn -m recent --name web_viewer --set -j ACCEPT

echo "protect ssh attack"
iptables -A INPUT -p tcp --dport 22 -m recent --name SSH_Brute --rcheck --seconds 300 --hitcount 3 -j DROP
#iptables -A INPUT -p tcp --dport 22 -m recent --name SSH_Brute --update --seconds 3600 --hitcount 3 -j DROP
iptables -A INPUT -p tcp --dport 22 -m recent --name SSH_Brute --set -j ACCEPT
