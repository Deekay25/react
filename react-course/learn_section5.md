## No.65 understanding 'keys' important
### when you have a list and you are updating that list
### react will automatically go through every time and update them 
### since the contents are similar
### before it updates the new item you added, in a large it will make it slow and buggy
### use keys={something.id} to prevent this at the top of your list items