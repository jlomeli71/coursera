import xml.etree.ElementTree as ET
import sqlite3

conn = sqlite3.connect('./sqlite_dbs/trackdb.sqlite')
cur = conn.cursor()

# Make some fresh tables using executescript()
cur.executescript('''
DROP TABLE IF EXISTS Artist;
DROP TABLE IF EXISTS Genre;
DROP TABLE IF EXISTS Album;
DROP TABLE IF EXISTS Track;

CREATE TABLE Artist (
    id  INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
    name    TEXT UNIQUE
);

CREATE TABLE Genre (
    id  INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
    name    TEXT UNIQUE
);

CREATE TABLE Album (
    id  INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
    artist_id  INTEGER,
    title   TEXT UNIQUE
);

CREATE TABLE Track (
    id  INTEGER NOT NULL PRIMARY KEY 
        AUTOINCREMENT UNIQUE,
    title TEXT  UNIQUE,
    album_id  INTEGER,
    genre_id  INTEGER,
    len INTEGER, rating INTEGER, count INTEGER
);
''')

fname = input('Enter file name: ')
if ( len(fname) < 1 ) : fname = './data_files/Library.xml'

# <key>Track ID</key><integer>369</integer>
# <key>Name</key><string>Another One Bites The Dust</string>
# <key>Artist</key><string>Queen</string>
def lookup(d, key):
    found = False
    for child in d:
        if found : return child.text
        if child.tag == 'key' and child.text == key :
            found = True
    return None

stuff = ET.parse(fname)
all = stuff.findall('dict/dict/dict')
print('Dict count:', len(all))
# print(all)

for entry in all:
    
    if ( lookup(entry, 'Track ID') is None ) : continue
    # print(entry)
    track_title = lookup(entry, 'Name')
    artist_name = lookup(entry, 'Artist')
    album_title = lookup(entry, 'Album')
    genre_name = lookup(entry, 'Genre')
    track_len = lookup(entry, 'Total Time')
    track_count = lookup(entry, 'Track Count')
    track_rating = lookup(entry, 'Rating')

    if track_title is None or artist_name is None or album_title is None or genre_name is None : continue

    print('Artist:', artist_name, 'Genre:', genre_name, 'Album', album_title, 'Song name:', track_title, 'Track lenght:', track_len, 'Track Rating:', track_rating, 'Track Count:', track_count)

    cur.execute('''INSERT OR IGNORE INTO Artist (name) 
        VALUES ( ? )''', ( artist_name, ) )
    
    cur.execute('SELECT id FROM Artist WHERE name = ? ', (artist_name, ))
    artist_id = cur.fetchone()[0]

    #########################

    cur.execute('''INSERT OR IGNORE INTO Genre (name) 
        VALUES ( ? )''', ( genre_name, ) )
    
    cur.execute('SELECT id FROM Genre WHERE name = ? ', (genre_name, ))
    genre_id = cur.fetchone()[0]

    #########################

    cur.execute('''INSERT OR IGNORE INTO Album (title, artist_id) 
        VALUES ( ?, ? )''', ( album_title, artist_id ) )
    
    cur.execute('SELECT id FROM Album WHERE title = ? ', (album_title, ))
    album_id = cur.fetchone()[0]

    #########################

    cur.execute('''INSERT OR REPLACE INTO Track (title, album_id, genre_id, len, rating, count) 
        VALUES ( ?, ?, ?, ?, ?, ? )''', ( track_title, album_id, genre_id, track_len, track_rating, track_count ) )
    
    #########################

conn.commit()


'''
SELECT Track.title, Artist.name, Album.title, Genre.name 
    FROM Track JOIN Genre JOIN Album JOIN Artist 
    ON Track.genre_id = Genre.ID and Track.album_id = Album.id 
        AND Album.artist_id = Artist.id
    ORDER BY Artist.name LIMIT 3
'''