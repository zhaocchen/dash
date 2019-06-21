# py2.7
# validate-ip-address
# :type IP: str
# :rtype: str

IP = "172.16.254.1"

res = "Neither"
# check v4
ipList = IP.split('.')
for (i, v) in enumerate(ipList):
  currentInt = int(v)
  if currentInt < 0 or currentInt > 255:
    break
  elif i == 3:
    res = "IPv4"
    print i, v

print res