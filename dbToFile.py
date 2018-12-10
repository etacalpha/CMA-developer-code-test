import sqlite3
# import collections
import json

conn = sqlite3.connect("cma-artworks.db")
cursor = conn.cursor()

# I could not work out the sql statement to return all artwork with rows
# joined from creator table where description had multiple rows with the same ID
# https://stackoverflow.com/questions/7867397/sqlite-merging-rows-into-single-row-if-they-share-a-column
# has good information but I am unsure how to apply it


queryAll = ("SELECT distinct artwork.id as artworkID,\n"
            "              artwork.title as artworkTitle,\n"
            "              artwork.accession_number as artworkPhoto,\n"
            "              artwork.tombstone as artworkTombstone,\n"
            "              department.name as departmentName,\n"
            "              creator.role as creatorRole,\n"
            "              creator.description as creatorDescription\n"
            "FROM artwork\n"
            "join artwork__department on artwork.id = artwork__department.artwork_id\n"
            "join department on department.id = artwork__department.department_id\n"
            "join artwork__creator on artwork.id = artwork__creator.artwork_id\n"
            "join creator on creator.id = artwork__creator.creator_id group by artwork.id;")

results = cursor.execute(queryAll)
items = [dict(zip([key[0] for key in cursor.description], row)) for row in results]
myJson = (json.dumps({'items': items}, indent=2, separators=(',', ': ')))

with open('./src/assets/cma-artwork.json', 'w') as artwork:
    print(myJson, file=artwork)
print(myJson)
conn.close()

# This is another way I had converted db data to json. I chose the above as it was relatively easy
# to understand and I could not tell a difference in code


# cursor.execute(queryAll)
# resultsSearch = cursor.fetchall()
# objectListAll = []
# for i in resultsSearch:
#     d = dict()
#     d['artworkId'] = i[0]
#     d['artworkTitle'] = i[1]
#     d['artworkPhoto'] = i[2]
#     d['artworkTombstone'] = i[3]
#     d['departmentName'] = i[4]
#     d['creatorRole'] = i[5]
#     d['creatorDescription'] = i[6]
#     objectListAll.append(d)
#
# myJson = json.dumps(objectListAll, indent=2, separators=(',', ': '))
# print(myJson)
#
# conn.close()
