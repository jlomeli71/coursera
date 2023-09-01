import sqlite3

conn = sqlite3.connect('./sqlite_dbs/emaildb.sqlite')
cur = conn.cursor()

cur.execute('DROP TABLE IF EXISTS Counts')

cur.execute('CREATE TABLE Counts (org TEXT, count INTEGER)')

fname = input('Enter file name: ')

if (len(fname) < 1): fname = './data_files/mbox.txt'

with open(fname, 'r') as fh:
    for line in fh:
        if not line.startswith('From: '): continue
        pieces = line.split()
        org = pieces[1].split('@')[1]
        # org = email.split('@')[1].split('.')[0]
        # print(org)
        cur.execute('SELECT count FROM Counts WHERE org = ? ', (org,))
        row = cur.fetchone()
        if row is None:
            cur.execute('INSERT INTO Counts (org, count) VALUES (?, 1)', (org,))
        else:
            cur.execute('UPDATE Counts SET count = count + 1 WHERE org = ?', (org,))
    
    conn.commit()

sqlstr = 'SELECT org, count FROM Counts ORDER BY count DESC'

for row in cur.execute(sqlstr):
    print(str(row[0]), row[1])

cur.close()
