# masai-notes-app

#### Description

A Web application for creating personalized notes.

### Usage

#### Auth Route

----------------------------------------------------------------------
Method |    Route                   | Description
----------------------------------------------------------------------
POST   | /api/auth/user/register    | Register a user
POST   | /api/auth/user/login       | Login a user
----------------------------------------------------------------------

#### Examples:

Register a user:

{
    firstName: 'John',
    lastName: 'Wick',
    age: 35,
    role: 'Administrator',
    location: 'New York',
    username: 'JohnWick',
    email: 'johnwick@hotmail.com',
    password: 'password'
}

Login a user:

{ 
    email: 'john@hotmail.com',
    password: 'password'
}

#### Notes Route

----------------------------------------------------------------------
Method |    Routes                  | Description
----------------------------------------------------------------------
GET    | /api/notes                 | all notes of a user
POST   | /api/notes/create          | create a note
PATCH  | /api/notes/update/:_id     | update specific note of a user
DELETE | /api/notes/delete/:_id     | delete specific note of a user
----------------------------------------------------------------------

#### Examples:

{
    title: 'List of corrupt officers',
    content: 'Majhnu Bhai, Rocky Bhai, and Gogo',
    priority: 'Urgent',
    isCompleted: false,
    author: 'JohnWick',
}