# py2.7
# needv install dateutil
# pip install python-dateutil --upgrade

from dateutil import parser

dt = parser.parse('Aug 28 2015 12:00AM')
# dt = parser.parse('Wed Oct 24 14:16:20 2018')

print dt
