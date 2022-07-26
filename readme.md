`mongoimport --db="emps" --collection="employees" --jsonArray --file="emp.json"`

Task 1: Find all users that are over 30 years old

Task 2: Find all users whose age is less than or equal to 30

Task 3: Find all the users whose favorite restaurant is "Taco Bell"

Task 4: Change Tara's personal phone number to "12-345-67-89"

Task 5: Find all users whose favorite artist is "Hillary Hewitt Goldwynn-Post"

Task 6: Delete the employee whose name starts with "R"

Task 7: List all users and sort them by name. (use the method sort: `.sort({name: 1})` or `.sort({name: -1})`)

Task 8: Create a new document with `_id=1`

Task 9: Create again a new document with `_id=1`

Task 8: Update the document with `_id=1`, add your details (`updateOne` / `findAndModify`)
```javascript
{
    "name": "YOUR_NAME",
    "age": YOUR_AGE,
    "phone": {
        "personal": "871-371-705",
        "work": "493-270-830",
        "ext": 2042
    },
    "favorites": {
        "restaurant": "YOUR_FAVORITE_RESTAURANT",
        "artist": "YOUR_FAVORITE_ARTIST"
    }
}
```

Task 9: Increment the document with `_id=1` age by 5 (`$inc`)

Task 10: Increment the document with `_id=1` age by -4 (`$inc`)

Task 11: Multiple the document with `_id=1` age value by 3 (`$mul`)

Task 12: For all documents add the array "hobbies"

Task 13: For document with `_id=1` add "Golf" to hobbies (`$addToSet` / `$push`)

Task 14: For document with `_id=1`, remove the "age" field (`$unset`)

Task 15: For document with `_id=1` add "Basketball" to hobbies at position 0

Task 16: For document with `_id=1` in hobbies replace "Basketball" with "Football"
