Terminology

- database: contains tables
- relation (or table): contains tuples and attributes
- tuple (or row): 
- attribute (a column or field)

CRUD (Create, Read, Update, Delete)
- Create a table
- retrive data
- Inser data
- Delete data


CREATE TABLE Users (
	name VARCHAR(128),
	email VARCHAR(128)
)

INSERT INTO Users (name, email) 
VALUES ('Cristin', 'holi@arriba.edi')

DELETE FROM Users 
WHERE email='ted@cali.com'

UPDATE Users SET name='Charles' 
WHERE email='cc@michi@com'

SELECT * FROM Users

SELECT * FROM Users 
WHERE email='eddy@lac.com'

SELECT * FROM Users
ORDER BY name

email.db

############################################

In sqlite

CREATE TABLE Ages ( 
  name VARCHAR(128), 
  age INTEGER
)

DELETE FROM Ages;
INSERT INTO Ages (name, age) VALUES ('Aaron', 31);
INSERT INTO Ages (name, age) VALUES ('Kyren', 30);
INSERT INTO Ages (name, age) VALUES ('Essie', 37);
INSERT INTO Ages (name, age) VALUES ('Philippos', 33);
INSERT INTO Ages (name, age) VALUES ('Keigan', 14);
INSERT INTO Ages (name, age) VALUES ('Rayne', 22);

###################################################

import json
import sqlite3

conn = sqlite3.connect('rosterdb.sqlite')
cur = conn.cursor()

# Do some setup
cur.executescript('''
DROP TABLE IF EXISTS User;
DROP TABLE IF EXISTS Member;
DROP TABLE IF EXISTS Course;

CREATE TABLE User (
    id     INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
    name   TEXT UNIQUE
);

CREATE TABLE Course (
    id     INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
    title  TEXT UNIQUE
);

CREATE TABLE Member (
    user_id     INTEGER,
    course_id   INTEGER,
    role        INTEGER,
    PRIMARY KEY (user_id, course_id)
)
''')

fname = input('Enter file name: ')
if len(fname) < 1:
    fname = 'roster_data_sample.json'

# [
#   [ "Charley", "si110", 1 ],
#   [ "Mea", "si110", 0 ],

str_data = open(fname).read()
json_data = json.loads(str_data)

for entry in json_data:

    name = entry[0]
    title = entry[1]

    print((name, title))

    cur.execute('''INSERT OR IGNORE INTO User (name)
        VALUES ( ? )''', ( name, ) )
    cur.execute('SELECT id FROM User WHERE name = ? ', (name, ))
    user_id = cur.fetchone()[0]

    cur.execute('''INSERT OR IGNORE INTO Course (title)
        VALUES ( ? )''', ( title, ) )
    cur.execute('SELECT id FROM Course WHERE title = ? ', (title, ))
    course_id = cur.fetchone()[0]

    cur.execute('''INSERT OR REPLACE INTO Member
        (user_id, course_id) VALUES ( ?, ? )''',
        ( user_id, course_id ) )

    conn.commit()

