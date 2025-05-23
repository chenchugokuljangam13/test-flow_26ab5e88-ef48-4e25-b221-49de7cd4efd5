Q1: What database changes would be required to the starter code to allow for different roles for authors of a blog post? Imagine that we'd want to also be able to add custom roles and change the permission sets for certain roles on the fly without any code changes.
Answer: There can be an addition of fields, 'owner' which will be a string and 'editors' which will be a list of strings, in the schema of Post. And other who are viewing the post can be given the role of 'Viewers'. 
For custom roles we can have a different table for role and permissions. The Roles table will have many to one relation with both Post and User table.

Q2: What considerations would need to be made for both fetching and editing blog posts given these changes? What edge cases might need to be considered?
Answer: While fetching the posts, Delete button should only be enabled for the Owner and edit button should be enabled for both Owner and Editor. For editing, it can be made that Editors can request a change from Owner and if the Owner accept their request than the edit will be done. 
It can be considered if only the logged in user is a viewer or if a person who is not a user can also view the post.